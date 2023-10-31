import React, { Component } from 'react';


class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      gender: 'male',
      subscribe: false,
      country: 'usa',
    };
  }


  handleChange = (event) => {
    const { name, value, type, checked } = event.target;


    this.setState((prevState) => ({
      [name]: type === 'checkbox' ? checked : value,
    }));
  };


  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, gender, subscribe, country } = this.state;
    const userDetails = `Name: ${name}\nEmail: ${email}\nGender: ${gender}\nRemember me: ${subscribe ? 'Yes' : 'No'}\nCountry: ${country}`;
    alert('Form submitted with the following details:\n\n' + userDetails);
  };  


  handleReset = () => {
    this.setState({
      name: '',
      email: '',
      gender: 'male',
      subscribe: false,
      country: 'default',
    });
  };


  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.handleSubmit(event);
    } else if (event.key === 'Escape') {
      this.handleReset();
    }
  };


  render() {
    return (
      <div>
        <h1>Registration Form</h1>
        <form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Gender:
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === 'male'}
              onChange={this.handleChange}
            />{' '}
            Male
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === 'female'}
              onChange={this.handleChange}
            />{' '}
            Female
            <input
              type="radio"
              name="gender"
              value="other"
              checked={this.state.gender === 'other'}
              onChange={this.handleChange}
            />{' '}
            Other
          </label>
          <br />
          <label>
            Remember me
            <input
              type="checkbox"
              name="subscribe"
              checked={this.state.subscribe}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Country:
            <select
              name="country"
              value={this.state.country}
              onChange={this.handleChange}
            >
              <option value="default">Default</option>
              <option value="india">India</option>
              <option value="usa">USA</option>
              <option value="canada">Canada</option>
              <option value="uk">UK</option>
            </select>
          </label>
          <br />
          <button type="submit" onClick={this.handleSubmit}>
            Submit
          </button>
          <button type="button" onClick={this.handleReset}>
            Reset
          </button>
        </form>
        <p>Press Enter to submit.</p>
      </div>
    );
  }
}


export default RegistrationForm;
