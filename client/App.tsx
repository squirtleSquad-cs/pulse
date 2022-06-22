// @ts-nocheck
import React, { Component } from "react";
import CalendarBoard from "./components/CalendarBoard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login'
import { connect } from "react-redux";
import mapDispatchToProps from "./actions/actions";
// import NavBar from "./components/NavBar";

// const mapDispatchToProps = (dispatch) => ({
//   userLogin: ()
// });

const mapStateToProps = state => {
  return {
    ...state
  }
}

class App extends Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    console.log('Props in App', this.props)
    return (
      <div>
        <Router>
            <Routes>
              <Route path="/" element={<Login userLogin={this.props.userLogin} registerUser={this.props.registerUser}/>} />
              <Route path="/main/" element={<CalendarBoard />} />
           </Routes>
        </Router>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
