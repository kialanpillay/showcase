import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
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
import Contact from "./Contact.js";
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(16px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "#52d869",
        opacity: 1,
        border: "none",
      },
    },
    "&$focusVisible $thumb": {
      color: "#52d869",
      border: "6px solid #fff",
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: false,
    };
    this.scroll = this.scroll.bind(this);
  }

  scroll = (prop) => {
    window.location.href = prop;
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: !this.state.mode });
  };

  render() {
    return (
      <div
        className="App"
        style={{
          color: this.state.mode ? "white" : "#282c34",
          backgroundColor: this.state.mode ? "#282c34" : "white",
        }}
      >
        <Navbar
          variant={this.state.mode ? "dark" : "light"}
          bg={this.state.mode ? "dark" : "light"}
        >
          <Navbar.Brand href="/">
            <p className="p--brand"> &#60;KIALAN/&#62;</p>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <FormControlLabel
                control={
                  <IOSSwitch
                    checked={this.state.mode}
                    onChange={this.handleChange}
                    name="mode"
                  />
                }
              />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div>
          <Container style={{ marginTop: "4rem" }}>
            <Row
              style={{
                alignItems: "left",
                backgroundColor: "transparent",
              }}
            >
              <Col md="auto">
                <h1 className="h1--title">Hi, I'm Kialan</h1>
                <h1 className="h1--subtitle">Welcome to my showcase.</h1>
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
              <Col md="auto" style={{ marginBottom: "2vh" }}>
                <Button
                  style={{ width: "10rem", height: "10rem" }}
                  variant={this.state.mode ? "primary" : "dark"}
                  onClick={() => this.scroll("#profile")}
                  className="btn--shadow"
                >
                  <h3 className="btn__text">PROFILE</h3>
                </Button>
              </Col>
              <Col md="auto" style={{ marginBottom: "2vh" }}>
                <Button
                  style={{ width: "10rem", height: "10rem" }}
                  variant={this.state.mode ? "warning" : "dark"}
                  onClick={() => this.scroll("#skills")}
                  className="btn--shadow"
                >
                  <h3 className="btn__text">SKILLS</h3>
                </Button>
              </Col>
              <Col md="auto" style={{ marginBottom: "2vh" }}>
                <Button
                  style={{ width: "10rem", height: "10rem" }}
                  variant={this.state.mode ? "danger" : "dark"}
                  onClick={() => this.scroll("#career")}
                  className="btn--shadow"
                >
                  <h3 className="btn__text">CAREER</h3>
                </Button>
              </Col>
              <Col md="auto" style={{ marginBottom: "2vh" }}>
                <Button
                  style={{ width: "10rem", height: "10rem" }}
                  variant={this.state.mode ? "success" : "dark"}
                  onClick={() => this.scroll("#project")}
                  className="btn--shadow"
                >
                  <h3 className="btn__text">PROJECTS</h3>
                </Button>
              </Col>
              <Col md="auto" style={{ marginBottom: "2vh" }}>
                <Button
                  style={{ width: "10rem", height: "10rem" }}
                  variant={this.state.mode ? "info" : "dark"}
                  onClick={() => this.scroll("#contact")}
                  className="btn--shadow"
                >
                  <h3 className="btn__text">CONTACT</h3>
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
            <Profile mode={this.state.mode} />
            <hr className="sep" />
            <Skills mode={this.state.mode} />
            <hr className="sep" />
            <Career mode={this.state.mode} />
            <hr className="sep" />
            <Projects mode={this.state.mode} />
            <hr className="sep" />
            <Contact mode={this.state.mode} />
          </Container>
        </div>
      </div>
    );
  }
}
