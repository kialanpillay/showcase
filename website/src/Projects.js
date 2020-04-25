import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";

function Projects() {
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
          <h1 className="sectionHeading" id="project">
            PROJECTS
          </h1>
        </Col>
      </Row>
      <Row>
        <Col md="auto">
          <Card
            style={{
              width: "10vw",
              height: "20vw",
              textAlign: "left",
              backgroundColor: "transparent",
            }}
            bg="success"
          >
            <Card.Body>
              <Card.Title>Repository</Card.Title>
              <Card.Text>
                <a href="https://github.com/kialanpillay" target="_blank">
                  <i
                    class="fa fa-github"
                    style={{ fontSize: "48px", color: "white" }}
                  ></i>
                </a>
              </Card.Text>
              <Card.Text>
                <h3>
                  <Badge variant="dark">GitHub</Badge>
                </h3>
              </Card.Text>
              <Card.Text>
                <a
                  href="https://https://www.linkedin.com/in/kialan-p-a63779140/"
                  target="_blank"
                >
                  <i
                    class="fa fa-linkedin"
                    style={{ fontSize: "48px", color: "white" }}
                  ></i>
                </a>
              </Card.Text>
              <Card.Text>
                <h3>
                  <Badge variant="dark">LinkedIn</Badge>
                </h3>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Table striped bordered style={{ color: "white" }}>
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
                  <h3>Midas</h3>
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
                  <h3>MLBeat</h3>
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
                  <h3>IBrickset</h3>
                </td>
                <td>
                  React Native <br /> Javascript
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
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
}

export default Projects;
