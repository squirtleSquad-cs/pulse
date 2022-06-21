import React from "react";
import CalendarBoard from "./CalendarBoard";

class NavBar extends React.Component {
  render() {
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
          <ul>{this.props.events.map(renderSidebarEvent)}</ul>
        </div>
      </div>
    );
  }
}

function renderSidebarEvent(plainEventObject) {
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

export default NavBar;
