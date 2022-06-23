// @ts-nocheck
import React, { Component } from "react";
import CalendarBoard from "./components/CalendarBoard";
import { BrowserRouter as  Router, Routes, Route } from "react-router-dom";
// import { Router, Switch, BrowserRouter, Route, Routes } from 'react-router-dom'
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
// function App(props) {
//   return (
//   <Router>
//   <Routes>
//     <Route path = "/" render={(props) => (<Login {...props} authed= {true}/>)}/>
//     <Route path = "/main" render={(props) => (<CalendarBoard />)}/>
//   </Routes>
//   </Router>
//   )
// }
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('Props in App', this.props)
    return (
      // <div className = "router">
        <Router>
            <Routes>
              <Route path="/main" element={<Login userLogin={this.props.userLogin} registerUser={this.props.registerUser}/>} />
              <Route path="/" element={<CalendarBoard />} />
           </Routes>
        </Router>
      // </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
