import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      sign: "aries",
      day: "today",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitRequest = (event) => {
    event.preventDefault();
    const newRequest = {
      ...this.state,
    };
    this.props.getNewHoroscope(newRequest);
    this.resetInputs();
  };

  resetInputs = () => {
    this.setState({ title: "aries", description: "today" });
  };

  render() {
    return (
      <form>
        <label>Sign:</label>
        <select
          name="sign"
          id="sign"
          value={this.state.sign}
          onChange={this.handleChange}
        >
          <option value="aries">Aries</option>
          <option value="taurus">Taurus</option>
          <option value="gemini">Gemini</option>
          <option value="cancer">Cancer</option>
          <option value="leo">Leo</option>
          <option value="virgo">Virgo</option>
          <option value="libra">Libra</option>
          <option value="scorpio">Scorpio</option>
          <option value="sagittarius">Sagittarius</option>
          <option value="capricorn">Capricorn</option>
          <option value="aquarius">Aquarius</option>
          <option value="pisces">Pisces</option>
        </select>
        <label>Day:</label>
        <select
          name="day"
          id="day"
          value={this.state.day}
          onChange={this.handleChange}
        >
          <option value="today">Today</option>
          <option value="tomorrow">Tomorrow</option>
          <option value="yesterday">Yesterday</option>
        </select>

        <button>SUBMIT</button>
      </form>
    );
  }
}

export default Form;
