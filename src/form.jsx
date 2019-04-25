import React, { Component } from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.css";

class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: ""
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: ""
    });
    // this.props.onChange({
    //   firstName: "",
    //   lastName: "",
    //   userName: "",
    //   email: "",
    //   password: ""
    // });
  };
  render() {
    return (
      <form>
        <div className="form-group">
          <label>First Name</label>
          <input
            name="firstName"
            type="text"
            className="form-control"
            placeholder="Enter First Name"
            value={this.state.firstName}
            onChange={e => this.change(e)}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            name="lastName"
            type="text"
            className="form-control"
            placeholder="Enter Last Name"
            value={this.state.lastName}
            onChange={e => this.change(e)}
          />
        </div>
        <div className="form-group">
          <label>User Name</label>
          <input
            name="userName"
            type="text"
            className="form-control"
            placeholder="Enter User Name"
            value={this.state.userName}
            onChange={e => this.change(e)}
          />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            name="email"
            type="email"
            className="form-control"
            placeholder="Enter Email"
            value={this.state.email}
            onChange={e => this.change(e)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            name="password"
            type="password"
            className="form-control"
            placeholder="Enter Password"
            // value={this.state.password}
            // onChange={e => this.change(e)}
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlFile1">Example file input</label>
          <input
            type="file"
            class="form-control-file"
            id="exampleFormControlFile1"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={e => this.onSubmit(e)}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
