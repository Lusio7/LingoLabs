import React from "react";
import "../Components/style/home.css";

import { Container, Row, Col } from "react-bootstrap";

function Contact() {
  return (
    <Container fluid id="contact">
      <Row>
        <Col>
          <h2 className="contact">CONTACT US!</h2>
          <p className="chat">
            <br />
            You get a premium look on your website without struggling to create
            it <br /> Let's chat!
          </p>
          <form>
            <div className="form-row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="E-mail"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Company"
                />
              </div>
            </div>
          </form>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1"></label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Additional Information"
              rows="3"
            ></textarea>
            <button className="btn_submit" variant="primary">
              Send
            </button>{" "}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
