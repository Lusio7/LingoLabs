import "../Components/style/templates.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import API from "../utils/API"

import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import $ from "jquery";
import popular1 from "../Components/style/Images/popular1.png";
import popular2 from "../Components/style/Images/popular2.png";
import popular3 from "../Components/style/Images/popular3.png";
import popular4 from "../Components/style/Images/popular4.png";
import popular5 from "../Components/style/Images/popular5.png";
import popular6 from "../Components/style/Images/popular6.png";
import Footer from "../Components/Footer";

import Photo from "../Components/Photo";
import { set } from "mongoose";



function Templates(props) {


  var user = props.user

  const[ button, setButton]=useState(
    {
    one:"Add To Cart",
    two:"Add To Cart",
    three:"Add To Cart",
    four:"Add To Cart",
    five:"Add To Cart",
    six:"Add To Cart"

    }
  )

  const addToCart =async function(event){
    event.stopPropagation();
    event.preventDefault();
    let name = event.target.getAttribute("name");
    let link = event.target.getAttribute("src");
    let price = event.target.getAttribute("price");
    var idNumber = event.target.getAttribute("number");
    let body = {
      username : user,
      name :name,
      link : link,
      price : parseFloat(price),
      }
      console.log("=====body for item");
      console.log(body);
      console.log(idNumber);
      
      var result = await API.objectToCart(body);
      if(result){
        setButton({...button, [idNumber]:"added"})
        setTimeout(() => {
          setButton({...button, [idNumber]:"Add To Cart",})
          }, 1000);



      }

  }




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
        <div className="tab">
          <button className="tablinks">Popular Design</button>
          <button className="tablinks">Photography</button>
          <button className="tablinks">Local Business</button>
          <button className="tablinks">Personal & CV</button>
          <button className="tablinks">Restaurants</button>
          <button className="tablinkss">Real Estate</button>
        </div>

        <div className="main-wrapper" id="popular">
          <Container className="browse_txt">
            <h1 className="browse_title" id="popular-title">Popular Design</h1>
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
                  <button className="button" variant="outline-primary"
                    number = "one"
                   name ="popular website 1"
                    src="https://project3-2020.github.io/Popular_1/"
                    price ="1200.00"
                    onClick={addToCart}> {button.one}
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
                  <button className="button"
                  number = "two"
                  name="popular website 2"
                    src="https://project3-2020.github.io/Popular_2/"
                    price ="1200.00"
                    onClick={addToCart}> {button.two}
                
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
                  <button className="button" variant="outline-primary"
                  number = "three"
                  name="popular website 3"
                    src="https://project3-2020.github.io/Popular_3/"
                    price ="1200.00"
                    onClick={addToCart}> {button.three}
                  
                    
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
                  <button className="button"
                  number = "four"
                   name="popular website 4"
                   src="https://project3-2020.github.io/Popular_4/"
                   price ="1200.00"
                   onClick={addToCart}> {button.four}
                   
                      
                    
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
                  <button className="button"
                  number = "five"
                   name="popular website 5"
                   src="https://project3-2020.github.io/Popular_5/"
                   price ="1200.00"
                   onClick={addToCart}> {button.five}
                   
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
                  <button className="button"
                  number= "six"
                   name="popular website 6"
                   src="https://project3-2020.github.io/Popular_6/"
                   price ="1200.00"
                   onClick={addToCart}> {button.six}
                
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </div>

     <Photo user={props.user} addToCart={addToCart}/>
      </Container>

      {/* KEEP EVERYTHING INSIDE */}

      <Container fluid>
        <Footer />
      </Container>
    </Container>
  );
}

export default Templates;
