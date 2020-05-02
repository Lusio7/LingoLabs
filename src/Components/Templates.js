import "../Components/style/templates.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import API from "../utils/API";

import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import $ from "jquery";
import popular1 from "../Components/style/Images/popular1.png";
import popular2 from "../Components/style/Images/popular2.png";
import popular3 from "../Components/style/Images/popular3.png";
import popular4 from "../Components/style/Images/popular4.png";
import popular5 from "../Components/style/Images/popular5.png";
import popular6 from "../Components/style/Images/popular6.png";
import Footer from "../Components/Footer";
import Portfolio from "../Components/Portfolio";
import Business from "../Components/Business";
import Restaurant from "./Restaurant";

import Estate from "../Components/Estate";

import Photo from "../Components/Photo";
import { set } from "mongoose";

function Templates(props) {
  var user = props.user;

  const [button, setButton] = useState({
    one: "Add To Cart",
    two: "Add To Cart",
    three: "Add To Cart",
    four: "Add To Cart",
    five: "Add To Cart",
    six: "Add To Cart",
  });

  const addToCart = async function (event) {
    event.stopPropagation();
    event.preventDefault();
    let name = event.target.getAttribute("name");
    let link = event.target.getAttribute("src");
    let price = event.target.getAttribute("price");
    var idNumber = event.target.getAttribute("number");
    let body = {
      username: user,
      name: name,
      link: link,
      price: parseFloat(price),
    };
    console.log("=====body for item");
    console.log(body);
    console.log(idNumber);

    var result = await API.objectToCart(body);
    if (result) {
      setButton({ ...button, [idNumber]: "added" });
      setTimeout(() => {
        setButton({ ...button, [idNumber]: "Add To Cart" });
      }, 1000);
    }
  };

  return (
    <Container fluid className="mainTemp">
      <Jumbotron fluid id="bcgTemp">
        <Container className="temp1">
          <h1 className="tempTitle">
            Welcome to LingoLabs Website <br /> Template Repository!
          </h1>
          <p className="text1">
            Browse our beautifully designed and industry leading website
            templates. Each of them has been meticulously curated to fit varying
            industries and businesses. You have the power to simply with the
            click of a few buttons, instantaneously download a website that will
            help you attain your business goals and meet your customers’ needs!
          </p>
        </Container>
      </Jumbotron>

      <Container fluid className="main_content">
        <div className="tab">
          <button className="tablinks1">
            <a
              href="#popular-title"
              style={{ color: "black", textDecoration: "none" }}
            >
              Popular Design
            </a>
          </button>

          <button className="tablinks2">
            {" "}
            <a
              href="#photo-title"
              style={{ color: "black", textDecoration: "none" }}
            >
              Photography
            </a>
          </button>
          <button className="tablinks3">
            <a
              href="#business-title"
              style={{ color: "black", textDecoration: "none" }}
            >
              Local Business
            </a>
          </button>
          <button className="tablinks4">
            <a
              href="#portfolio-title"
              style={{ color: "black", textDecoration: "none" }}
            >
              Portfolio & CV
            </a>
          </button>

          <button className="tablinks6">
            {" "}
            <a
              href="#restaurant-title"
              style={{ color: "black", textDecoration: "none" }}
            >
              Restaurant
            </a>
          </button>
          <button className="tablinks6">
            {" "}
            <a
              href="#estate-title"
              style={{ color: "black", textDecoration: "none" }}
            >
              Real Estate
            </a>
          </button>
        </div>

        <div className="main-wrapper" id="popular">
          <Container className="browse_txt">
            <h1 className="browse_title" id="popular-title">
              Popular Design
            </h1>
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
                  <button
                    className="button"
                    variant="outline-primary"
                    number="one"
                    name="popular website 1"
                    src=" https://github.com/project3-2020/Popular_1.git"
                    price="1200.00"
                    onClick={addToCart}
                  >
                    {button.one}
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
                  <button
                    className="button"
                    number="two"
                    name="popular website 2"
                    src="https://github.com/project3-2020/Popular_2.git"
                    price="1200.00"
                    onClick={addToCart}
                  >
                    {button.two}
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
                  <button
                    className="button"
                    variant="outline-primary"
                    number="three"
                    name="popular website 3"
                    src="https://github.com/project3-2020/Popular_3.git"
                    price="1200.00"
                    onClick={addToCart}
                  >
                    {button.three}
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
                  <button
                    className="button"
                    number="four"
                    name="popular website 4"
                    src="https://github.com/project3-2020/Popular_4.git"
                    price="1200.00"
                    onClick={addToCart}
                  >
                    {" "}
                    {button.four}
                  </button>
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
                  <button
                    className="button"
                    number="five"
                    name="popular website 5"
                    src="https://github.com/project3-2020/Popular_5.git"
                    price="1200.00"
                    onClick={addToCart}
                  >
                    {" "}
                    {button.five}
                  </button>
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
                  <button
                    className="button"
                    number="six"
                    name="popular website 6"
                    src="https://github.com/project3-2020/Popular_6.git"
                    price="1200.00"
                    onClick={addToCart}
                  >
                    {" "}
                    {button.six}
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <Photo user={props.user} addToCart={addToCart} />
        <Portfolio />
        <Business />
        <Restaurant />
        <Estate />
      </Container>

      {/* KEEP EVERYTHING INSIDE */}

      <Container fluid>
        <Footer />
      </Container>
    </Container>
  );
}

export default Templates;
