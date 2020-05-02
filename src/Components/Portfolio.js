import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";

import port1 from "../Components/style/Images/port1.png";
import port2 from "../Components/style/Images/port2.png";
import port3 from "../Components/style/Images/port3.png";
import port4 from "../Components/style/Images/port4.png";

import { useEffect, useState } from "react";
import API from "../utils/API";

function Portfolio(props) {
  var user = props.user;

  const [button, setButton] = useState({
    one: "Add To Cart",
    two: "Add To Cart",
    three: "Add To Cart",
    four: "Add To Cart",
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
              <button
                className="button"
                variant="outline-primary"
                number="one"
                name="Portfolio website 1"
                src="https://github.com/project3-2020/Portfolio_1.git"
                price="1250.00"
                onClick={addToCart}
              >
                {" "}
                {button.one}
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
              <button
                className="button"
                variant="outline-primary"
                number="one"
                name="Portfolio website 2"
                src="https://github.com/project3-2020/Portfolio_2.git"
                price="1250.00"
                onClick={addToCart}
              >
                {" "}
                {button.two}
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
              <button
                className="button"
                variant="outline-primary"
                number="one"
                name="Portfolio website 3"
                src="https://github.com/project3-2020/Portfolio_3.git"
                price="1250.00"
                onClick={addToCart}
              >
                {" "}
                {button.three}
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
              <button
                className="button"
                variant="outline-primary"
                number="one"
                name="Portfolio website 4"
                src="https://github.com/project3-2020/Portfolio_4.git"
                price="1250.00"
                onClick={addToCart}
              >
                {" "}
                {button.four}
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Portfolio;
