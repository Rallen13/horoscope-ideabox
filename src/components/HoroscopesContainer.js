import React from "react";
import HoroscopeCard from "./HoroscopeCard";
import "./HoroscopesContainer.css";

const HoroscopesContainer = ({ horoscope }) => {
  return (
    <section className="horoscope-container">
      <HoroscopeCard horoscope={horoscope} />
    </section>
  );
};

export default HoroscopesContainer;
