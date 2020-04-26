import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";
import brickset from "./assets/brickset.png";
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
              height: "10rem",
              textAlign: "left",
              backgroundColor: "transparent",
            }}
            border="success"
          >
            <Card.Body>
              <Card.Title>
                <h4>Code</h4>
              </Card.Title>
              <div>
                <a
                  href="https://github.com/kialanpillay"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fa fa-github"
                    style={{ fontSize: "44px", color: "white" }}
                  ></i>
                </a>
              </div>
              <div>
                <h3>
                  <Badge variant="success">GitHub</Badge>
                </h3>
              </div>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "100%",
              marginTop: "4vw",
              height: "30rem",
              textAlign: "left",
            }}
            bg="success"
          >
            <Card.Body>
              <Card.Title>
                <h4>History</h4>
              </Card.Title>
              <div>
                <h1 className="projectNumeric">6</h1>
                <h2>
                  <Badge pill variant="dark">
                    2020
                  </Badge>
                </h2>
                <h1 className="projectNumeric">3</h1>
                <h2>
                  <Badge pill variant="dark">
                    2019
                  </Badge>
                </h2>
                <h1 className="projectNumeric">1</h1>
                <h2>
                  <Badge pill variant="dark">
                    2016
                  </Badge>
                </h2>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={10} xs={12}>
          <Table responsive striped bordered style={{ color: "white" }}>
            <thead style={{ fontSize: "1.6vw" }}>
              <tr>
                <th>Project</th>
                <th>Stack</th>
                <th>Description</th>
                <th>Status</th>
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
                  Flask <br /> AWS{" "}
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
                  <h3>ML.Beat</h3>
                  <h2>
                    <Badge style={{ width: "26%" }} variant="dark">
                      B
                    </Badge>
                  </h2>
                </td>
                <td>
                  ReactJS <br /> Python <br />
                  Flask <br /> AWS{" "}
                </td>
                <td>
                  A Hip-hop beat generation application using Recurrent Neutral
                  Networks.
                </td>
                <td>
                  <Badge variant="primary">In Development</Badge>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>iBrickset</h3>
                  <img
                    width="40"
                    src={brickset}
                    alt="brickset"
                    style={{ borderRadius: "98%" }}
                  ></img>
                </td>
                <td>
                  React Native <br /> Javascript <br /> CSS
                </td>
                <td>
                  A React Native IOS application that provides a mobile
                  experience for the popular Lego-related website,
                  www.brickset.com
                </td>
                <td>
                  <Badge variant="primary">In Development</Badge>
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
                  ReactJS <br /> Javascript <br /> HTML <br /> CSS
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
                    width="40"
                    src={resume}
                    alt="resume"
                    style={{ borderRadius: "98%" }}
                  ></img>
                </td>
                <td>
                  Gatsby <br /> Javascript <br /> HTML <br /> CSS{" "}
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
                  <Badge variant="warning">Not Supported</Badge>
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
