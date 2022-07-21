import React, { Component } from "react";
import { getHoroscope } from "./ApiCalls";

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
        <section className="horoscope-container">
          <div className="horoscope-card">
            <h2>{this.state.horoscope.date_range}</h2>
            <h2>{this.state.horoscope.current_date}</h2>
            <h2>{this.state.horoscope.description}</h2>
            <h2>{this.state.horoscope.compatibility}</h2>
            <h2>{this.state.horoscope.mood}</h2>
            <h2>{this.state.horoscope.color}</h2>
            <h2>{this.state.horoscope.lucky_number}</h2>
            <h2>{this.state.horoscope.lucky_time}</h2>
          </div>
        </section>
      </main>
    );
  }
}

export default App;
