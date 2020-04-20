import React from 'react';

import "../Components/style/templates.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import $ from "jquery";
import local1 from "../Components/style/Images/local1.png";
import local2 from "../Components/style/Images/local2.png";
import local3 from "../Components/style/Images/local3.png";
import local4 from "../Components/style/Images/local4.png";
import local5 from "../Components/style/Images/local5.png";
import local6 from "../Components/style/Images/local6.png";


function Business(){
    return (
      <div className="main-wrapper" id="business">
        <Container className="browse_txt">
          <h1 className="browse_title" id="business-title">
            Local Business
          </h1>
        </Container>
        <Row>
          <Col>
            <div className="temp_container">
              <img src={local1} alt="Avatar" className="temp_image"></img>
              <div className="overlay">
                <h3 className="card_title">Title</h3>
                <hr className="hr_style" />
                <p className="card_text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae, officiis! Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Perspiciatis, deleniti.
                </p>
                <button className="button" variant="outline-primary">
                  <a href="" target="_blank" without rel="noopener noreferrer">
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
              <img src={local2} alt="Avatar" className="temp_image"></img>
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
                    href="https://project3-2020.github.io/Local_2/"
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
              <img src={local3} alt="Avatar" className="temp_image"></img>
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
                    href="https://project3-2020.github.io/Local_3/"
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
              <img src={local4} alt="Avatar" className="temp_image"></img>
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
                    href="https://project3-2020.github.io/Local_4/"
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
              <img src={local5} alt="Avatar" className="temp_image"></img>
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
                    href="https://project3-2020.github.io/Local_5/"
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
              <img src={local6} alt="Avatar" className="temp_image"></img>
              <div className="overlay">
                <h3 className="card_title">Title</h3>
                <hr className="hr_style" />
                <p className="card_text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus, consequatur non quis quas hic fugit voluptatem odio
                  nesciunt at. Hic.
                </p>
                <button className="button">
                  <a
                    href="https://project3-2020.github.io/Local_6/"
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

export default Business;