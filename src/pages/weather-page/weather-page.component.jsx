import React from "react";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import WeatherContainer from "../../components/weather-container/weather-container.component";
import Search from "../../components/search/search.component";

import "./weather-page.styles.css";

const WeatherPage = () => {
  return (
    <div>
      <Container>
        <h1 className="page-name">Weather App</h1>
        <Search />
        <WeatherContainer />
      </Container>
    </div>
  );
};

const mapStateToProps = ({ weather }) => ({
  weatherData: weather.weatherData
});

export default connect(mapStateToProps)(WeatherPage);
