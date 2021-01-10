import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";
import brickset from "./assets/brickset.png";
import senti from "./assets/senti.png";
import tenshi from "./assets/tenshi.png";
import resume from "./assets/resume.png";
import icemlab from "./assets/icemlab.png";
import skybox from "./assets/skybox.png";
import syndikit from "./assets/syndikit.png";
import compli from "./assets/compli.png";
import Icon from "@material-ui/core/Icon";

function Projects(props) {
  return (
    <div>
      <Row
        style={{
          marginTop: "6vw",
          marginBottom: "2vh",
        }}
      >
        <Col>
          <h1 className="h1--section" id="project">
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
            border={props.mode ? "light" : "dark"}
          >
            <Card.Body>
              <Card.Title>C O D E</Card.Title>
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
                      color: props.mode ? "white" : "black",
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
              textAlign: "left",
              backgroundColor: "transparent",
            }}
            border={props.mode ? "light" : "dark"}
          >
            <Card.Body>
              <Card.Title>S A G A</Card.Title>
              <div>
                <h1 className="h1--numeric">1+</h1>
                <h2>
                  <Badge pill variant="light">
                    2021
                  </Badge>
                </h2>
                <h1 className="h1--numeric">12</h1>
                <h2>
                  <Badge pill variant="light">
                    2020
                  </Badge>
                </h2>
                <h1 className="h1--numeric">4</h1>
                <h2>
                  <Badge pill variant="light">
                    2019
                  </Badge>
                </h2>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={10} xs={12}>
          <Table responsive style={{ color: props.mode ? "white" : "black" }}>
            <thead>
              <tr>
                <th>P R O J E C T</th>
                <th>D E S C R I P T I O N</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h3>Compli</h3>
                  <img
                    width="36"
                    src={compli}
                    alt="compli"
                    style={{
                      borderRadius: "20%",
                      filter: props.mode ? "grayscale(0%)" : "grayscale(100%)",
                    }}
                  ></img>
                </td>
                <td>
                  Compli is an employee health screening and management tool,
                  with a real-time metrics dashboard supercharged by AI.
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Skybox</h3>
                  <img
                    width="36"
                    src={skybox}
                    alt="skybox"
                    style={{
                      borderRadius: "20%",
                      filter: props.mode ? "grayscale(0%)" : "grayscale(100%)",
                    }}
                  ></img>
                </td>
                <td>
                  SKYBOX is an interactive web application that gives users the
                  chance to immerse themselves in the exploration of the space
                  beyond our atmosphere.
                </td>
              </tr>
              <tr>
                <td>
                  <h3>iCEMlab</h3>
                  <img
                    width="36"
                    src={icemlab}
                    alt="icemlab"
                    style={{
                      borderRadius: "20%",
                      filter: props.mode ? "grayscale(0%)" : "grayscale(100%)",
                    }}
                  ></img>
                </td>
                <td>
                  Virtual Chemistry Lab (iCEMlab) is a responsive web
                  application that allows students to conduct a virtual
                  experiment. <br /> Developed for the University of Cape Town
                  Department of Chemistry.
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Syndikit</h3>
                  <img
                    width="30"
                    src={syndikit}
                    alt="syndikit"
                    style={{
                      borderRadius: "20%",
                      filter: props.mode ? "invert(0%)" : "invert(100%)",
                    }}
                  ></img>
                </td>
                <td>Simple Powerful Business Tooling.</td>
              </tr>
              <tr>
                <td>
                  <h3>Remote</h3>
                  <Icon>games</Icon>
                </td>
                <td>
                  Remote is a tool to boost your productivity whilst working
                  from home.{" "}
                  <i>
                    A hub for daily essential information. No searching. No
                    scrolling.
                  </i>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Midas </h3>
                  <h2>
                    <Badge pill variant={props.mode ? "light" : "dark"}>
                      Μίδας
                    </Badge>
                  </h2>
                </td>
                <td>
                  A Sentiment Analysis and Trend Prediction web application tool
                  for Gold prices.
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Senti Playground</h3>
                  <img
                    width="32"
                    src={senti}
                    alt="senti"
                    style={{
                      borderRadius: "20%",
                      filter: props.mode ? "invert(0%)" : "invert(100%)",
                    }}
                  ></img>
                </td>
                <td>A sentiment analysis playground powered by Senti API.</td>
              </tr>
              <tr>
                <td>
                  <h3>Senti API</h3>
                  <img
                    width="32"
                    src={senti}
                    alt="senti"
                    style={{
                      borderRadius: "20%",
                      filter: props.mode ? "invert(0%)" : "invert(100%)",
                    }}
                  ></img>
                </td>
                <td>
                  A blazingly fast sentiment analysis Python API using NLTK.
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Tenshi Calculator</h3>
                  <img
                    width="32"
                    src={tenshi}
                    alt="tenshi"
                    style={{
                      borderRadius: "20%",
                      filter: props.mode ? "grayscale(0%)" : "grayscale(100%)",
                    }}
                  ></img>
                </td>
                <td>
                  A React Native application disguised as a calculator that
                  provides quick and covert access to emergency assitance for
                  potential victims of abuse.
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
                    style={{
                      borderRadius: "20%",
                      filter: props.mode ? "grayscale(0%)" : "grayscale(100%)",
                    }}
                  ></img>
                </td>
                <td>
                  A React Native IOS application that provides a mobile
                  experience for the popular Lego-related website, brickset.com
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Academic Portfolio</h3>
                  <h2>
                    <Badge
                      style={{ width: "30%" }}
                      variant={props.mode ? "warning" : "dark"}
                    >
                      M
                    </Badge>
                  </h2>
                </td>
                <td>
                  A website that showcases the academic career, publications and
                  projects of the client.
                </td>
              </tr>
              <tr>
                <td>
                  <h3>DataScaper</h3>
                  <h2>
                    <Badge
                      style={{ width: "30%" }}
                      variant={props.mode ? "danger" : "dark"}
                    >
                      D
                    </Badge>
                  </h2>
                </td>
                <td>
                  A web-scraping and parsing tool to retrieve and generate SA
                  COVID-19 statistics.
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Résumé</h3>
                  <img
                    width="36"
                    src={resume}
                    alt="resume"
                    style={{
                      borderRadius: "10%",
                      filter: props.mode ? "grayscale(0%)" : "grayscale(100%)",
                    }}
                  ></img>
                </td>
                <td>
                  A personal static site that houses my digital desconstructed
                  resume.
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Research Paper</h3>
                </td>
                <td>
                  Title:{" "}
                  <i>
                    Investigating the Generation of Consumer Energy Consumption
                    Patterns in South Africa using Density-based Clustering
                  </i>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>FileShare</h3>
                  <h2>
                    <Badge
                      style={{ width: "30%" }}
                      variant={props.mode ? "info" : "dark"}
                    >
                      F
                    </Badge>
                  </h2>
                </td>
                <td>
                  A Command Line Interface application to securely share files
                  between a client and server.
                </td>
              </tr>
              <tr>
                <td>
                  <h3>APFKZN</h3>
                  <h2>
                    <Badge
                      style={{ width: "30%" }}
                      variant={props.mode ? "secondary" : "dark"}
                    >
                      A
                    </Badge>
                  </h2>
                </td>
                <td>
                  A website for the Association des Professeurs de Français of
                  KwaZulu Natal, providing information and resources for the
                  client organisation's members.
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
