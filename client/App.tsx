import React, { Component } from "react";
import CalendarBoard from "./components/CalendarBoard";
import NavBar from "./components/NavBar";

class App extends Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    return(
    <div>
      <CalendarBoard></CalendarBoard>
      <NavBar></NavBar>
      </div>
    )
  }
}

export default App;
