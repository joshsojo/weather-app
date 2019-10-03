import React from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { buttonClicked } from "../../redux/weather/weather.actions";

import "./swtich-metric.styles.css";

class SwitchMetric extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { buttonClicked, celcius } = this.props;
    return (
      <Form onSubmit={this.handleSubmit} className="switch-metric">
        <Button
          type="submit"
          variant={celcius ? `secondary` : `info`}
          onClick={buttonClicked}
        >
          {celcius ? "Switch to Fahrenheit" : "Switch to Celcius"}
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = ({ weather }) => ({
  celcius: weather.celcius
});

const mapDispatchToProps = dispatch => ({
  buttonClicked: item => dispatch(buttonClicked(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SwitchMetric);
