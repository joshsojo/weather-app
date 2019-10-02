import React from "react";
import { connect } from "react-redux";

import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import yourHandle from "countrycitystatejson";
import Select from "react-select";
import { setCountries } from "../../redux/select/select.actions";
import { setStates } from "../../redux/select/select.actions";
import { setCities } from "../../redux/select/select.actions";

import "./search.styles.css";

const API_KEY = "e67098245480152331de72027651bd84";

class Search extends React.Component {
  constructor(props) {
    super();
    this.state = {
      selectedCountry: "",
      selectedState: "",
      selectedCity: ""
    };
  }

  componentDidMount() {
    const countries = yourHandle.getCountries();
    // if (this.props.countries.length > 0) {
    const options = [];
    countries.map(country =>
      options.push({
        value: country.shortName,
        label: country.name
      })
    );
    this.props.setCountries({
      countries: options
    });
    // } else {
    // console.log("Already have list");
    console.log(this.props.countries.countries);
    // }
  }

  // COUNTRY HANDLER
  handleCountry = async selectedCountry => {
    this.props.setStates({ states: [] });

    await this.setState({
      selectedCountry
    });
    try {
      const statesArray = await [
        yourHandle.getCountryByShort(this.state.selectedCountry.value)
      ];
      const stateOptions = [];
      console.log(statesArray);
      statesArray.forEach(state => {
        state = Object.keys(state.states);
        state.map(item => stateOptions.push({ value: item, label: item }));
      });
      await this.props.setStates({ states: stateOptions });
    } catch (error) {
      console.log(Error.message);
    }
  };

  // STATE HANDLER

  handleState = async selectedState => {
    await this.setState({
      selectedState
    });
    await this.props.setCities({
      cities: []
    });
    try {
      const citiesArray = yourHandle.getCities(
        this.state.selectedCountry.value,
        selectedState.value
      );
      const options = [];
      await citiesArray.map(city =>
        options.push({
          value: city,
          label: city
        })
      );

      await this.props.setCities({
        cities: options
      });
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

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { countries, states, cities } = this.props;
    const { selectedCountry, selectedState, selectedCity } = this.state;
    return (
      <Row>
        <Col>
          <form onSubmit={this.handleSubmit}>
            <Form.Row>
              <Form.Group xs={12} lg={3} as={Col} role="form">
                <Select
                  type="search"
                  placeholder="Select Country"
                  name="countries"
                  value={selectedCountry}
                  onChange={this.handleCountry}
                  options={countries.countries}
                />
              </Form.Group>

              <Form.Group xs={12} lg={3} as={Col} role="form">
                <Select
                  type="search"
                  placeholder="Select Country"
                  value={selectedState}
                  onChange={this.handleState}
                  options={states.states}
                />
              </Form.Group>

              <Form.Group xs={12} lg={3} as={Col} role="form">
                <Select
                  type="search"
                  placeholder="Select Country"
                  value={selectedCity}
                  onChange={this.handleCity}
                  options={cities.cities}
                />
              </Form.Group>

              <Col xs={12} lg={3} role="form">
                <Button
                  type="submit"
                  variant="primary"
                  disabled={!this.state.selectedCity}
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
  cities: select.cities
});

const mapDispatchToProps = disptach => ({
  setCountries: item => disptach(setCountries(item)),
  setStates: item => disptach(setStates(item)),
  setCities: item => disptach(setCities(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
