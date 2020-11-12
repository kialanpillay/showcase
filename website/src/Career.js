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
          marginTop: "6vw",
          marginBottom: "2vh",
        }}
      >
        <Col>
          <h1 className="h1--section" id="career">
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
          xs={12}
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
                      <Col md={4}>
                        <Row
                          className="justify-content-md-center"
                          style={{
                            marginTop: "1vw",
                            marginBottom: "3vw",
                          }}
                        >
                          <img
                            className="image--stack image--stack-react"
                            width="60"
                            src={react}
                            alt="ReactJS"
                          ></img>
                          <img
                            className="image--stack"
                            width="40"
                            src={ts}
                            alt="TypeScript"
                          ></img>
                          <img
                            className="image--stack"
                            width="60"
                            src={dynamodb}
                            alt="DynamoDB"
                          ></img>
                          <img
                            className="image--stack"
                            width="40"
                            src={golang}
                            alt="Golang"
                          ></img>
                        </Row>
                      </Col>
                    </Row>
                    <div
                      style={{
                        marginTop: "1rem",
                      }}
                    >
                      <p className="p--career">
                        Reduced operational load for the Managed Deployments
                        team by developing and implementing an information
                        linking and tracking system. Typescript and React was
                        used for the solution front-end, a Golang RESTful API
                        server backend, and a DynamoDB repository for
                        persistence.
                      </p>
                    </div>
                    <div>
                      <p className="p--career">
                        Discovered key insights concerning deployments, and
                        drafted a roadmap for future work by conducting an
                        investigation into using Machine Learning for deployment
                        failure predictive analytics, utilising Logistic
                        Regression, ANNs and Bayesian Networks in Python.
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row className="justify-content-md-center">
                <Card
                  style={{
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
                      <Col md={4}>
                        <Row
                          className="justify-content-md-center"
                          style={{
                            marginTop: "1vw",
                            marginBottom: "3vw",
                          }}
                        >
                          <img
                            className="image--stack image--stack-react"
                            width="60"
                            src={react}
                            alt="ReactJS"
                          ></img>
                          <img
                            className="image--stack"
                            width="40"
                            src={js}
                            alt="JavaScript"
                          ></img>
                        </Row>
                      </Col>
                    </Row>
                    <div
                      style={{
                        marginTop: "1rem",
                      }}
                    >
                      <p className="p--career">
                        Developed a MVP for a new API Documentation website for
                        Electrum's open-source services, built with Gatsby, a
                        React-based framework.
                      </p>
                    </div>
                    <div>
                      <p className="p--career">
                        Configured Docker files and continuous integration and
                        deployment with CircleCI.
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row className="justify-content-md-center">
                <Card
                  style={{
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
                      <Col md={4}>
                        <Row
                          className="justify-content-md-center"
                          style={{
                            marginLeft: "0.5vw",
                            marginTop: "1vw",
                            marginBottom: "3vw",
                          }}
                        >
                          <img
                            className="image--stack"
                            width="40"
                            src={python}
                            alt="Python"
                          ></img>
                          <img
                            className="image--stack"
                            width="60"
                            src={sql}
                            alt="MySQL"
                          ></img>
                        </Row>
                      </Col>
                    </Row>
                    <div
                      style={{
                        marginTop: "1rem",
                      }}
                    >
                      <p className="p--career">
                        Developed a Python package to extract and process data
                        that measures merchant health, to generate a set of
                        credit scores and loan offers using a heuristic model.
                      </p>
                    </div>
                    <div>
                      <p className="p--career">
                        {" "}
                        Conducted data analysis on the extracted features using
                        several machine learning techniques, including
                        clustering and neural networks, with Keras.
                      </p>
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
