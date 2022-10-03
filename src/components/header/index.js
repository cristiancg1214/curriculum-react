import React, { useEffect } from "react";
import logo from "../../assets/cristian.jpg";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faLocationDot,  } from "@fortawesome/free-solid-svg-icons";
import { Skills } from "../skills";

export const Header = () => {
  const dataHeader = useSelector((state) => state.header);

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
            <h2>{dataHeader.name}</h2>
          </Row>
          <Row>
            <h5 style={{ color: "#A0A0A0" }}>{dataHeader.aboutMe}</h5>
          </Row>
          <Row>
            <Col md="1">
              <FontAwesomeIcon icon={faLocationDot} />
            </Col>
            <Col md="5">
              <h6>{dataHeader.location}</h6>
            </Col>
          </Row>

          <Row style={{marginTop:'2%'}}>
            {dataHeader.knowledge.map((data, key) => (
              <Skills key={key} name={data.name} icon={data.icon} />
            ))}
          </Row>
        </Col>
      </Row>
    </>
  );
};
