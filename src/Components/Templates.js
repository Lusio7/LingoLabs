import React from "react";
import "../Components/style/templates.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";


import niko from "../Components/style/Images/niko.jpg"



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

      <Container fluid className="test">
        <div class="tab">
          <Container className="view_txt">
            <h2 className="view_title">Browse by</h2>
          </Container>
          <button class="tablinks">Popular Design</button>
          <button class="tablinks">Photography</button>
          <button class="tablinks">Local Business</button>
          <button class="tablinks">Personal & CV</button>
          <button class="tablinks">Restaurants</button>
          <button class="tablinks">Real Estate</button>
        </div>

        <div id="London" class="tabcontent">
          <Container className="browse_txt">
            <h2 className="browse_title">Templates</h2>
          </Container>
          <Row>
            <Col>
              <div className="temp_container">
                <img src={niko} alt="Avatar" className="temp_image"></img>
                <div className="overlay">
                  <button className="button" variant="outline-primary">
                    Demo
                  </button>
                  <br />
                  <button className="button" variant="outline-primary">
                    More Information
                  </button>
                </div>
              </div>
            </Col>
            <Col>
              <div className="temp_container">
                <img src={niko} alt="Avatar" className="temp_image"></img>
                <div className="overlay">
                  <button className="button">Demo</button>
                  <br />
                  <button className="button">More Information</button>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="temp_container">
                <img src={niko} alt="Avatar" className="temp_image"></img>
                <div className="overlay">
                  <button className="button" variant="outline-primary">
                    Demo
                  </button>
                  <br />
                  <button className="button" variant="outline-primary">
                    More Information
                  </button>
                </div>
              </div>
            </Col>
            <Col>
              <div className="temp_container">
                <img src={niko} alt="Avatar" className="temp_image"></img>
                <div className="overlay">
                  <button className="button">Demo</button>
                  <br />
                  <button className="button">More Information</button>
                </div>
              </div>
            </Col>
            <Col>
              <div className="temp_container">
                <img src={niko} alt="Avatar" className="temp_image"></img>
                <div className="overlay">
                  <button className="button">Demo</button>
                  <br />
                  <button className="button">More Information</button>
                </div>
              </div>
            </Col>
            <Col>
              <div className="temp_container">
                <img src={niko} alt="Avatar" className="temp_image"></img>
                <div className="overlay">
                  <button className="button">Demo</button>
                  <br />
                  <button className="button">More Information</button>
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
