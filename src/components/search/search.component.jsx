import React from "react";
import { connect } from "react-redux";

import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import yourHandle from "countrycitystatejson";
import Select from "react-select";
import { setCountries } from "../../redux/select/select.actions";

import "./search.styles.css";

const API_KEY = "e67098245480152331de72027651bd84";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCountry: "",
      selectedState: "",
      selectedCity: ""
    };
  }

  componentDidMount() {
    const countries = yourHandle.getCountries();
    if (!this.props.countries) {
      countries.map(country => this.props.setCountries.countries.push(country));
    } else {
      console.log("Already have list");
    }
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <Row>
        <Col>
          <form onSubmit={this.handleSubmit}>
            <Form.Row>
              <Form.Group xs={12} lg={3} as={Col} role="form">
                <Select
                  type="search"
                  placeholder="Select Country"
                  // value={selectCountry}
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
    );
  }
}

const mapStateToProps = state => ({
  countries: state.select.countries
});

const mapDispatchToProps = disptach => ({
  setCountries: item => disptach(setCountries(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
