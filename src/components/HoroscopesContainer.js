import React from "react";
import "./HoroscopesContainer.css";

const HoroscopesContainer = ({ horoscope }) => {
  return (
    <section className="horoscope-container">
      <div className="horoscope-card">
        <h2>{horoscope.date_range}</h2>
        <h2>{horoscope.current_date}</h2>
        <h2>{horoscope.description}</h2>
        <h2>{horoscope.compatibility}</h2>
        <h2>{horoscope.mood}</h2>
        <h2>{horoscope.color}</h2>
        <h2>{horoscope.lucky_number}</h2>
        <h2>{horoscope.lucky_time}</h2>
      </div>
    </section>
  );
};

export default HoroscopesContainer;
