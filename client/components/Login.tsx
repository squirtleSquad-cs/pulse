// @ts-nocheck
import React from 'react';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "../styling.css"
import { Routes, Route, Link, useNavigate } from "react-router-dom";


class Login extends React.Component {
  // let userVerified = false;
  // const navigate = useNavigate();
  // React.useEffect(() => {
  //   if (shouldRedirect) {
  //     navigate('/home');
  //   }
  render() {
    console.log(this.props);
    let { loggedIn, error } = this.props;
    return (
      <div>
        <div className="rippleContainer">
        <h1> PULSE </h1>
   <button className="rippleButton"></button>
   <button className="rippleButton"></button>
   <button className="rippleButton"></button>
   <button className="rippleButton"></button>
   <button className="rippleButton"></button>

          <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      >
      <TextField id="username" label="Username" variant="filled" />
      <TextField id="password" label="Password" variant="filled" />
        <Stack spacing={2} direction="row">
    </Stack>
      <Button variant="contained" onClick={this.props.userLogin}>Log in</Button>
      <Button variant="outlined" onClick={this.props.registerUser}>Create User</Button>
    </Box>
      {/* </form>
      // </div> */}
      </div>
      </div>
    );
  }
}

export default Login;

// <div className="usercred-box">
//   <div className="usercred-title">Pulse</div>
//   <form className="usercred-form">
//     <input
//       type="text"
//       placeholder="enter username"
//       name="username"
//       id="username"
//       required
//     />
//     <input
//       type="password"
//       placeholder="enter password"
//       name="password"
//       id="password"
//       required
//     />