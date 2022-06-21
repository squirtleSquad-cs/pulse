import React from "react";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import actionCreators from "../actions/actions";
import { getHashValues } from "../utils";


class CalendarBoard extends React.Component {
  render() {
    return (
      <div className="pulse-calendar">
        {this.renderNavBar()}
        <div className="calendar-main">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: "prev, next today",
              center: "title",
              right: "dayGridMonth, timeGridWeek, timeGridDay",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={this.props.weekendsVisible}
            datesSet={this.handleDates}
            select={this.handleDateSelect}
            events={this.props.events}
            eventContent={renderEventContent}
            eventClick={this.handleEventClick}
            eventAdd={this.handleEventAdd}
            eventChange={this.handleEventChange}
            eventRemove={this.handleEventRemove}
          />
        </div>
      </div>
    );
  }
  
  renderNavBar() {
    return (
      <div className="calendar-navBar">
        <div className="calendar-navBar-section">
          <h2>Instructions</h2>
          <ul>
            <li>Select dates and you will be prompted to create a new event</li>
            <li>Drag, drop, and resize events</li>
            <li>Click an event to delete it</li>
          </ul>
        </div>
        <div className="calendar-navBar-section">
          <label>
            <input
              type="checkbox"
              checked={this.props.weekendsVisible}
              onChange={this.props.toggleWeekends}
            ></input>
            toggle weekends
          </label>
        </div>
        <div className="calendar-navBar-section">
          <h2>All Events ({this.props.events.length})</h2>
          <ul>{this.props.events.map(renderNavBarEvent)}</ul>
        </div>
      </div>
    );
  };
  
// handlers for user actions
  handleDateSelect = (selectInfo) => {
    let calendarApi = selectInfo.view.calendar;
    let title = prompt("Please enter a new title for your event");

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent(
        {
          // will render immediately. will call handleEventAdd
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay,
        },
        true
      ); // temporary=true, will get overwritten when reducer gives new events
    }
  };

  handleEventClick = (clickInfo) => {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  };

  handleDates = (rangeInfo) => {
    this.props
      .requestEvents(rangeInfo.startStr, rangeInfo.endStr)
      .catch(reportNetworkError);
  };

  handleEventAdd = (addInfo) => {
    this.props.createEvent(addInfo.event.toPlainObject()).catch(() => {
      reportNetworkError();
      addInfo.revert();
    });
  };

  handleEventChange = (changeInfo) => {
    this.props.updateEvent(changeInfo.event.toPlainObject()).catch(() => {
      reportNetworkError();
      changeInfo.revert();
    });
  };

  handleEventRemove = (removeInfo) => {
    this.props.deleteEvent(removeInfo.event.id).catch(() => {
      reportNetworkError();
      removeInfo.revert();
    });
  };
  //  v: ending bracket for CalendarBoard
}

// Functions below arent part of CalendarBoard Class
function renderEventContent(eventContent) {
  return (
    <>
      <b>{eventContent.timeText}</b>
      <i>{eventContent.event.title}</i>
    </>
  );
}

function renderNavBarEvent(plainEventObject) {
  return (
    <li key={plainEventObject.id}>
      <b>
        {formatDate(plainEventObject.start, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </b>
      <i>{plainEventObject.title}</i>
    </li>
  );
}

function reportNetworkError() {
  alert("This action could not be completed");
}

function mapStateToProps() {
  const getEventArray = createSelector(
    (state) => state.eventsById,
    getHashValues
  );

  return (state) => {
    return {
      events: getEventArray(state),
      weekendsVisible: state.weekendsVisible,
    };
  };
}

export default connect(mapStateToProps, actionCreators)(CalendarBoard);
