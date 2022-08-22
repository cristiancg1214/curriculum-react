import React from "react";
import logo from "../../assets/cristian.jpg";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import data from "../../utils/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faLinkedin,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
export const Header = () => {
  return (
    <>
      <Row className="row justify-content-center">
        <Col md="2">
          <div style={{ width: "100%" }}>
            {" "}
            <Image
              className="border border-dark"
              src={logo}
              roundedCircle
              width={"70%"}
            />
          </div>
        </Col>
        <Col md="6">
          <Row>
            <h2>{data.name}</h2>
          </Row>
          <Row>
            <h5 style={{ color: "#A0A0A0" }}>{data.aboutMe}</h5>
          </Row>
          <Row>
            <Col md="1">
              <FontAwesomeIcon icon={faLocationDot} />
            </Col>
            <Col md="4">
              <h6>{data.location}</h6>
            </Col>
          
          </Row>
        </Col>
      </Row>
    </>
  );
};
