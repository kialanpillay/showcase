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
          <Container style={{ marginTop: "4rem", marginBottom: "4rem" }}>
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
                <Button
                  style={{ width: "10vw", height: "10vw" }}
                  variant="primary"
                >
                  <h3 className="buttonText">PROFILE</h3>
                </Button>
              </Col>
              <Col md="auto">
                <Button
                  style={{ width: "10vw", height: "10vw" }}
                  variant="warning"
                >
                  <h3 className="buttonText">SKILLS</h3>
                </Button>
              </Col>
              <Col md="auto">
                <Button
                  style={{ width: "10vw", height: "10vw" }}
                  variant="danger"
                >
                  <h3 className="buttonText">WORK</h3>
                </Button>
              </Col>
              <Col md="auto">
                <Button
                  style={{ width: "10vw", height: "10vw" }}
                  variant="success"
                >
                  <h3 className="buttonText">PROJECT</h3>
                </Button>
              </Col>
              <Col md="auto">
                <Button
                  style={{ width: "10vw", height: "10vw" }}
                  variant="secondary"
                >
                  <h3 className="buttonText">EXTRA</h3>
                </Button>
              </Col>
            </Row>
            <Row
              style={{
                width: "100%",
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
            <Row
              style={{
                width: "100%",
                marginTop: "6vh",
                marginBottom: "6vh",
              }}
            >
              <Col md="auto">
                <h1 className="headingText">PROFILE</h1>
              </Col>
            </Row>
            <Row>
              <Col md="auto">
                <Card style={{ width: "18rem" }} bg="dark">
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
