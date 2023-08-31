import React, { Component } from 'react';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoggedIn: false,
      showPopup: false, 
    };
  }

  handleUsernameChange = (event) => {
    const input = event.target.value.replace(/[^A-Za-z]/g, ''); 
    this.setState({ username: input });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleUsernameKeyPress = (event) => {
    const key = event.key;
    if (!/[a-zA-Z]/.test(key)) {
      event.preventDefault();
      this.setState({ showPopup: true }); 
      setTimeout(() => {
        this.setState({ showPopup: false }); 
      }, 1500);
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    
    if (this.state.username === 'shreya' && this.state.password === 'sk0912') {
      this.setState({ isLoggedIn: true });
    }
  };

  render() {
    if (this.state.isLoggedIn) {
      return <div>Welcome, {this.state.username}!</div>;
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleUsernameChange}
              onKeyPress={this.handleUsernameKeyPress}
            />
            {this.state.showPopup && <div className="popup">Enter only Alphabets.</div>}
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      );
    }
  }
}

export default LoginScreen;
