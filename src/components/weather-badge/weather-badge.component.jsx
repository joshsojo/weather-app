import React from "react";
import { connect } from "react-redux";
import Col from "react-bootstrap/Col";

import "./weather-badge.styles.css";

import { kelvinToFehrenheit, kelvinToCelcius } from "../../utils";

const WeatherBadge = ({
  day,
  weatherIcon,
  description,
  high_temp,
  low_temp,
  celcius
}) => (
  <Col>
    <h3 className="day">{day}</h3>
    <img
      className="weather-icon"
      src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
      alt=""
    />
    <p className="description">{description}</p>
    <p className="temperatures">
      <span className="temp-detail">
        {celcius ? kelvinToCelcius(high_temp) : kelvinToFehrenheit(high_temp)}
        <sup>o</sup>
        {celcius ? "C" : "F"}
      </span>

      <span>
        {celcius ? kelvinToCelcius(low_temp) : kelvinToFehrenheit(low_temp)}
        <sup>o</sup>
        {celcius ? "C" : "F"}
      </span>
    </p>
  </Col>
);

const mapStateToProps = ({ weather }) => ({
  celcius: weather.celcius
});

export default connect(mapStateToProps)(WeatherBadge);
