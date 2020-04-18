import React from "react";
import "../Components/style/templates.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import $ from "jquery";
import replace from "../Components/style/Images/replace.png";

import popular1 from "../Components/style/Images/popular1.png";
import popular2 from "../Components/style/Images/popular2.png";
import popular3 from "../Components/style/Images/popular3.png";
import popular4 from "../Components/style/Images/popular4.png";
import popular5 from "../Components/style/Images/popular5.png";
import popular6 from "../Components/style/Images/popular6.png";



function Templates() {
  return (
    <Container fluid className="mainTemp">
      <Jumbotron fluid id="bcgTemp">
        <Container className="temp1">
          <h1 className="tempTitle">Starting points for your Website.</h1>
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
            <h1 className="browse_title">Popular Design</h1>
          </Container>
          <Row>
            <Col>
              <div className="temp_container">
                <img src={popular1} alt="Avatar" className="temp_image"></img>
                <div className="overlay">
                  <h3 className="card_title">Title</h3>
                  <hr className="hr_style" />
                  <p className="card_text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae, officiis! Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Perspiciatis, deleniti.
                  </p>
                  <button className="button" variant="outline-primary">
                    <a
                      href="https://project3-2020.github.io/Popular_1/"
                      target="_blank"
                      without
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  </button>
                  <button className="button" variant="outline-primary">
                    <a
                      href="src/Components/Download-file/popular1"
                      download="Popular Template 2"
                      without
                      rel="noopener noreferrer"
                    >
                      Download
                    </a>
                  </button>
                </div>
              </div>
            </Col>
            <Col>
              <div className="temp_container">
                <img src={popular2} alt="Avatar" className="temp_image"></img>
                <div className="overlay">
                  <h3 className="card_title">Title</h3>
                  <hr className="hr_style" />
                  <p className="card_text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate facere doloribus vel minima earum iure tempora
                    sequi nemo quidem vero.
                  </p>
                  <button className="button">
                    <a
                      href="https://project3-2020.github.io/Popular_2/"
                      target="_blank"
                      without
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  </button>
                  <button className="button" variant="outline-primary">
                    <a
                      href="src/Components/Download-file/popular2"
                      download="Popular Template 2"
                      without
                      rel="noopener noreferrer"
                    >
                      Download
                    </a>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="temp_container">
                <img src={popular3} alt="Avatar" className="temp_image"></img>
                <div className="overlay">
                  <h3 className="card_title">Title</h3>
                  <hr className="hr_style" />
                  <p className="card_text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit recusandae at dolorum laudantium eveniet perferendis
                    quos aliquid fuga corporis minima.
                  </p>
                  <button className="button" variant="outline-primary">
                    <a
                      href="https://project3-2020.github.io/Popular_3/"
                      target="_blank"
                      without
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  </button>
                    <button className="button" variant="outline-primary">
                    <a
                      href="src/Components/Download-file/popular1"
                      download="popular1"
                      without
                      rel="noopener noreferrer"
                    >
                      Download
                    </a>
                  </button>
                </div>
              </div>
            </Col>
            <Col>
              <div className="temp_container">
                <img src={popular4} alt="Avatar" className="temp_image"></img>
                <div className="overlay">
                  <h3 className="card_title">Title</h3>
                  <hr className="hr_style" />
                  <p className="card_text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam harum atque dolorem iure quasi animi itaque dolor
                    optio ut dignissimos.
                  </p>
                  <button className="button">
                    <a
                      href="https://project3-2020.github.io/Popular_4/"
                      target="_blank"
                      without
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  </button>
                  <button className="button">Download</button>
                </div>
              </div>
            </Col>
            <Col>
              <div className="temp_container">
                <img src={popular5} alt="Avatar" className="temp_image"></img>
                <div className="overlay">
                  <h3 className="card_title">Title</h3>
                  <hr className="hr_style" />
                  <p className="card_text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia voluptatem temporibus velit consequatur dolores
                    repudiandae in ullam ex ratione quos?
                  </p>
                  <button className="button">
                    <a
                      href="https://project3-2020.github.io/Popular_5/"
                      target="_blank"
                      without
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  </button>
                  <button className="button">Download</button>
                </div>
              </div>
            </Col>
            <Col>
              <div className="temp_container">
                <img src={popular6} alt="Avatar" className="temp_image"></img>
                <div className="overlay">
                  <h3 className="card_title">Title</h3>
                  <hr className="hr_style" />
                  <p className="card_text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus, consequatur non quis quas hic fugit voluptatem
                    odio nesciunt at. Hic.
                  </p>
                  <button className="button">
                    <a
                      href="https://project3-2020.github.io/Popular_6/"
                      target="_blank"
                      without
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  </button>
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
