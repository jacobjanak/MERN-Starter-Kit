import React from 'react';
import API from '../../utils/API.js';

class Signup extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }

  handleChange = e => {
    const newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState)
  }

  handleSubmit = e => {
    e.preventDefault()
    API.createUser(this.state)
  }

  render() {
    return (
      <form>
        <input name="name" type="text" onChange={this.handleChange} />
        <input name="email" type="text" onChange={this.handleChange} />
        <input name="password" type="text" onChange={this.handleChange} />
        <input type="submit" value="Submit" onClick={this.handleSubmit} />
      </form>
    )
  }
}

export default Signup;
