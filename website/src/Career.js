import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Badge from "react-bootstrap/Badge";

function Career(props) {
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
        <Col md={12} xs={12}>
          <Carousel
            style={{
              marginTop: "2vw",
              width: "100%",
              height: "28rem",
            }}
          >
            <Carousel.Item>
              <Row className="justify-content-md-center">
                <Card
                  style={{
                    width: "75%",
                    height: "24rem",
                    textAlign: "left",
                    backgroundColor: "transparent",
                    overflowY: "scroll",
                  }}
                  className="shadow"
                  border={props.mode ? "light" : "secondary"}
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
                            style={{ color: props.mode ? "white" : "#282c34" }}
                          >
                            <h1>DUCAT</h1>
                          </a>
                          <h4>Software Developer</h4>
                          <h4>
                            <Badge pill variant={props.mode ? "light" : "dark"}>
                              2021 - Present
                            </Badge>
                          </h4>
                        </div>
                      </Col>
                    </Row>
                    <div
                      style={{
                        marginTop: "1rem",
                      }}
                    >
                      <p className="p--career">
                      Develop and test functionality for proprietary automated trading systems.
                      </p>
                    </div>
                    <div>
                      <p className="p--career">
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
                    height: "24rem",
                    textAlign: "left",
                    backgroundColor: "transparent",
                    overflowY: "scroll",
                  }}
                  className="shadow"
                  border={props.mode ? "light" : "secondary"}
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
                            style={{ color: props.mode ? "white" : "#282c34" }}
                          >
                            <h1>Amazon Web Services</h1>
                          </a>
                          <h4>Software Development Engineer Intern</h4>
                          <h4>
                            <Badge pill variant={props.mode ? "light" : "dark"}>
                              2020 - 2021
                            </Badge>
                          </h4>
                        </div>
                      </Col>
                    </Row>
                    <div
                      style={{
                        marginTop: "1rem",
                      }}
                    >
                      <p className="p--career">
                        Reduced the signal-to-noise ratio for Managed
                        Deployments customers by designing and implementing an
                        asynchronous notification system for the deployment of
                        commits. TypeScript and ReactJS were used for the
                        solution front-end, a Kotlin service, an RDS repository for
                        persistence, and Golang and AWS StepFunctions for the
                        workflows that handle the processing and vending of
                        notifications.
                      </p>
                    </div>
                    <div>
                      <p className="p--career">
                        This feature allows customers to subscribe to
                        notifications for their commits, and receive
                        asynchronous messages on the channel of their choice for
                        deployment-related events.
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
                    height: "24rem",
                    textAlign: "left",
                    backgroundColor: "transparent",
                    overflowY: "scroll",
                  }}
                  className="shadow"
                  border={props.mode ? "light" : "secondary"}
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
                            style={{ color: props.mode ? "white" : "#282c34" }}
                          >
                            <h1>Amazon Web Services</h1>
                          </a>
                          <h4>Software Development Engineer Intern</h4>
                          <h4>
                            <Badge pill variant={props.mode ? "light" : "dark"}>
                              2019 - 2020
                            </Badge>
                          </h4>
                        </div>
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
                        linking and tracking system. TypeScript and ReactJS was
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
                    height: "24rem",
                    textAlign: "left",
                    backgroundColor: "transparent",
                    overflowY: "scroll",
                  }}
                  className="shadow"
                  border={props.mode ? "light" : "secondary"}
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
                            style={{ color: props.mode ? "white" : "#282c34" }}
                          >
                            <h1>Electrum Payments</h1>
                          </a>
                          <h4>Software Developer Intern</h4>
                          <h4>
                            <Badge pill variant={props.mode ? "light" : "dark"}>
                              2019
                            </Badge>
                          </h4>
                        </div>
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
                    height: "24rem",
                    textAlign: "left",
                    backgroundColor: "transparent",
                    overflowY: "scroll",
                  }}
                  className="shadow"
                  border={props.mode ? "light" : "secondary"}
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
                            style={{ color: props.mode ? "white" : "#282c34" }}
                          >
                            <h1>Nomanini</h1>
                          </a>
                          <h4>Software Developer Intern</h4>
                          <h4>
                            <Badge pill variant={props.mode ? "light" : "dark"}>
                              2020
                            </Badge>
                          </h4>
                        </div>
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
