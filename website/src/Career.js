import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Badge from "react-bootstrap/Badge";
import aws from "./assets/aws.png";
import electrum from "./assets/electrum.png";
import react from "./assets/react.png";
import ts from "./assets/typescript.svg";
import js from "./assets/javascript.svg";
import python from "./assets/python.png";
import golang from "./assets/golang.png";
import dynamodb from "./assets/dynamodb.png";

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
      <Row>
        <Col
          md={3}
          xs={12}
          style={{
            marginRight: "4vw",
          }}
        >
          <Card
            style={{
              width: "100%",
              height: "50vh",
              textAlign: "left",
              backgroundColor: "transparent",
            }}
            border="danger"
          >
            <Card.Body>
              <Card.Title>
                <h5>Wall of Fame</h5>
              </Card.Title>
              <div></div>
              <div>
                <Row className="justify-content-md-center">
                  <img
                    id="aws"
                    style={{
                      marginTop: "2vw",
                    }}
                    width={160}
                    src={aws}
                    alt="AWS Logo"
                  />
                </Row>
              </div>
              <div>
                <Row className="justify-content-md-center">
                  <img
                    id="electrum"
                    style={{
                      marginTop: "2vw",
                    }}
                    width={180}
                    src={electrum}
                    alt="Electrum Logo"
                  />
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col
          md={4}
          xs={12}
          style={{
            marginRight: "4vw",
            marginBottom: "2vh",
          }}
        >
          <Row>
            <h1 className="numericCareer">4</h1>
            <h1 className="careerText">Internships</h1>
          </Row>
          <Row>
            <h1 className="numericCareer">2</h1>
            <h1 className="careerText">Companies</h1>
          </Row>
        </Col>
        <Col
          md={3}
          xs={12}
          style={{
            width: "27vw",
            marginBottom: "2vh",
          }}
        >
          <Row>
            <h1 className="numericCareer">4</h1>
            <h1 className="careerText">Projects</h1>
          </Row>
          <Row>
            <h1 className="numericCareer">6</h1>
            <h1 className="careerText">Months</h1>
          </Row>
        </Col>
      </Row>
      <Row
        style={{
          marginBottom: "6vh",
        }}
      >
        <Col md={12} sm={12} style={{
          marginLeft: "1vh",
          marginRight: "1vh",
        }}>
          <Carousel
            style={{
              marginTop: "6vw",
              width: "100%",
              height: "60vh"
            }}
          >
            <Carousel.Item>
              <Row className="justify-content-md-center">
                <Card
                  style={{
                    marginLeft: "0vh",
                    width: "75%",
                    height: "50vh",
                    textAlign: "left",
                    backgroundColor: "transparent",
                  }}
                  border="light"
                >
                  <Card.Body>
                    <Card.Title>Data File</Card.Title>
                    <Row>
                      <Col md="auto">
                        <div>
                          <h4 className="careerName">Amazon Web Services</h4>
                          <h5>Software Developement Engineer Intern</h5>
                          <h5>
                            <Badge pill variant="danger">
                              2019 - 2020
                            </Badge>
                          </h5>
                        </div>
                      </Col>
                      <Col>
                        <Row
                          className="justify-content-md-center"
                          style={{
                            marginTop: "2vw",
                          }}
                        >
                          <h5 className="stackSubtitle">TECHNOLOGY STACK</h5>
                        </Row>
                        <Row
                          className="justify-content-md-center"
                          style={{
                            marginBottom: "3vw",
                          }}
                        >
                          <img width="60" src={react} alt="react"></img>
                          <img width="40" src={ts} alt="typescript"></img>
                          <img width="60" src={dynamodb} alt="dynamodb"></img>
                          <img width="40" src={golang} alt="golang"></img>
                          <img width="42" src={python} alt="python"></img>
                        </Row>
                      </Col>
                    </Row>
                    <div>
                      <h5 className="recordText">
                        Reduced operational load for the Managed Deployments
                        team by developing and implemented an information
                        linking and tracking system. Typescript and React was
                        used for the solution front-end, a Golang RESTful API
                        server backend, and a DynamoDB repository for
                        persistence.
                      </h5>
                    </div>
                    <div>
                      <h5 className="recordText">
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
                    height: "50vh",
                    textAlign: "left",
                    backgroundColor: "transparent",
                  }}
                  border="light"
                >
                  <Card.Body>
                    <Card.Title>Data File</Card.Title>
                    <Row>
                      <Col md="auto">
                        <div>
                          <h4 className="careerName">Electrum Payments</h4>
                          <h5>Software Developer Intern</h5>
                          <h5>
                            <Badge pill variant="danger">
                              2019
                            </Badge>
                          </h5>
                        </div>
                      </Col>
                      <Col>
                        <Row
                          className="justify-content-md-center"
                          style={{
                            marginTop: "2vw",
                          }}
                        >
                          <h5 className="stackSubtitle">TECHNOLOGY STACK</h5>
                        </Row>
                        <Row
                          className="justify-content-md-center"
                          style={{
                            marginBottom: "3vw",
                          }}
                        >
                          <img width="60" src={react} alt="react"></img>
                          <img width="40" src={js} alt="javascript"></img>
                        </Row>
                      </Col>
                    </Row>
                    <div>
                      <h5 className="recordText">
                        Developed a MVP for a new API Documentation website for
                        Electrum's open-source services, built with Gatsby, a
                        React-based framework.
                      </h5>
                    </div>
                    <div>
                      <h5 className="recordText">
                        Configured Docker files and continuous integration and
                        deployment with CircleCI.
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
