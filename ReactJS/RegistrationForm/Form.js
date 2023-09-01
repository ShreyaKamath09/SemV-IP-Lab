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
        this.setState({ showPopup: true }); 
      }, 1500);
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    
    if (this.state.username === 'shreya' && this.state.password === 'sk0912') {
      this.setState({ isLoggedIn: true });
    }
  };

  reset = (event) => {
    this.setState({username:"",password:"",address:""})
  }

  render() {
    if (this.state.isLoggedIn) {
      return <div>Welcome, {this.state.username}!</div>;
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleUsernameChange}
              onKeyPress={this.handleUsernameKeyPress}
            />
            {this.state.showPopup && <div className="popup">Enter only Alphabets.</div>}
          </div>
          <div>
            <label>Age</label>
            <input
              type="number"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </div>
          <div>
            <label>Address</label>
            <input
              type="text"
             value={this.state.address}
              //onChange={this.handlePasswordChange}
            />
          </div>
          <div>
            <label>Year:  </label>
            <label>FE</label>
            <input
              type="checkbox"
            />
            <label>SE</label>
            <input
              type="checkbox"
            />
            <label>TE</label>
            <input
              type="checkbox"
            />
            <label>BE</label>
            <input
              type="checkbox"
            />
          </div>
          <button type="submit">Submit</button>
          <button onClick={this.reset}>Reset</button>
        </form>
      );
    }
  }
}

export default LoginScreen;
