import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import WeatherDetails from "./components/weather-details/weather-details.component";
import WeatherContainer from "./components/weather-container/weather-container.component";
import yourHandle from "countrycitystatejson";
import Select from "react-select";

const API_KEY = "e67098245480152331de72027651bd84";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      states: [],
      cities: [],
      selectedCountry: "",
      selectedState: "",
      selectedCity: "",
      stateOptions: [],
      cityOptions: []
    };
    const countries = yourHandle.getCountries();
    countries.map(country => this.state.countries.push(country));
  }

  componentDidMount() {}

  handleSubmit = e => {
    e.preventDefault();
  };

  // COUNTRY HANDLER
  handleCountry = async selectedCountry => {
    this.setState({ stateOptions: [] });
    await this.setState({
      selectedCountry
    });
    try {
      const statesArray = await [
        yourHandle.getCountryByShort(this.state.selectedCountry.value)
      ];
      await statesArray.map(state =>
        this.state.states.push(Object.keys(state.states))
      );
      await this.state.states.map(item =>
        item.map(real =>
          this.state.stateOptions.push({
            value: real,
            label: real
          })
        )
      );
    } catch (error) {
      console.log(Error.message);
    }
  };

  // STATE HANDLER

  handleState = async selectedState => {
    await this.setState({
      selectedState
    });
    await this.setState({
      cityOptions: []
    });
    try {
      const citiesArray = yourHandle.getCities(
        this.state.selectedCountry.value,
        selectedState.value
      );

      await citiesArray.map(city => this.state.cities.push(city));

      await this.state.cities.map(item =>
        this.state.cityOptions.push({
          value: item,
          label: item
        })
      );
    } catch (error) {
      console.log(Error.message);
    }
  };

  // CITY HANDLER

  handleCity = async selectedCity => {
    await this.setState({
      selectedCity
    });
    console.log("Done");
  };

  handleSubmit = async event => {
    event.preventDefault();
    const city = this.state.selectedCity.value;
    const country = this.state.selectedCountry.value;
    console.log("Submited");
    await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}`
    )
      .then(response => response.json())
      .then(result => console.log(result));
  };

  render() {
    const {
      countries,
      selectedCountry,
      selectedState,
      selectedCity
    } = this.state;

    const countryOptions = [];
    countries.map(item =>
      countryOptions.push({
        value: item.shortName,
        label: item.name
      })
    );

    return (
      <div>
        <Container>
          <h1>Weather App</h1>
          <Row>
            <Col>
              <form onSubmit={this.handleSubmit}>
                <Form.Row>
                  <Form.Group xs={12} lg={3} as={Col} role="form">
                    <Select
                      type="search"
                      placeholder="Select Country"
                      value={selectedCountry}
                      onChange={this.handleCountry}
                      options={countryOptions}
                    />
                  </Form.Group>

                  <Form.Group xs={12} lg={3} as={Col} role="form">
                    <Select
                      type="search"
                      placeholder="Select Country"
                      value={selectedState}
                      onChange={this.handleState}
                      options={this.state.stateOptions}
                    />
                  </Form.Group>

                  <Form.Group xs={12} lg={3} as={Col} role="form">
                    <Select
                      type="search"
                      placeholder="Select Country"
                      value={selectedCity}
                      onChange={this.handleCity}
                      options={this.state.cityOptions}
                    />
                  </Form.Group>

                  <Form.Group xs={12} lg={3} role="form">
                    <Button
                      variant="primary"
                      type="submit"
                      disabled={!this.state.selectedCity}
                    >
                      Check Weather
                    </Button>
                  </Form.Group>
                </Form.Row>
              </form>
            </Col>
          </Row>

          <WeatherDetails />

          <WeatherContainer />
        </Container>
      </div>
    );
  }
}

export default App;
