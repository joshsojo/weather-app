import React from "react";
import Col from "react-bootstrap/Col";

import "./weather-badge.styles.css";

const WeatherBadge = ({ day, weatherIcon, high_temp, low_temp }) => (
  <Col>
    <h3 className="day">{day}</h3>
    <img
      className="weather-icon"
      src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
      alt=""
    />
    <p className="temperatures">
      {high_temp}
      <sup className="degree">o</sup>
      {low_temp}
      <sup>o</sup>
    </p>
  </Col>
);

export default WeatherBadge;
