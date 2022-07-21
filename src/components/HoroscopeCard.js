import React from "react";
import "./HoroscopeCard.css";

const HoroscopeCard = ({ horoscope }) => {
  return (
    <div className="horoscope-card">
      <label>Date Range</label>
      <h2>{horoscope.date_range}</h2>
      <label>Today's Horoscope</label>
      <h2>{horoscope.current_date}</h2>
      <p>{horoscope.description}</p>
      <label>Compatibility</label>
      <h2>{horoscope.compatibility}</h2>
      <div className="horoscope-details">
        <div>
          <label>Mood</label>
          <h2>{horoscope.mood}</h2>
        </div>
        <div>
          <label>Color</label>
          <h2>{horoscope.color}</h2>
        </div>
        <div>
          <label>Lucky Number</label>
          <h2>{horoscope.lucky_number}</h2>
        </div>
        <div>
          <label>Lucky Time</label>
          <h2>{horoscope.lucky_time}</h2>
        </div>
      </div>
    </div>
  );
};

export default HoroscopeCard;
