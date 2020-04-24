import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Carousel from "react-bootstrap/Carousel";
import img01 from "./assets/react.png";
import img02 from "./assets/javascript.svg";
import img03 from "./assets/typescript.svg";

function Skills() {
  return (
    <div>
      <Row
        style={{
          width: "100%",
          marginTop: "10vh",
          marginBottom: "6vh",
        }}
      >
        <Col md="auto">
          <h1 className="headingText" id="skills">
            SKILLS
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Carousel
            style={{
              height: "24vw",
              width: "50vw",
            }}
          >
            <Carousel.Item>
              <h1 className="stack">FRONTEND</h1>
              <Row
                className="justify-content-md-center"
                style={{
                  marginTop: "6vh",
                }}
              >
                <Col md="auto">
                  <img width="80" src={img02}></img>
                </Col>
                <Col md="auto">
                  <img width="120" src={img01}></img>
                </Col>
                <Col md="auto">
                  <img width="80" src={img03}></img>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <h1 className="stack">BACKEND</h1>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col>
          <Card
            style={{
              width: "20vw",
              height: "28vw",
              textAlign: "left",
              backgroundColor: "transparent",
            }}
            border="light"
          >
            <Card.Body>
              <Card.Title>Statistics</Card.Title>
              <Card.Text>
                <h1 className="numeric">6</h1>
                <h3>Years of Experience</h3>
              </Card.Text>
              <Card.Text>
                <h1 className="numeric">12</h1>
                <h3>Languages</h3>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
    </div>
  );
}

export default Skills;
