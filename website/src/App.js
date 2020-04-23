import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./App.css";
import Image from "./Image.js"

export default class App extends React.Component {
  constructor(props) {
    super(props);
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
          <Container style={{ marginTop: "4rem" }}>
            <Row
              style={{
                width: "100%",
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
                width: "100%",
                marginTop: "10vh",
              }}
            >
              <Col md="auto">
                <Button style={{ width: "13vw"}} variant="primary" size="lg">
                  <h3 className="buttonText">Intro</h3>
                </Button>
              </Col>
              <Col md="auto">
                <h1 className="arrow">&#8594;</h1>
              </Col>
              <Col md="auto">
                <Button style={{ width: "13vw" }} variant="warning" size="lg">
                <h3 className="buttonText">XP</h3>
                </Button>
              </Col>
              <Col md="auto">
                <h1 className="arrow">&#8594;</h1>
              </Col>
              <Col md="auto">
                <Button style={{ width: "13vw"}} variant="danger" size="lg">
                <h3 className="buttonText">Projects</h3>
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
