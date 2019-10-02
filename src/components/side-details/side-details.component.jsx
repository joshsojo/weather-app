import React from "react";
import Col from "react-bootstrap/Col";

import "./side-details.styles.css";

const SideDetails = ({ row1, row2, row3 }) => (
  <Col className="side-details">
    <p className="detail">{row1}</p>
    <p className="detail">{row2}</p>
    <p className="detail">{row3}</p>
  </Col>
);

export default SideDetails;
