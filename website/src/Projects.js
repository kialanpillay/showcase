import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";
import brickset from "./assets/brickset.png";
import senti from "./assets/senti.png";
import tenshi from "./assets/tenshi.png";
import resume from "./assets/resume.png";

function Projects() {
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
          <h1 className="sectionHeading" id="project">
            PROJECTS
          </h1>
        </Col>
      </Row>
      <Row>
        <Col
          md={2}
          xs={12}
          style={{
            marginBottom: "2vh",
          }}
        >
          <Card
            style={{
              width: "100%",
              height: "8rem",
              textAlign: "left",
              backgroundColor: "transparent",
            }}
            border="light"
          >
            <Card.Body>
              <Card.Title>
                <h4>C O D E</h4>
              </Card.Title>
              <div>
                <a
                  href="https://github.com/kialanpillay"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fa fa-github"
                    style={{
                      fontSize: "44px",
                      color: "white",
                      marginBottom: "6px",
                    }}
                  ></i>
                </a>
              </div>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "100%",
              marginTop: "4vw",
              height: "30rem",
              textAlign: "left",
              backgroundColor: "transparent",
            }}
            border="light"
          >
            <Card.Body>
              <Card.Title>
                <h4>S A G A</h4>
              </Card.Title>
              <div>
                <h1 className="numeric">7</h1>
                <h2>
                  <Badge pill variant="light">
                    2020
                  </Badge>
                </h2>
                <h1 className="numeric">3</h1>
                <h2>
                  <Badge pill variant="light">
                    2019
                  </Badge>
                </h2>
                <h1 className="numeric">1</h1>
                <h2>
                  <Badge pill variant="light">
                    2016
                  </Badge>
                </h2>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={10} xs={12}>
          <Table responsive style={{ color: "white" }}>
            <thead style={{ fontSize: "1vh" }}>
              <tr>
                <th>P R O J E C T</th>
                <th>S T A C K</th>
                <th>D E S C R I P T I O N</th>
                <th>S T A T U S</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h3>Midas </h3>
                  <h2>
                    <Badge pill variant="light">
                      Μίδας
                    </Badge>
                  </h2>
                </td>
                <td>
                  ReactJS <br /> Python <br />
                  Flask <br /> DynamoDB{" "}
                </td>
                <td>
                  A Sentiment Analysis and Trend Prediction web application tool
                  for Gold prices.
                </td>
                <td>
                  <Badge variant="primary">In Development</Badge>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Senti Playground</h3>
                  <img
                    width="32"
                    src={senti}
                    alt="senti"
                    style={{ borderRadius: "20%" }}
                  ></img>
                </td>
                <td>
                  ReactJS <br /> AWS Amplify
                </td>
                <td>A sentiment analysis playground.</td>
                <td>
                  <Badge variant="success">In Production</Badge>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Senti API</h3>
                  <img
                    width="32"
                    src={senti}
                    alt="senti"
                    style={{ borderRadius: "20%" }}
                  ></img>
                </td>
                <td>
                  Python <br />
                  Flask
                  <br /> DynamoDB
                </td>
                <td>
                  A blazingly fast sentiment analysis Python API using NLTK.
                </td>
                <td>
                  <Badge variant="success">In Production</Badge>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Tenshi Calculator</h3>
                  <img
                    width="32"
                    src={tenshi}
                    alt="tenshi"
                    style={{ borderRadius: "20%" }}
                  ></img>
                </td>
                <td>
                  React Native <br /> JavaScript
                </td>
                <td>
                  A React Native application disguised as a calculator that
                  provides quick and covert access to emergency assitance for
                  potential victims of abuse.
                </td>
                <td>
                  <Badge variant="warning">In QA</Badge>
                </td>
              </tr>
              <tr></tr>
              <tr>
                <td>
                  <h3>Brickset Go</h3>
                  <img
                    width="36"
                    src={brickset}
                    alt="brickset"
                    style={{ borderRadius: "20%" }}
                  ></img>
                </td>
                <td>
                  React Native <br /> JavaScript
                </td>
                <td>
                  A React Native IOS application that provides a mobile
                  experience for the popular Lego-related website, brickset.com
                </td>
                <td>
                  <Badge variant="warning">In QA</Badge>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Academic Portfolio</h3>
                  <h2>
                    <Badge style={{ width: "26%" }} variant="warning">
                      M
                    </Badge>
                  </h2>
                </td>
                <td>
                  ReactJS <br /> JavaScript <br /> HTML <br /> CSS
                </td>
                <td>
                  A website that showcases the academic career, publications and
                  projects of the client.
                </td>
                <td>
                  <Badge variant="success">In Production</Badge>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>DataScaper</h3>
                  <h2>
                    <Badge style={{ width: "26%" }} variant="danger">
                      D
                    </Badge>
                  </h2>
                </td>
                <td>Java</td>
                <td>
                  A web-scraping and parsing tool to retrieve and generate SA
                  COVID-19 statistics.
                </td>
                <td>
                  <Badge variant="danger">Deprecated</Badge>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Résumé</h3>
                  <img
                    width="36"
                    src={resume}
                    alt="resume"
                    style={{ borderRadius: "10%" }}
                  ></img>
                </td>
                <td>
                  Gatsby <br /> JavaScript <br /> HTML <br /> CSS{" "}
                </td>
                <td>
                  A personal static site that houses my digital desconstructed
                  resume.
                </td>
                <td>
                  <Badge variant="success">In Production</Badge>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Research Paper</h3>
                </td>
                <td>Python</td>
                <td>
                  Title:{" "}
                  <i>
                    Investigating the Generation of Consumer Energy Consumption
                    Patterns in South Africa using Density-based Clustering
                  </i>
                </td>
                <td>
                  <Badge variant="success">In Production</Badge>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>FileShare</h3>
                  <h2>
                    <Badge style={{ width: "26%" }} variant="info">
                      F
                    </Badge>
                  </h2>
                </td>
                <td>Java</td>
                <td>
                  A Command Line Interface application to securely share files
                  between a client and server.
                </td>
                <td>
                  <Badge variant="success">In Production</Badge>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>APFKZN</h3>
                  <h2>
                    <Badge style={{ width: "26%" }} variant="secondary">
                      A
                    </Badge>
                  </h2>
                </td>
                <td>
                  HTML <br /> CSS <br /> WordPress
                </td>
                <td>
                  A website for the Association des Professeurs de Français of
                  KwaZulu Natal, providing information and resources for the
                  client organisation's members.
                </td>
                <td>
                  <Badge variant="success">In Production</Badge>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
}

export default Projects;
