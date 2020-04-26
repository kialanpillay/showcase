import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import react from "./assets/react.png";
import js from "./assets/javascript.svg";
import ts from "./assets/typescript.svg";
import python from "./assets/python.png";
import matlab from "./assets/matlab.png";
import R from "./assets/R.png";
import java from "./assets/java.png";
import golang from "./assets/golang.png";
import sql from "./assets/mysql.svg";
import keras from "./assets/keras.jpg"; 
import tensorflow from "./assets/tensorflow.png"; 

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
          <h1 className="sectionHeading" id="skills">
            SKILLS
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Carousel
            style={{
              height: "28vw",
              width: "51vw",
            }}
          >
            <Carousel.Item>
              <h1 className="skillsHeading">FRONTEND</h1>
              <Row
                className="justify-content-md-center"
                style={{
                  marginTop: "6vh",
                }}
              >
                <Col md="auto">
                  <img width="100" src={js} alt="javascript"></img>
                </Col>
                <Col md="auto">
                  <img width="150" src={react} alt="react"></img>
                </Col>
                <Col md="auto">
                  <img width="100" src={ts} alt="typescript"></img>
                </Col>
              </Row>
              <Row
                className="justify-content-md-center"
                style={{
                  marginTop: "6vh",
                }}
              >
                <Col md="auto">
                  <h4>JavaScript | ReactJS | TypeScript | HTML | CSS</h4>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <h1 className="skillsHeading">BACKEND</h1>
              <Row
                className="justify-content-md-center"
                style={{
                  marginTop: "6vh",
                }}
              >
                <Col md="auto">
                  <img width="70" src={java} alt="java"></img>
                </Col>
                <Col md="auto">
                  <img width="100" src={golang} alt="golang"></img>
                </Col>
                <Col md="auto">
                  <img width="100" src={python} alt="python"></img>
                </Col>
                <Col md="auto">
                  <img width="120" src={sql} alt="sql"></img>
                </Col>
              </Row>
              <Row
                className="justify-content-md-center"
                style={{
                  marginTop: "6vh",
                }}
              >
                <Col md="auto">
                  <h4>Java | Golang | Python | C++ | SQL</h4>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <h1 className="skillsHeading">MACHINE LEARNING</h1>
              <Row
                className="justify-content-md-center"
                style={{
                  marginTop: "6vh",
                }}
              >
                <Col md="auto">
                  <img width="90" src={keras} alt="keras"></img>
                </Col>
                <Col md="auto">
                  <img width="90" src={tensorflow} alt="tensorflow"></img>
                </Col>
                <Col md="auto">
                  <img width="100" src={matlab} alt="matlab"></img>
                </Col>
                <Col md="auto">
                  <img width="100" src={R} alt="R"></img>
                </Col>
              </Row>
              <Row
                className="justify-content-md-center"
                style={{
                  marginTop: "6vh",
                }}
              >
                <Col md="auto">
                  <h4>Python | Keras | Tensorflow | Matlab | R</h4>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col>
          <Card
            style={{
              width: "20vw",
              height: "50vh",
              textAlign: "left",
              backgroundColor: "transparent",
            }}
            border="warning"
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
    </div>
  );
}

export default Skills;
