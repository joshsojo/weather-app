import React from "react";
import Row from "react-bootstrap/Row";
import WeatherBadge from "../weather-badge/weather-badge.component";
import SideDetails from "../side-details/side-details.component";

const WeatherDetails = ({ details }) => {
  return (
    <Row>
      <WeatherBadge
        day={"Today"}
        weatherIcon={"10d"}
        high_temp={"73"}
        low_temp={"55"}
      />
      <WeatherBadge
        day={"Thursday"}
        weatherIcon={"11d"}
        high_temp={"73"}
        low_temp={"55"}
      />
      <WeatherBadge
        day={"Friday"}
        weatherIcon={"09d"}
        high_temp={"73"}
        low_temp={"55"}
      />
      <WeatherBadge
        day={"Saturday"}
        weatherIcon={"13d"}
        high_temp={"73"}
        low_temp={"55"}
      />
      <WeatherBadge
        day={"Sunday"}
        weatherIcon={"50d"}
        high_temp={"73"}
        low_temp={"55"}
      />
    </Row>
  );
};

export default WeatherDetails;
