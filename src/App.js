import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      horoscope: {
        date_range: "Apr 21 - May 20",
        current_date: "July 19, 2022",
        description:
          "That shift in the atmosphere around you isn't your imagination. There's a certain something out there that's changed, and it's for the better. You may not be escpecially fond of change in general, but this time you will love it.",
        compatibility: "Aries",
        mood: "Curious",
        color: "Orange",
        lucky_number: "18",
        lucky_time: "3pm",
      },
    };
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
