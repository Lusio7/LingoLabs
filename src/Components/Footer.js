import React from 'react';
import "./style/footer.css"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer(){
    return (
      <Container fluid className="footer">
        <Row>
          <Col md={12}>
            <h3 className="socialMedia">Find us on Social Media</h3>
            <a href="#">
              <i className="fa fa-facebook-square fa-3x" id="sm"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram fa-3x" id="sm"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter-square fa-3x" id="sm"></i>
            </a>
          </Col>
        </Row>

        <Col md={4}>
          <address>
            Phone: (202)202-2020 <br />
            Visit us at: 1600 Pennsylvania Ave NW <br /> Washington <br /> DC
            20500 Box 564
          </address>
        </Col>

        <Col md={4}>
          <p className="copy">
            {" "}
            &copy; All rights reserved to Lingo Lab
            <br /> & <br /> Team Members{" "}
          </p>{" "}
        </Col>
      </Container>
    );
}

export default Footer;