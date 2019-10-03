import React from "react";
import { connect } from "react-redux";

import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import yourHandle from "countrycitystatejson";
import Select from "react-select";
import {
  selectCountry,
  selectState,
  selectCity,
  setCountries,
  setStates,
  setCities
} from "../../redux/select/select.actions";
import { getWeather } from "../../redux/weather/weather.actions";

import "./search.styles.css";
const API_KEY = "e67098245480152331de72027651bd84";
class Search extends React.Component {
  componentDidMount() {
    const countries = yourHandle.getCountries();
    if (this.props.countries.length > 0) {
      const options = [];
      countries.map(country =>
        options.push({
          value: country.shortName,
          label: country.name
        })
      );
      setCountries({
        countries: options
      });
    }
  }

  // COUNTRY HANDLER
  handleCountry = async selectedCountry => {
    const { setStates, selectCountry } = this.props;
    setStates({ states: [] });

    await selectCountry({
      selectedCountry
    });
    try {
      const statesArray = await [
        yourHandle.getCountryByShort(selectedCountry.value)
      ];
      const stateOptions = [];
      statesArray.forEach(state => {
        state = Object.keys(state.states);
        state.map(item => stateOptions.push({ value: item, label: item }));
      });
      await setStates({ states: stateOptions });
    } catch (error) {
      console.log(Error.message);
    }
  };

  // STATE HANDLER

  handleState = async selectedState => {
    const {
      setCities,
      selectState,
      selectedCountry: { selectedCountry }
    } = this.props;
    await selectState({
      selectedState
    });
    await setCities({
      cities: []
    });
    try {
      const citiesArray = yourHandle.getCities(
        selectedCountry.value,
        selectedState.value
      );
      const options = [];
      await citiesArray.map(city =>
        options.push({
          value: city,
          label: city
        })
      );

      await setCities({
        cities: options
      });
    } catch (error) {
      console.log(Error.message);
    }
  };

  // CITY HANDLER

  handleCity = async selectedCity => {
    const { selectCity } = this.props;
    await selectCity({
      selectedCity
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      getWeather,
      selectedCountry: { selectedCountry },
      selectedCity: { selectedCity }
    } = this.props;
    const country = selectedCountry.value;
    const city = selectedCity.label;
    try {
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}`
      )
        .then(response => response.json())
        .then(result => {
          if (result.cod === "200") {
            getWeather({
              weatherData: result
            });
          } else {
            alert("City Now found");
          }
        });
    } catch (error) {
      alert("There was an error");
    }
  };

  render() {
    const {
      countries,
      states,
      cities,
      selectedCountry: { selectedCountry },
      selectedState: { selectedState },
      selectedCity: { selectedCity }
    } = this.props;
    return (
      <Row>
        <Col>
          <form onSubmit={this.handleSubmit}>
            <Form.Row>
              <Form.Group xs={12} lg={3} as={Col} role="form">
                <Select
                  type="search"
                  placeholder={
                    selectedCountry ? selectedCountry.label : "Select Country"
                  }
                  onChange={this.handleCountry}
                  options={countries.countries}
                />
              </Form.Group>

              <Form.Group xs={12} lg={3} as={Col} role="form">
                <Select
                  type="search"
                  placeholder={
                    selectedState ? selectedState.label : "Select State"
                  }
                  onChange={this.handleState}
                  options={states.states}
                />
              </Form.Group>

              <Form.Group xs={12} lg={3} as={Col} role="form">
                <Select
                  type="search"
                  placeholder={
                    selectedCity ? selectedCity.label : "Select City"
                  }
                  onChange={this.handleCity}
                  options={cities.cities}
                />
              </Form.Group>

              <Col xs={12} lg={3} role="form">
                <Button
                  type="submit"
                  variant="primary"
                  disabled={!selectedCity}
                >
                  Check Weather
                </Button>
              </Col>
            </Form.Row>
          </form>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ select }) => ({
  countries: select.countries,
  states: select.states,
  cities: select.cities,
  selectedCountry: select.selectedCountry,
  selectedState: select.selectedState,
  selectedCity: select.selectedCity
});

const mapDispatchToProps = disptach => ({
  setCountries: item => disptach(setCountries(item)),
  setStates: item => disptach(setStates(item)),
  setCities: item => disptach(setCities(item)),
  selectCountry: item => disptach(selectCountry(item)),
  selectState: item => disptach(selectState(item)),
  selectCity: item => disptach(selectCity(item)),
  getWeather: item => disptach(getWeather(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
