import "../Components/style/templates.css";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import API from "../utils/API";

import $ from "jquery";
import photo1 from "../Components/style/Images/photo1.png";
import photo2 from "../Components/style/Images/photo2.png";
import photo3 from "../Components/style/Images/photo3.png";
import photo4 from "../Components/style/Images/photo4.png";
import photo5 from "../Components/style/Images/photo5.png";
import photo6 from "../Components/style/Images/photo6.png";

function Photo(props) {
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
    <div className="main-wrapper" id="photo">
      <Container className="browse_txt">
        <h1 className="browse_title" id="photo-title">
          Photography Templates
        </h1>
      </Container>
      <Row>
        <Col>
          <div className="temp_container">
            <img src={photo1} alt="Avatar" className="temp_image"></img>
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
                  href="https://project3-2020.github.io/Photography_1/"
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
                name="photography website 1"
                src="https://github.com/project3-2020/Photography_1/archive/master.zip"
                price="1250.00"
                onClick={addToCart}
              >
                {" "}
                {button.one}
              </button>
              {/* <button className="button" variant="outline-primary">
                Download
              </button> */}
            </div>
          </div>
        </Col>
        <Col>
          <div className="temp_container">
            <img src={photo2} alt="Avatar" className="temp_image"></img>
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
                  href="https://project3-2020.github.io/Photography_2/"
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
                name="photography website 2"
                src="https://github.com/project3-2020/Photography_2/archive/master.zip"
                price="1250.00"
                onClick={addToCart}
              >
                {" "}
                {button.two}
              </button>
              {/* <button className="button" variant="outline-primary">
                Download
              </button> */}
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="temp_container">
            <img src={photo3} alt="Avatar" className="temp_image"></img>
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
                  href="https://project3-2020.github.io/Photography_3/"
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
                name="photography website 3"
                src="https://github.com/project3-2020/Photography_3/archive/master.zip"
                price="1250.00"
                onClick={addToCart}
              >
                {button.three}
              </button>
              {/* <button className="button" variant="outline-primary">
                Download
              </button> */}
            </div>
          </div>
        </Col>
        <Col>
          <div className="temp_container">
            <img src={photo4} alt="Avatar" className="temp_image"></img>
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
                  href=" https://project3-2020.github.io/Photography_4/"
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
                name="photography website 4"
                src="https://github.com/project3-2020/Photography_4/archive/master.zip"
                price="1250.00"
                onClick={addToCart}
              >
                {" "}
                {button.four}
              </button>
              {/* <button className="button">Download</button> */}
            </div>
          </div>
        </Col>
        <Col>
          <div className="temp_container">
            <img src={photo5} alt="Avatar" className="temp_image"></img>
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
                  href=" https://project3-2020.github.io/Photography_5/"
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
                number="five"
                name="photography website 5"
                src="https://github.com/project3-2020/Photography_5/archive/master.zip"
                price="1250.00"
                onClick={addToCart}
              >
                {" "}
                {button.five}
              </button>
              {/* <button className="button" variant="outline-primary">
                Download
              </button> */}
            </div>
          </div>
        </Col>
        <Col>
          <div className="temp_container">
            <img src={photo6} alt="Avatar" className="temp_image"></img>
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
                  href="https://project3-2020.github.io/Photography_6/."
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
                name="photography website 6"
                src="https://github.com/project3-2020/Photography_6/archive/master.zip"
                price="1250.00"
                onClick={addToCart}
              >
                {" "}
                {button.five}
              </button>
              {/* <button className="button">Download</button> */}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Photo;
