import React from "react";
import "../Components/style/templates.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import $ from "jquery";
import replace from "../Components/style/Images/replace.png";

function Templates() {
  return (
    <Container fluid className="mainTemp">
      <Jumbotron fluid id="bcgTemp">
        <Container className="temp1">
          <h1 className="tempTitle">Starting points for your business.</h1>
          <p className="text1">
            Get started with any of our best-in-class website templates, whether
            it's contact forms or color palettes. Making a beautiful website has
            never been faster.
          </p>
        </Container>
      </Jumbotron>

      <Container fluid className="main_content">
        <div class="tab">
          <Container className="view_txt">
            <h2 className="view_title">Browse by</h2>
          </Container>
          <button class="tablinks1">Popular Design</button>
          <button class="tablinks2">Photography</button>
          <button class="tablinks3">Local Business</button>
          <button class="tablinks4">Personal & CV</button>
          <button class="tablinks5">Restaurants</button>
          <button class="tablinks6">Real Estate</button>
        </div>

        <div id="London" class="tabcontent">
          <Container className="browse_txt">
            <h1 className="browse_title">Templates</h1>
          </Container>
          <Row>
            <Col>
              <div className="temp_container">
                <img src={replace} alt="Avatar" className="temp_image"></img>
                <div className="overlay">
                  <h3 className="card_title">Title</h3>
                  <hr className="hr_style" />
                  <p className="card_text">Template Description</p>
                  <button className="button" variant="outline-primary">
                    Demo
                  </button>
                  <button className="button" variant="outline-primary">
                    Download
                  </button>
                </div>
              </div>
            </Col>
            <Col>
              <div className="temp_container">
                <img src={replace} alt="Avatar" className="temp_image"></img>
                <div className="overlay">
                  <h3 className="card_title">Title</h3>
                  <hr className="hr_style" />
                  <p className="card_text">Template Description</p>
                  <button className="button">Demo</button>
                  <button className="button">Download</button>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="temp_container">
                <img src={replace} alt="Avatar" className="temp_image"></img>
                <div className="overlay">
                  <h3 className="card_title">Title</h3>
                  <hr className="hr_style" />
                  <p className="card_text">Template Description</p>
                  <button className="button" variant="outline-primary">
                    Demo
                  </button>
                  <button className="button" variant="outline-primary">
                    Download
                  </button>
                </div>
              </div>
            </Col>
            <Col>
              <div className="temp_container">
                <img src={replace} alt="Avatar" className="temp_image"></img>
                <div className="overlay">
                  <h3 className="card_title">Title</h3>
                  <hr className="hr_style" />
                  <p className="card_text">Template Description</p>
                  <button className="button">Demo</button>
                  <button className="button">Download</button>
                </div>
              </div>
            </Col>
            <Col>
              <div className="temp_container">
                <img src={replace} alt="Avatar" className="temp_image"></img>
                <div className="overlay">
                  <h3 className="card_title">Title</h3>
                  <hr className="hr_style" />
                  <p className="card_text">Template Description</p>
                  <button className="button">Demo</button>
                  <button className="button">Download</button>
                </div>
              </div>
            </Col>
            <Col>
              <div className="temp_container">
                <img src={replace} alt="Avatar" className="temp_image"></img>
                <div className="overlay">
                  <h3 className="card_title">Title</h3>
                  <hr className="hr_style" />
                  <p className="card_text">Template Description</p>
                  <button className="button">Demo</button>
                  <button className="button">Download</button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </Container>
  );
}

export default Templates;
