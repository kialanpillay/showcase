import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";
import midas from "./assets/midas.png";
import datascraper from "./assets/datascraper.png";
import brickset from "./assets/brickset.png";
import senti from "./assets/senti.png";
import tenshi from "./assets/tenshi.png";
import icemlab from "./assets/icemlab.png";
import skybox from "./assets/skybox.png";
import syndikit from "./assets/syndikit.png";
import compli from "./assets/compli.png";
import invest from "./assets/invest.png";
import crypto from "./assets/crypto.png";
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
            className="shadow"
            border={props.mode ? "light" : "secondary"}
          >
            <Card.Body>
              <Card.Title>
                <h3>C O D E</h3>
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
            className="shadow"
            border={props.mode ? "light" : "secondary"}
          >
            <Card.Body>
              <Card.Title>
                <h3>S A G A</h3>
              </Card.Title>
              <div>
                <h1 className="h1--numeric">4+</h1>
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
          <Table
            responsive
            style={{ color: props.mode ? "white" : "black", textAlign: "left" }}
          >
            <thead>
              <tr>
                <th>P R O J E C T</th>
                <th>D E S C R I P T I O N</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h3>CBIR</h3>
                </td>
                <td>Content Based Image Retrieval with Wavelet features</td>
                <td>

                </td>
              </tr>
              <tr>
                <td>
                  <h3>INVEST</h3>
                </td>
                <td>
                  An intelligent system for automated share evaluation and
                  portfolio management using graph neural networks and semantic
                  Bayesian networks.
                </td>
                <td>
                  <img
                    width="36"
                    src={invest}
                    alt="invest"
                    style={{
                      borderRadius: "20%",
                    }}
                  ></img>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>CryptoSystem</h3>
                </td>
                <td>
                  A PGP (Pretty Good Privacy)-based cryptosystem that combines
                  shared key, public-key encryption and certificates.
                </td>
                <td>
                  <img
                    width="36"
                    src={crypto}
                    alt="crypto"
                    style={{
                      borderRadius: "20%",
                    }}
                  ></img>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Compli</h3>
                </td>
                <td>
                  Compli is an employee health screening and management tool,
                  with a real-time metrics dashboard supercharged by AI.
                </td>
                <td>
                  <img
                    width="36"
                    src={compli}
                    alt="compli"
                    style={{
                      borderRadius: "20%",
                    }}
                  ></img>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Skybox</h3>
                </td>
                <td>
                  SKYBOX is an interactive web application that gives users the
                  chance to immerse themselves in the exploration of the space
                  beyond our atmosphere.
                </td>
                <td>
                  <img
                    width="36"
                    src={skybox}
                    alt="skybox"
                    style={{
                      borderRadius: "20%",
                    }}
                  ></img>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>iCEMlab</h3>
                </td>
                <td>
                  Virtual Chemistry Lab (iCEMlab) is a responsive web
                  application that allows students to conduct a virtual
                  experiment. <br /> Developed for the University of Cape Town
                  Department of Chemistry.
                </td>
                <td>
                  {" "}
                  <img
                    width="36"
                    src={icemlab}
                    alt="icemlab"
                    style={{
                      borderRadius: "20%",
                    }}
                  ></img>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Syndikit</h3>
                </td>
                <td>Simple Powerful Business Tooling.</td>
                <td>
                  {" "}
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
              </tr>
              <tr>
                <td>
                  <h3>Remote</h3>
                </td>
                <td>
                  Remote is a tool to boost your productivity whilst working
                  from home.{" "}
                  <i>
                    A hub for daily essential information. No searching. No
                    scrolling.
                  </i>
                </td>
                <td>
                  <Icon>games</Icon>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Midas</h3>
                </td>
                <td>
                  A Sentiment Analysis and Trend Prediction web application tool
                  for Gold prices.
                </td>
                <td>
                  <img
                    width="36"
                    src={midas}
                    alt="midas"
                    style={{
                      borderRadius: "20%",
                    }}
                  ></img>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Senti Playground</h3>
                </td>
                <td>A sentiment analysis playground powered by Senti API.</td>
                <td>
                  {" "}
                  <img
                    width="36"
                    src={senti}
                    alt="senti"
                    style={{
                      borderRadius: "20%",
                      filter: props.mode ? "invert(0%)" : "invert(100%)",
                    }}
                  ></img>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Senti API</h3>
                </td>
                <td>
                  A blazingly fast sentiment analysis Python API using NLTK.
                </td>
                <td>
                  {" "}
                  <img
                    width="36"
                    src={senti}
                    alt="senti"
                    style={{
                      borderRadius: "20%",
                      filter: props.mode ? "invert(0%)" : "invert(100%)",
                    }}
                  ></img>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Tenshi</h3>
                </td>
                <td>
                  A React Native application disguised as a calculator that
                  provides quick and covert access to emergency assitance for
                  potential victims of abuse.
                </td>
                <td>
                  <img
                    width="36"
                    src={tenshi}
                    alt="tenshi"
                    style={{
                      borderRadius: "20%",
                    }}
                  ></img>
                </td>
              </tr>
              <tr></tr>
              <tr>
                <td>
                  <h3>Brickset Go</h3>
                </td>
                <td>
                  A React Native IOS application that provides a mobile
                  experience for the popular Lego-related website, brickset.com
                </td>
                <td>
                  {" "}
                  <img
                    width="36"
                    src={brickset}
                    alt="brickset"
                    style={{
                      borderRadius: "20%",
                    }}
                  ></img>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>DataScaper</h3>
                </td>
                <td>
                  A web-scraping and parsing tool to retrieve and generate SA
                  COVID-19 statistics.
                </td>
                <td>
                  <img
                    width="36"
                    src={datascraper}
                    alt="datascraper"
                    style={{
                      borderRadius: "20%",
                    }}
                  ></img>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Résumé</h3>
                </td>
                <td>
                  A personal static site that houses my digital desconstructed
                  resume.
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <h3>NRG</h3>
                </td>
                <td>
                  Title:{" "}
                  <i>
                    Investigating the Generation of Consumer Energy Consumption
                    Patterns in South Africa using Density-based Clustering
                  </i>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <h3>FileShare</h3>
                </td>
                <td>
                  A terminal application to securely share files between a
                  client and server.
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <h3>APFKZN</h3>
                </td>
                <td>
                  A website for the Association des Professeurs de Français of
                  KwaZulu Natal, providing information and resources for the
                  client organisation's members.
                </td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
}

export default Projects;
