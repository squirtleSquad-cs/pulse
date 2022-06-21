import React from "react";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import actionCreators from "./actions";
import { getHashValues } from "./utils";

class CalendarBoard extends React.Component {
    render() {
        return (
            <div className='pulse-calendar'>
                <div className='calendar-main'>
                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        headerToolbar={{
                            left: 'prev, next today',
                            center: 'title',
                            right: 'dayGridMonth, timeGridWeek, timeGridDay'
                        }}
                        initialView='dayGridMonth'
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        weekends={this.props.weekendsVisible}
                        datesSet={this.handleDates}
                        select={this.handleDateSelect}
                        events={this.props.events}
                        eventContent={renderEventContent} // custom render function
                        eventClick={this.handleEventClick}
                        eventAdd={this.handleEventAdd}
                        eventChange={this.handleEventChange} // called for drag-n-drop/resize
                        eventRemove={this.handleEventRemove}
            </div>
        )
    }
}

export default connect(mapStateToProps, actionCreators)(CalendarBoard)