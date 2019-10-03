import React from "react";
import { connect } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import WeatherBadge from "../weather-badge/weather-badge.component";
import WeatherDetails from "../weather-details/weather-details.component";
import SideDetails from "../side-details/side-details.component";
import { formatNumber, getDate, getDay, getMonth, getYear } from "../../utils";

import "./weather-container.styles.css";

const weatherContainer = ({
  weatherData: { weatherData },
  selectedCountry: { selectedCountry },
  selectedState: { selectedState },
  selectedCity: { selectedCity }
}) => (
  <Container>
    <Row className="weather-container">
      <Col>
        <SideDetails
          row1={selectedCity ? selectedCity.label : null}
          row2={selectedCity ? selectedState.label : null}
          row3={selectedCountry ? selectedCountry.label : null}
        />
        <p>
          Population:
          {weatherData ? formatNumber(weatherData.city.population) : "00000"}
        </p>
      </Col>
      <WeatherBadge
        day={"Today"}
        weatherIcon={"10d"}
        high_temp={"73"}
        low_temp={"55"}
      />
      <SideDetails
        row1={`${getDay()}, ${getDate()}`}
        row2={getMonth()}
        row3={getYear()}
      />
    </Row>
    <WeatherDetails data={weatherData.list} />
  </Container>
);

const mapStateToProps = ({ weather, select }) => ({
  weatherData: weather.weatherData,
  selectedCountry: select.selectedCountry,
  selectedState: select.selectedState,
  selectedCity: select.selectedCity
});

export default connect(mapStateToProps)(weatherContainer);
