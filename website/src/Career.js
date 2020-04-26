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
          marginTop: "10vh",
          marginBottom: "6vh",
        }}
      >
        <Col md="auto">
          <h1 className="sectionHeading" id="career">
            CAREER
          </h1>
        </Col>
      </Row>
      <Row>
        <Col md="auto" style={{
              marginRight: "4vw",
            }}>
          <Row>
            <h1 className="numericCareer">4</h1>
            <h1 className="careerText">Internships</h1>
          </Row>
          <Row>
            <h1 className="numericCareer">2</h1>
            <h1 className="careerText">Companies</h1>
          </Row>
        </Col>
        <Col md="auto" style={{
              width: "27vw",
            }}>
          <Row>
            <h1 className="numericCareer">4</h1>
            <h1 className="careerText">Projects</h1>
          </Row>
          <Row>
            <h1 className="numericCareer">6</h1>
            <h1 className="careerText">Months</h1>
          </Row>
        </Col>
        <Col>
          <Card
            style={{
              width: "20vw",
              height: "50vh",
              textAlign: "left",
              backgroundColor: "transparent",
            }}
            bg="danger"
          >
            <Card.Body>
              <Card.Title><h5>Wall of Fame</h5></Card.Title>
              <Card.Text></Card.Text>
              <Card.Text>
              <Row className="justify-content-md-center">
                <img
                  style={{
                    marginTop: "2vw",
                  }}
                  width={160}
                  src={aws}
                  alt="AWS Logo"
                /></Row>
              </Card.Text>
              <Card.Text>
              <Row className="justify-content-md-center">
                <img
                  style={{
                    marginTop: "2vw",
                  }}
                  width={180}
                  src={electrum}
                  alt="Electrum Logo"
                /></Row>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row
        style={{
          width: "100%",
          marginBottom: "6vh",
        }}
      >
        <Col md="auto">
          <Carousel
            style={{
              marginTop: "6vw",
              height: "60vh",
              width: "80vw",
            }}
          >
            <Carousel.Item>
              <Row className="justify-content-md-center">
                <Card
                  style={{
                    width: "60vw",
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
                        <Card.Text>
                          <h4 className="careerName">Amazon Web Services</h4>
                          <h5>Software Developement Engineer Intern</h5>
                          <h5><Badge pill variant="danger">2019 - 2020</Badge></h5>
                        </Card.Text>
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
                    <Card.Text>
                      <h5 className="recordText">
                        Reduced operational load for the Managed Deployments
                        team by developing and implemented an information
                        linking and tracking system. Typescript and React was
                        used for the solution front-end, a Golang RESTful API
                        server backend, and a DynamoDB repository for
                        persistence.
                      </h5>
                    </Card.Text>
                    <Card.Text>
                      <h5 className="recordText">
                        Discovered key insights concerning deployments, and
                        drafted a roadmap for future work by conducting an
                        investigation into using Machine Learning for deployment
                        failure predictive analytics, utilising Logistic
                        Regression, ANNs and Bayesian Networks in Python.
                      </h5>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row className="justify-content-md-center">
                <Card
                  style={{
                    width: "60vw",
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
                        <Card.Text>
                          <h4 className="careerName">Electrum Payments</h4>
                          <h5>Software Developer Intern</h5>
                          <h5><Badge pill variant="danger">2019</Badge></h5>
                        </Card.Text>
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
                    <Card.Text>
                      <h5 className="recordText">
                        Developed a MVP for a new API Documentation website for
                        Electrum's open-source services, built with Gatsby, a
                        React-based framework.
                      </h5>
                    </Card.Text>
                    <Card.Text>
                      <h5 className="recordText">
                        Configured Docker files and continuous integration and
                        deployment with CircleCI.
                      </h5>
                    </Card.Text>
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
