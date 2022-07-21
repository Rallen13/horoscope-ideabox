import React, { Component } from "react";
import { getHoroscope } from "./ApiCalls";
import Form from "./components/Form";
import HoroscopesContainer from "./components/HoroscopesContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      horoscope: {},
    };
  }

  componentDidMount() {
    getHoroscope("aries", "today").then((data) => {
      this.setState({ horoscope: data });
    });
  }

  getNewHoroscope = ({ sign, day }) => {
    getHoroscope(sign, day).then((data) => {
      console.log(data);
      this.setState({ horoscope: data });
    });
  };

  render() {
    return (
      <main className="App">
        <h1>Generate Horoscope</h1>
        <Form getNewHoroscope={this.getNewHoroscope} />
        <HoroscopesContainer horoscope={this.state.horoscope} />
      </main>
    );
  }
}

export default App;
