import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Contact(props) {
  return (
    <div>
      <Row
        style={{
          marginTop: "6vw",
          marginBottom: "2vh",
        }}
      >
        <Col>
          <h1 className="h1--section" id="contact">
            CONTACT
          </h1>
        </Col>
      </Row>
      <Row>
        <Col
          md={7}
          xs={12}
          style={{
            marginBottom: "2vh",
            marginRight: "12vh",
          }}
        >
          <Card
            style={{
              width: "100%",
              height: "26rem",
              textAlign: "left",
              marginRight: "4vw",
              marginBottom: "4vw",
              backgroundColor: "transparent",
            }}
            className="shadow"
            border={props.mode ? "light" : "secondary"}
          >
            <Card.Body>
              <h1 className="h1--contact">FORM</h1>
              <Form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter name"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridSurname">
                    <Form.Label>Surname</Form.Label>
                    <Form.Control
                      type="text"
                      name="surname"
                      placeholder="Enter surname"
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      name="email"
                      placeholder="Enter email"
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control type="text" name="message" placeholder="Hi!" />
                </Form.Group>
                <Button
                  variant={props.mode ? "light" : "dark"}
                  size="lg"
                  type="submit"
                >
                  S U B M I T
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} xs={12}>
          <Card
            style={{
              width: "100%",
              height: "16rem",
              marginBottom: "2rem",
              textAlign: "left",
              backgroundColor: "transparent",
            }}
            className="shadow"
            border={props.mode ? "light" : "secondary"}
          >
            <Card.Body>
              <Card.Title><h3>S O C I A L S</h3></Card.Title>
              <Card.Text>
                <a
                  href="https://instagram.com/kialanpillay"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i
                    className="fa fa-instagram"
                    style={{
                      fontSize: "48px",
                      color: props.mode ? "white" : "black",
                    }}
                  ></i>
                </a>
              </Card.Text>
              <Card.Text>
                <a
                  href="https://linkedin.com/in/kialan-p-a63779140/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i
                    className="fa fa-linkedin"
                    style={{
                      fontSize: "48px",
                      color: props.mode ? "white" : "black",
                    }}
                  ></i>
                </a>
              </Card.Text>
              <Card.Text>
                <a
                  href="https://facebook.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i
                    className="fa fa-facebook"
                    style={{
                      fontSize: "48px",
                      color: props.mode ? "white" : "black",
                    }}
                  ></i>
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
