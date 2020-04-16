import React from "react";
import "../Components/style/templates.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

/*
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button"
import niko from "../Components/style/Images/niko.jpg"
import Home from "../Components/Home";

*/

function Templates() {
  {
    /*
function handleClick(filter) {
    filter.preventDefault();
    alert('The link was clicked.');
    <button onClick={handleClick}></button>

}
*/
  }

  return (
    <Container fluid className="mainTemp">
      <Jumbotron fluid id="bcgTemp">
        <Container fluid className="temp1">
          <h1 className="tempTitle">Starting points for your business.</h1>
          <p className="text1">
            Get started with any of our best-in-class website templates, whether
            it's contact forms or color palettes. Making a beautiful website has
            never been faster.
          </p>
        </Container>
      </Jumbotron>

      <Container fluid className="filter_container"></Container>
    </Container>
  );
}

export default Templates;
