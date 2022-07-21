import React, { Component } from "react";
import { getHoroscope } from "./ApiCalls";
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

  render() {
    return (
      <main className="App">
        <h1>Generate Horoscope</h1>
        <HoroscopesContainer horoscope={this.state.horoscope} />
      </main>
    );
  }
}

export default App;
