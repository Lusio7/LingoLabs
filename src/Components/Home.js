import React from "react";
import "../Components/style/home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import exm1 from "../Components/style/Images/exm1.gif";
import temp1 from "../Components/style/Images/temp1.jpg";
import temp2 from "../Components/style/Images/temp2.jpg";
import temp3 from "../Components/style/Images/temp3.jpg";
import temp4 from "../Components/style/Images/temp4.jpg";
import tmp_fix from "../Components/style/Images/tmp_fix.jpg";
import temp6 from "../Components/style/Images/temp6.jpg";
import niko from "../Components/style/Images/niko.jpg";
import lusio from "../Components/style/Images/lusio.jpg";
import marvin from "../Components/style/Images/marvin.jpg";
import shawn from "../Components/style/Images/shawn.jpg";
import joey from "../Components/style/Images/joey.jpg";
import Footer from "../Components/Footer";
import logo from "../Components/style/Images/logo.png";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Contact from "../Components/Contact";
import Jumbotron from "react-bootstrap/Jumbotron";
import build from "../Components/style/Images/build.png";
import buildtwo from "../Components/style/Images/buildtwo.jpg";
import F1B from "../Components/style/Images/F1B.jpg";

function Home() {
  return (
    <div className="container-fluid main">
      <div className="container-fluid titleDiv">
        <div className="row">
          <div className="col-4 test">
            <h1 className="title">Create a Website You’re Proud of!</h1>

            <h4 className="subTitle">
              Discover the platform that gives you the freedom to create,
              design, manage and develop your web presence exactly the way you
              want.
            </h4>
            <svg className="arrows">
              <path className="a1" d="M0 0 L30 32 L60 0"></path>
              <path className="a2" d="M0 20 L30 52 L60 20"></path>
              <path className="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
          </div>
          <div className="col-7">
            <img src={F1B} className="big" alt=""></img>
          </div>
        </div>
      </div>
      <hr className="home" />

      <Container fluid className="displayContainer1">
        <Row>
          <Col className="changeme">
            <h1 className="display-4 display-1">
              LingoLabs is a unique “low code” website design platform.
            </h1>
            <p className="lead">
              You can choose the website template that delights you and your
              users, purchase it, download it and host it in a matter of
              minutes. It’s as simple as 123!
            </p>
          </Col>
          <Col>
            <img src={exm1} className="gif" alt="gif"></img>
          </Col>
        </Row>
      </Container>

      <Container className="displayContainer2">
        <h1 className="display-4 display2">Award-Winning Web Designs</h1>

        <p className="lead2">
          Choose from an unrivaled set of best-in-class website templates.
          <br />
          Reach out to us if you would like to customize any of the designs to
          fit your personal style and professional needs.
        </p>
      </Container>

      <Container fluid className="imageDisplay">
        <img src={temp1} className="Tmp" alt="img"></img>
        <img src={temp2} className="Tmp" alt="img"></img>
        <img src={temp3} className="Tmp" alt="img"></img>
        <img src={temp4} className="Tmp" alt="img"></img>
        <img src={tmp_fix} className="Tmp" alt="img"></img>
        <img src={temp6} className="Tmp" alt="img"></img>
      </Container>

      <div className="container-fluid" id="ll">
        <div className="row">
          <div className="col-7">
            <img src={build} className="build" alt=""></img>
          </div>
          <div className="col-4">
            <h2 className="imgText">
              Look like an expert right from the start.
            </h2>
            <p className="imgT">
              Create a website that brings your ideas to life. Start with any
              website template and customize it to fit your needs, whether
              you're making a portfolio, blog, or online store.
            </p>
          </div>
        </div>
      </div>

      <Container className="instructions">
        <div className="row">
          <div className="col-md-7">
            <h1 className="titleInst">
              How to implemant LingoLab <br /> Templates to your website
              <br />
            </h1>
            <ol>
              <li>
                {" "}
                Create your user profile by signing up or simply sign into your
                account.
              </li>
              <li>
                {" "}
                Browse our wide selection of ready to ship website products.
              </li>
              <li>
                {" "}
                Select/Add to cart the website that fits your industry, needs,
                look and feel.
              </li>
              <li>
                Once you have downloaded the website that meets your
                organization’s and your customers’ needs go => to your user
                portal.
              </li>
              <li>
                In your user portal you will find the websites that you have
                selected. Pay for the products that you wish to purchase.
              </li>
              <li>
                Once payment has been authorized we will provide you the
                download link which can be downloaded as a zip to your local
                drive.
              </li>
              <li>
                Reach out to the LingoLabs team should you require any specific
                customization of your products.
              </li>
              <li>
                {" "}
                And, there you have it! A fully functional website tailored to
                your needs in a few button clicks!
              </li>
            </ol>
          </div>
          <div className="col-md-4">
            <img src={buildtwo} className="random" alt=""></img>
          </div>
        </div>
      </Container>

      <Container fluid className="team2">
        <h1 className="text-center">Meet Our team</h1>
        <Row>
          <Col lg={4}>
            <div className="our-team-main">
              <div className="team-front">
                <img src={niko} alt="niko" className="img-fluid" />
                <h3>Nikola Jovanovic</h3>
                <p>UX/UI Manager</p>
              </div>

              <div className="team-back">
                <span>
                  Niko is a senior UI/UX designer with a specially keen
                  intuition for design thinking and has extensive experience
                  specializing in designing applications for startups. He is
                  used to working remotely and has his tools and processes
                  tailored to meet the demands of a fast-paced lean workflow and
                  an unpredictable startup environment.
                </span>
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <div className="our-team-main">
              <div className="team-front">
                <img src={lusio} alt="lusio" className="img-fluid" />
                <h3>Lusio Filiba</h3>
                <p>Product Owner</p>
              </div>

              <div className="team-back">
                <span>
                  At his core, Lusio is a naturalproduct ownerand thrives as the
                  leader responsible for maximizing the value of
                  theproductscreated by a scrum development team. Utilizing an
                  agilemethodology, Lusio, as the product owner,takes on several
                  roles, including business strategist,productdesigner, market
                  analyst, customer liaison, and project manager
                </span>
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <div className="our-team-main">
              <div className="team-front">
                <img src={marvin} alt="marvin" className="img-fluid" />
                <h3>Marvin Castro</h3>
                <p>Delivery Lead Manager</p>
              </div>

              <div className="team-back">
                <span>
                  As a software delivery manager, Marvin coordinates and manages
                  the software development process for specific software
                  projects. He thrives operating within a software development
                  environment in software companies or virtually any type of
                  company with software development resources.
                </span>
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <div className="our-team-main">
              <div className="team-front">
                <img src={shawn} alt="shawn" className="img-fluid" />
                <h3>Shawn Yu</h3>
                <p>Engineering Manager</p>
              </div>

              <div className="team-back">
                <span>
                  Shawn has developed deep and broad experience in software
                  engineering and application management. His experience will be
                  invaluable in commercial software companies that require the
                  development of digital products to include: communications
                  interfaces and management of programming teams.
                </span>
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <div className="our-team-main">
              <div className="team-front">
                <img src={joey} alt="joey" className="img-fluid" />
                <h3>Joey Merino</h3>
                <p>Technical Lead Manager</p>
              </div>

              <div className="team-back">
                <span>
                  Joey thrives when he takes the responsibility of guiding
                  development teams related to technical and database
                  requirements. Joey’s team members value his technical
                  abilities, insight and knowledge. Joey is adept at designing
                  distributed systems and delights teams by building super
                  reliable, fully consistent, infinitely scalable services.
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Contact />
      </Container>

      <Container fluid>
        <Footer />
      </Container>
    </div>
  );
}
export default Home;
