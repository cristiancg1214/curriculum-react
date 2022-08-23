import React, { useEffect } from "react";
import logo from "../../assets/cristian.jpg";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {connect} from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faLinkedin,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { getDataHeader } from "../../store/header/reducer";
 const Header = ({dataHeader}) => {

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
        </Col>
      </Row>
    </>
  );
};
const mapStateToProps=(state)=>{
  return {
    dataHeader:getDataHeader(state)
  }

}
export default connect(mapStateToProps,null)(Header);