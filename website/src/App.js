import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./App.css";
import Image from "./Image.js";
import Profile from "./Profile.js";
import Skills from "./Skills.js";
import Career from "./Career.js";
import Projects from "./Projects.js";
import Extra from "./Extra.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.scroll = this.scroll.bind(this);
  }

  scroll = (prop) => {
    window.location.href = prop;
  }

  render() {
    return (
      <div className="App">
        <Navbar id="nav" variant="dark" bg="dark">
          <Navbar.Brand href="/">
            <p id="logo"> &#60;KIALAN/&#62;</p>
          </Navbar.Brand>
        </Navbar>
        <div className="body">
          <Container style={{ marginTop: "4rem", marginBottom: "4rem" }}>
            <Row
              style={{
                color: "white",
                alignItems: "left",
                backgroundColor: "transparent",
              }}
            >
              <Col md="auto">
                <h1 class="title">Hi, I'm Kialan</h1>
                <h1 class="subtitle">Welcome to my showcase.</h1>
              </Col>
              <Col md="auto">
                <div className="vl"></div>
              </Col>
              <Col md="auto">
                <Image />
              </Col>
            </Row>
            <Row
              style={{
                marginTop: "10vh",
              }}
            >
              <Col md="auto">
                <Button
                  style={{ width: "10vw", height: "10vw" }}
                  variant="primary"
                  onClick={() => this.scroll("#profile")}
                >
                  <h3 className="buttonText">PROFILE</h3>
                </Button>
              </Col>
              <Col md="auto">
                <Button
                  style={{ width: "10vw", height: "10vw" }}
                  variant="warning"
                  onClick={() => this.scroll("#skills")}
                >
                  <h3 className="buttonText">SKILLS</h3>
                </Button>
              </Col>
              <Col md="auto">
                <Button
                  style={{ width: "10vw", height: "10vw" }}
                  variant="danger"
                  onClick={() => this.scroll("#career")}
                >
                  <h3 className="buttonText">CAREER</h3>
                </Button>
              </Col>
              <Col md="auto">
                <Button
                  style={{ width: "10vw", height: "10vw" }}
                  variant="success"
                  onClick={() => this.scroll("#project")}
                >
                  <h3 className="buttonText">PROJECT</h3>
                </Button>
              </Col>
              <Col md="auto">
                <Button
                  style={{ width: "10vw", height: "10vw" }}
                  variant="info"
                  onClick={() => this.scroll("#extra")}
                >
                  <h3 className="buttonText">EXTRA</h3>
                </Button>
              </Col>
            </Row>
            <Row
              style={{
                marginTop: "4vh",
              }}
            >
              <Col>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p> Do or do not. There is no try. </p>
                    <footer className="blockquote-footer">
                      Jedi Master Yoda{" "}
                    </footer>
                  </blockquote>
                </Card.Body>
              </Col>
            </Row>
            <Profile />
            <hr className="sep"/>
            <Skills />
            <hr className="sep"/>
            <Career />
            <hr className="sep"/>
            <Projects />
            <hr className="sep"/>
            <Extra />
          </Container>
        </div>
      </div>
    );
  }
}
