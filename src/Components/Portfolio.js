import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import $ from "jquery";
import port1 from "../Components/style/Images/port1.png";
import port2 from "../Components/style/Images/port2.png";
import port3 from "../Components/style/Images/port3.png";
import port4 from "../Components/style/Images/port4.png";

function Portfolio() {
  return (
    <div className="main-wrapper" id="portfolio">
      <Container className="browse_txt">
        <h1 className="browse_title" id="portfolio-title">
          Portfolio & CV
        </h1>
      </Container>
      <Row>
        <Col>
          <div className="temp_container">
            <img src={port1} alt="Avatar" className="temp_image"></img>
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
                  href="https://project3-2020.github.io/Portfolio_1/"
                  target="_blank"
                  without
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </button>
              <button className="button" variant="outline-primary">
                Download
              </button>
            </div>
          </div>
        </Col>
        <Col>
          <div className="temp_container">
            <img src={port2} alt="Avatar" className="temp_image"></img>
            <div className="overlay">
              <h3 className="card_title">Title</h3>
              <hr className="hr_style" />
              <p className="card_text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate facere doloribus vel minima earum iure tempora sequi
                nemo quidem vero.
              </p>
              <button className="button">
                <a
                  href="https://project3-2020.github.io/Portfolio_2/"
                  target="_blank"
                  without
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </button>
              <button className="button" variant="outline-primary">
                Download
              </button>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="temp_container">
            <img src={port3} alt="Avatar" className="temp_image"></img>
            <div className="overlay">
              <h3 className="card_title">Title</h3>
              <hr className="hr_style" />
              <p className="card_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                recusandae at dolorum laudantium eveniet perferendis quos
                aliquid fuga corporis minima.
              </p>
              <button className="button" variant="outline-primary">
                <a
                  href="https://project3-2020.github.io/Portfolio_3/"
                  target="_blank"
                  without
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </button>
              <button className="button" variant="outline-primary">
                Download
              </button>
            </div>
          </div>
        </Col>
        <Col>
          <div className="temp_container">
            <img src={port4} alt="Avatar" className="temp_image"></img>
            <div className="overlay">
              <h3 className="card_title">Title</h3>
              <hr className="hr_style" />
              <p className="card_text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam harum atque dolorem iure quasi animi itaque dolor optio
                ut dignissimos.
              </p>
              <button className="button">
                <a
                  href="https://project3-2020.github.io/Portfolio_4/"
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
  );
}

export default Portfolio;
