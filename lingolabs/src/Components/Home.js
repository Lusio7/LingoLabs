import React from "react";
import "../Components/style/home.css";
import "../App.css";
import exm1 from "../Components/style/Images/exm1.gif"
import temp1 from "../Components/style/Images/temp1.jpg";
import temp2 from "../Components/style/Images/temp2.jpg";
import temp3 from "../Components/style/Images/temp3.jpg";
import temp4 from "../Components/style/Images/temp4.jpg";
import temp5 from "../Components/style/Images/temp5.jpg";
import temp6 from "../Components/style/Images/temp6.jpg";
import niko from "../Components/style/Images/niko.jpg";
import lusio from "../Components/style/Images/lusio.jpg";
import marvin from "../Components/style/Images/marvin.jpg";
import shawn from "../Components/style/Images/shawn.jpg";
import joey from "../Components/style/Images/joey.jpg";
import Footer from "../Components/Footer";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button"





function Home() {
  return (
    <div className="main">
      <Container fluid id="bcg">
        <Container fluid id="titleDiv">
          <h1 className="title">Create a Website You’re Proud Of</h1>

          <h4 className="subTitle">
            Discover the platform that gives you the freedom to create, design,
            manage and develop your web presence exactly the way you want.
          </h4>
        </Container>

        <svg className="arrows">
          <path className="a1" d="M0 0 L30 32 L60 0"></path>
          <path className="a2" d="M0 20 L30 52 L60 20"></path>
          <path className="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
      </Container>

      <Container fluid className="displayContainer1">
        <Row>
          <Col>
            <h1 className="display-4 display-1">
              The leader in website design
            </h1>
            <p className="lead">
              Stand out online with a professional website, online store, or
              portfolio. With Lingo Labs, you can turn any idea into a reality.
            </p>
          </Col>
          <Col>
            <img src={exm1} className="gif" alt="gif"></img>
          </Col>
        </Row>
      </Container>

      <Container className="displayContainer2">
        <Row>
          <Col>
            <h1 className="display-4 display2">
              Award-Winning <br /> Web Designs
            </h1>
          </Col>

          <Col>
            <p className="lead2">
              Choose from an unrivaled set of best-in-class website templates.
              <br />
              Customize the design to fit your personal style and professional
              needs.
            </p>
          </Col>
        </Row>
      </Container>

      <Container fluid className="imageDisplay">
        <img src={temp1} className="Tmp" alt="img"></img>
        <img src={temp2} className="Tmp" alt="img"></img>
        <img src={temp3} className="Tmp" alt="img"></img>
        <img src={temp4} className="Tmp" alt="img"></img>
        <img src={temp5} className="Tmp" alt="img"></img>
        <img src={temp6} className="Tmp" alt="img"></img>
      </Container>

      <Container className="displayContainer3">
        <h1 className="app">Apps & Tools</h1>
        <h4 className="subapp">
          Integrate popular apps with your Lingo Lab website and access the
          tools you use, all in one place.
          <br />
          <Button variant="secondary" className="btnDummy" size="lg" active>
            Learn More
          </Button>
        </h4>
      </Container>

      <Container className="toolsDisplay">
        <i className="fa fa-twitter fa-5x" id="tools"></i>
        <i className="fa fa-youtube fa-5x" id="tools"></i>
        <i className="fa fa-dropbox fa-5x" id="tools"></i>
        <i className="fa fa-instagram fa-5x" id="tools"></i>
        <i className="fa fa-google fa-5x" id="tools"></i>
      </Container>

      <Container fluid className="instructions">
        <Row>
          <Col className="style">
            <h1 className="titleInst">
              How to implemant Lingo Labs Templates to your website
              <br />
              <Button
                variant="secondary"
                className="btnDummy2"
                size="lg"
                active
              >
                <i class="fa fa-angle-double-right"></i>
              </Button>
            </h1>
          </Col>
          <Col className="list">
            <ol>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Explicabo, quaerat.
              </li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Obcaecati!
              </li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            </ol>
          </Col>
        </Row>
      </Container>

      <Container fluid id="contact">
        <Row>
          <Col>
            <h2 className="contact">CONTACT US!</h2>
            <p className="chat">
              <br />
              You get a premium look on your website without struggling to
              create it <br /> Let's chat!
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
            <div class="form-group">
              <label for="exampleFormControlTextarea1"></label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                placeholder="Additional Information"
                rows="3"
              ></textarea>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid className="team">
        <h1 className="text-center">Meet Our team</h1>

        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="our-team-main">
                <div className="team-front">
                  <img src={niko} alt="niko" className="img-fluid" />
                  <h3>Nikola Jovanovic</h3>
                  <p>Web Developer</p>
                </div>

                <div className="team-back">
                  <span>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, Lorem
                    ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                    commodo ligula eget dolor. Aenean massa. Cum sociis natoque.
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="our-team-main">
                <div className="team-front">
                  <img src={lusio} alt="lusio" className="img-fluid" />
                  <h3>Lusio Filiba</h3>
                  <p>Web Developer</p>
                </div>

                <div className="team-back">
                  <span>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, Lorem
                    ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                    commodo ligula eget dolor. Aenean massa. Cum sociis natoque.
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="our-team-main">
                <div className="team-front">
                  <img src={marvin} alt="marvin" className="img-fluid" />
                  <h3>Marvin Castro</h3>
                  <p>Web Developer</p>
                </div>

                <div className="team-back">
                  <span>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, Lorem
                    ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                    commodo ligula eget dolor. Aenean massa. Cum sociis natoque.
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="our-team-main">
                <div className="team-front">
                  <img src={shawn} alt="shawn" className="img-fluid" />
                  <h3>Shawn Yu</h3>
                  <p>Web Developer</p>
                </div>

                <div className="team-back">
                  <span>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, Lorem
                    ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                    commodo ligula eget dolor. Aenean massa. Cum sociis natoque.
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="our-team-main">
                <div className="team-front">
                  <img src={joey} alt="joey" className="img-fluid" />
                  <h3>Joey Merino</h3>
                  <p>Web Developer</p>
                </div>

                <div className="team-back">
                  <span>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, Lorem
                    ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                    commodo ligula eget dolor. Aenean massa. Cum sociis natoque.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container fluid>
        <Footer />
      </Container>
    </div>
  );
}
export default Home;
