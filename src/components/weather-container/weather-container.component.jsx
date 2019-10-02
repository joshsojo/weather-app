import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import WeatherBadge from "../weather-badge/weather-badge.component";
import WeatherDetails from "../weather-details/weather-details.component";
import SideDetails from "../side-details/side-details.component";
import { formatNumber } from "../../utils";

import "./weather-container.styles.css";

const weatherContainer = () => (
  <Container>
    <Row className="weather-container">
      <Col>
        <SideDetails
          row1={"Oklahoma City"}
          row2={"Oklahoma"}
          row3={"United States"}
        />
        <p>Population: {formatNumber(59999)}</p>
      </Col>
      <WeatherBadge
        day={"Today"}
        weatherIcon={"10d"}
        high_temp={"73"}
        low_temp={"55"}
      />
      <SideDetails row1={"Wednesday, 30"} row2={"October"} row3={"2019"} />
    </Row>
    <WeatherDetails />
  </Container>
);

export default weatherContainer;
