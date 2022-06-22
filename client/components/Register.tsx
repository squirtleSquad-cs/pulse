//@ts-nocheck
const React = require("react");

class Register extends React.Component {
  render() {
    let { loggedIn, error } = this.props;
    return (
      <div className="usercred-box">
        <div className="usercred-title">Pulse</div>
        <form className="usercred-form">
          <input
            type="text"
            placeholder="username"
            name="username"
            id="username"
            required
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            id="password"
            required
          />
          <input type="submit" value="Register" onClick={register} />
        </form>
      </div>
    );
  }
}

export default Register;
