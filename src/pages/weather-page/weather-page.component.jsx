import React from "react";

import { connect } from "react-redux";

import { selectCountry } from "../../redux/select/select.actions";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import WeatherContainer from "../../components/weather-container/weather-container.component";
import yourHandle from "countrycitystatejson";
import Select from "react-select";

import "./weather-page.styles.css";

const API_KEY = "e67098245480152331de72027651bd84";
const WeatherPage = ({ selectCountry }) => {
  return (
    <div>
      <Container>
        <h1 className="page-name">Weather App</h1>
        <Row>
          <Col>
            <form>
              <Form.Row>
                <Form.Group xs={12} lg={3} as={Col} role="form">
                  <Select
                    type="search"
                    placeholder="Select Country"
                    value={selectCountry}
                    // onChange={this.handleCountry}
                    // options={countryOptions}
                  />
                </Form.Group>

                <Form.Group xs={12} lg={3} as={Col} role="form">
                  <Select
                    type="search"
                    placeholder="Select Country"
                    // value={selectedState}
                    // onChange={this.handleState}
                    // options={this.state.stateOptions}
                  />
                </Form.Group>

                <Form.Group xs={12} lg={3} as={Col} role="form">
                  <Select
                    type="search"
                    placeholder="Select Country"
                    // value={selectedCity}
                    // // onChange={this.handleCity}
                    // options={this.state.cityOptions}
                  />
                </Form.Group>

                <Col xs={12} lg={3} role="form">
                  <Button
                    type="submit"
                    variant="primary"
                    // disabled={!this.state.selectedCity}
                  >
                    Check Weather
                  </Button>
                </Col>
              </Form.Row>
            </form>
          </Col>
        </Row>
        <WeatherContainer />
      </Container>
    </div>
  );
};

const mapDisptachToProps = dispatch => ({
  slelectCountry: country => dispatch(selectCountry(country))
});

export default connect(mapDisptachToProps)(WeatherPage);
