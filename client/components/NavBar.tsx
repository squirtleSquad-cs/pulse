import React from "react";

class NavBar extends React.Component {

    render() {
        return (

                  <div className='demo-app-sidebar'>
                    <div className='demo-app-sidebar-section'>
                      <h2>Instructions</h2>
                      <ul>
                        <li>Select dates and you will be prompted to create a new event</li>
                        <li>Drag, drop, and resize events</li>
                        <li>Click an event to delete it</li>
                      </ul>
                    </div>
                    <div className='demo-app-sidebar-section'>
                      <label>
                        <input
                          type='checkbox'
                          checked={this.props.weekendsVisible}
                          onChange={this.props.toggleWeekends}
                        ></input>
                        toggle weekends
                      </label>
                    </div>
                    <div className='demo-app-sidebar-section'>
                      <h2>All Events ({this.props.events.length})</h2>
                      <ul>
                        {this.props.events.map(renderSidebarEvent)}
                      </ul>
                    </div>
                  </div>
                )
              
        
    }
}

export default NavBar;