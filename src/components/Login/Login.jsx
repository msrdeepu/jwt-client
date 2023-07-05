import { Component } from "react";

import "./login.css";

class LoginForm extends Component {
  state = {
    username: "",
    password: "",
  };

  onSubmitSuccess = () => {
    const { history } = this.props;
    history.replace("/");
  };

  submitForm = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const userDetails = { username, password };
    const url = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    // if (response.ok === true) {
    //   this.onSubmitSuccess();
    // }
  };

  onChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <div className="first-container">
        <div className="form-container">
          <form action="" onSubmit={this.submitForm} className="form">
            <h3>Login Form</h3>
            <br />
            <label htmlFor="username">Username</label>
            <br />
            <input type="text" id="username" onChange={this.onChangeUsername} />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              id="password"
              onChange={this.onChangePassword}
            />
            <br />

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
