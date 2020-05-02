import React from "react";

import "../Components/style/templates.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import $ from "jquery";
import estate1 from "../Components/style/Images/estate1.png";
import estate2 from "../Components/style/Images/estate2.png";

import { useEffect, useState } from "react";
import API from "../utils/API";

function Estate(props) {
  var user = props.user;

  const [button, setButton] = useState({
    one: "Add To Cart",
    two: "Add To Cart",
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
    <div className="main-wrapper" id="estate">
      <Container className="browse_txt">
        <h1 className="browse_title" id="estate-title">
          Real Estate
        </h1>
      </Container>
      <Row>
        <Col>
          <div className="temp_container">
            <img src={estate1} alt="Avatar" className="temp_image"></img>
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
                  href="https://project3-2020.github.io/Real_Estate_1/"
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
                name="Real Estate website 1"
                src="https://github.com/project3-2020/Real_Estate_1.git"
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
            <img src={estate2} alt="Avatar" className="temp_image"></img>
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
                  href="https://project3-2020.github.io/Real_Estate_2/"
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
                name="Real Estate website 2"
                src="https://github.com/project3-2020/Real_Estate_2.git"
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
    </div>
  );
}

export default Estate;
