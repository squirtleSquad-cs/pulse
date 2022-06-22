// @ts-nocheck

const React = require("react");

class Login extends React.Component {
  render() {
    console.log(this.props);
    let { loggedIn, error } = this.props;
    return (
      <div className="usercred-box">
        <div className="usercred-title">Pulse</div>
        <form className="usercred-form">
          <input
            type="text"
            placeholder="enter username"
            name="username"
            id="username"
            required
          />
          <input
            type="password"
            placeholder="enter password"
            name="password"
            id="password"
            required
          />
          <input type="submit" value="Log in" onClick={this.login} />
        </form>
      </div>
    );
  }
}

export default Login;
