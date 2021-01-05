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
          marginTop: "6vw",
          marginBottom: "2vh",
        }}
      >
        <Col>
          <h1 className="h1--section" id="skills">
            SKILLS
          </h1>
        </Col>
      </Row>
      <Row>
        <Col md={8} xs={12}>
          <Carousel
            style={{
              height: "20rem",
              width: "100%",
            }}
          >
            <Carousel.Item>
              <h1 className="h1--skills">FRONTEND</h1>
              <Row
                className="justify-content-md-center"
                style={{
                  marginTop: "6vh",
                  height: "10vw",
                }}
              >
                <Col md="auto" xs={4}>
                  <img
                    className="image"
                    width="100"
                    src={js}
                    alt="JavaScript"
                  ></img>
                </Col>
                <Col md="auto" xs={4}>
                  <img
                    className="image image--react"
                    width="150"
                    src={react}
                    alt="ReactJS"
                  ></img>
                </Col>
                <Col md="auto" xs={4}>
                  <img
                    className="image"
                    width="100"
                    src={ts}
                    alt="TypeScript"
                  ></img>
                </Col>
              </Row>
              <Row
                className="justify-content-md-center"
              >
                <Col md="auto">
                  <h4 className="h4--skills">
                    JavaScript | ReactJS | TypeScript | HTML | CSS
                  </h4>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <h1 className="h1--skills">BACKEND</h1>
              <Row
                className="justify-content-md-center"
                style={{
                  marginTop: "6vh",
                  height: "10vw",
                }}
              >
                <Col md="auto" xs={3}>
                  <img
                    className="image"
                    width="100"
                    src={golang}
                    alt="Golang"
                  ></img>
                </Col>
                <Col md="auto" xs={3}>
                  <img
                    className="image"
                    width="100"
                    src={python}
                    alt="Python"
                  ></img>
                </Col>
                <Col md="auto" xs={3}>
                  <img
                    className="image"
                    id="sql"
                    width="120"
                    src={sql}
                    alt="MySQL"
                  ></img>
                </Col>
                <Col md="auto" xs={3}>
                  <img className="image" width="60" src={java} alt="java"></img>
                </Col>
              </Row>
              <Row
                className="justify-content-md-center"
              >
                <Col md="auto">
                  <h4 className="h4--skills">Java | Golang | Python | C++ | SQL</h4>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <h1 className="h1--skills">MACHINE LEARNING</h1>
              <Row
                className="justify-content-md-center"
                style={{
                  marginTop: "6vh",
                  height: "10vw",
                }}
              >
                <Col md="auto" xs={3}>
                  <img
                    className="image"
                    width="90"
                    src={keras}
                    alt="Keras"
                  ></img>
                </Col>
                <Col md="auto" xs={3}>
                  <img
                    className="image"
                    width="90"
                    src={tensorflow}
                    alt="TensorFlow"
                  ></img>
                </Col>
                <Col md="auto" xs={3}>
                  <img
                    className="image"
                    width="100"
                    src={matlab}
                    alt="MATLAB"
                  ></img>
                </Col>
                <Col md="auto" xs={3}>
                  <img className="image" width="100" src={R} alt="R"></img>
                </Col>
              </Row>
              <Row
                className="justify-content-md-center"
              >
                <Col md="auto">
                  <h4 className="h4--skills">
                    Keras | Tensorflow | MATLAB | R
                  </h4>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col md={3} xs={12}>
          <Card
            style={{
              width: "100%",
              height: "100%",
              textAlign: "left",
              backgroundColor: "transparent",
            }}
            border="light"
          >
            <Card.Body>
              <Card.Title>S N A P S H O T</Card.Title>
              <div>
                <h1 className="h1--numeric">6</h1>
                <h3>Years of Experience</h3>
              </div>
              <div>
                <h1 className="h1--numeric">12</h1>
                <h3>Languages</h3>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Skills;
