import React, { Component } from "react";
import "./App.css";
import HoroscopesContainer from "./components/HoroscopesContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      horoscopes: [
        {
          date_range: "Apr 21 - May 20",
          current_date: "July 19, 2022",
          description:
            "That shift in the atmosphere around you isn't your imagination. There's a certain something out there that's changed, and it's for the better. You may not be especially fond of change in general, but this time you'll love it.",
          compatibility: "Aries",
          mood: "Curious",
          color: "Orange",
          lucky_number: "18",
          lucky_time: "3pm",
        },
      ],
    };
  }

  render() {
    return (
      <main className="App">
        <h1>Horoscope Generator</h1>
        <HoroscopesContainer />
      </main>
    );
  }
}

export default App;
