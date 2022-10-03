import { Col } from "react-bootstrap";
import { FaReact,FaJs,FaHtml5 } from 'react-icons/fa';
export const Skills = ({ name, icon }) => {
  const iconRender = () => {
    switch (icon) {
        case "FaReact":
            return <FaReact/>
        case "FaJs":
            return <FaJs/>
        case "FaHtml5":
            return <FaHtml5/>
    }
   
  };
  return (
    <>
      <Col xs="1" md="1">
       {iconRender()}
      </Col>
      <Col >
        <b style={{fontSize:13}}>{name}</b>
      </Col>
    </>
  );
};
