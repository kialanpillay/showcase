import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Badge from "react-bootstrap/Badge";
import react from "./assets/react.png";
import ts from "./assets/typescript.svg";
import js from "./assets/javascript.svg";
import python from "./assets/python.png";
import golang from "./assets/golang.png";
import dynamodb from "./assets/dynamodb.png";
import sql from "./assets/mysql.svg";

function Career() {
  return (
    <div>
      <Row
        style={{
          width: "100%",
          marginTop: "6vw",
          marginBottom: "2vh",
        }}
      >
        <Col md="auto" xs="auto">
          <h1 className="sectionHeading" id="career">
            CAREER
          </h1>
        </Col>
      </Row>
      <Row
        style={{
          marginBottom: "6vh",
        }}
      >
        <Col
          md={12}
          sm={12}
          style={{
            marginLeft: "1vh",
            marginRight: "1vh",
          }}
        >
          <Carousel
            style={{
              marginTop: "2vw",
              width: "100%",
              height: "30rem",
            }}
          >
            <Carousel.Item>
              <Row className="justify-content-md-center">
                <Card
                  style={{
                    marginLeft: "0vh",
                    width: "75%",
                    height: "26rem",
                    textAlign: "left",
                    backgroundColor: "transparent",
                  }}
                  border="light"
                >
                  <Card.Body>
                    <Card.Title>I N F O</Card.Title>
                    <Row>
                      <Col md={8}>
                        <div>
                          <a
                            href="https://aws.amazon.com"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="link"
                          >
                            <h1>Amazon Web Services</h1>
                          </a>
                          <h5>Software Development Engineer Intern</h5>
                          <h5>
                            <Badge pill variant="light">
                              2019 - 2020
                            </Badge>
                          </h5>
                        </div>
                      </Col>
                      <Col>
                        <Row
                          className="justify-content-md-center"
                          style={{
                            marginTop: "1vw",
                          }}
                        >
                          <img
                            className="stackImage"
                            id="stackReact"
                            width="60"
                            src={react}
                            alt="react"
                          ></img>
                          <img
                            className="stackImage"
                            width="40"
                            src={ts}
                            alt="typescript"
                          ></img>
                          <img
                            className="stackImage"
                            width="60"
                            src={dynamodb}
                            alt="dynamodb"
                          ></img>
                          <img
                            className="stackImage"
                            width="40"
                            src={golang}
                            alt="golang"
                          ></img>
                        </Row>
                      </Col>
                    </Row>
                    <div>
                      <h5 className="careerText">
                        Reduced operational load for the Managed Deployments
                        team by developing and implementing an information
                        linking and tracking system. Typescript and React was
                        used for the solution front-end, a Golang RESTful API
                        server backend, and a DynamoDB repository for
                        persistence.
                      </h5>
                    </div>
                    <div>
                      <h5 className="careerText">
                        Discovered key insights concerning deployments, and
                        drafted a roadmap for future work by conducting an
                        investigation into using Machine Learning for deployment
                        failure predictive analytics, utilising Logistic
                        Regression, ANNs and Bayesian Networks in Python.
                      </h5>
                    </div>
                  </Card.Body>
                </Card>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row className="justify-content-md-center">
                <Card
                  style={{
                    marginLeft: "0vh",
                    width: "75%",
                    height: "26rem",
                    textAlign: "left",
                    backgroundColor: "transparent",
                  }}
                  border="light"
                >
                  <Card.Body>
                    <Card.Title>I N F O</Card.Title>
                    <Row>
                      <Col md={8}>
                        <div>
                          <a
                            href="https://electrum.co.za"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="link"
                          >
                            <h1>Electrum Payments</h1>
                          </a>
                          <h5>Software Developer Intern</h5>
                          <h5>
                            <Badge pill variant="light">
                              2019
                            </Badge>
                          </h5>
                        </div>
                      </Col>
                      <Col>
                        <Row
                          className="justify-content-md-center"
                          style={{
                            marginTop: "1vw",
                          }}
                        >
                          <img
                            className="stackImage"
                            id="stackReact"
                            width="60"
                            src={react}
                            alt="react"
                          ></img>
                          <img
                            className="stackImage"
                            width="40"
                            src={js}
                            alt="javascript"
                          ></img>
                        </Row>
                      </Col>
                    </Row>
                    <div>
                      <h5 className="careerText">
                        Developed a MVP for a new API Documentation website for
                        Electrum's open-source services, built with Gatsby, a
                        React-based framework.
                      </h5>
                    </div>
                    <div>
                      <h5 className="careerText">
                        Configured Docker files and continuous integration and
                        deployment with CircleCI.
                      </h5>
                    </div>
                  </Card.Body>
                </Card>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row className="justify-content-md-center">
                <Card
                  style={{
                    marginLeft: "0vh",
                    width: "75%",
                    height: "26rem",
                    textAlign: "left",
                    backgroundColor: "transparent",
                  }}
                  border="light"
                >
                  <Card.Body>
                    <Card.Title>I N F O</Card.Title>
                    <Row>
                      <Col md={8}>
                        <div>
                          <a
                            href="https://nomanini.com"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="link"
                          >
                            <h1>Nomanini</h1>
                          </a>
                          <h5>Software Developer Intern</h5>
                          <h5>
                            <Badge pill variant="light">
                              2020
                            </Badge>
                          </h5>
                        </div>
                      </Col>
                      <Col>
                        <Row
                          className="justify-content-md-center"
                          style={{
                            marginTop: "1vw",
                          }}
                        >
                          <img
                            className="stackImage"
                            width="40"
                            src={python}
                            alt="python"
                          ></img>
                          <img
                            className="stackImage"
                            width="60"
                            src={sql}
                            alt="mysql"
                          ></img>
                        </Row>
                      </Col>
                    </Row>
                    <div>
                      <h5 className="careerText">
                        Developed a Python package to extract and process data
                        that measures merchant health, to generate a set of
                        credit scores using a heuristic model.
                      </h5>
                    </div>
                    <div>
                      <h5 className="careerText">
                        {" "}
                        Conducted data analysis on the extracted features using
                        several machine learning techniques, including
                        clustering and neural networks, with Keras.
                      </h5>
                    </div>
                  </Card.Body>
                </Card>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </div>
  );
}

export default Career;
