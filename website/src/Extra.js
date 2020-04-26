import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Form from "react-bootstrap/Form";

function Extra() {
  return (
    <div>
      <Row
        style={{
          width: "100%",
          marginTop: "6vw",
          marginBottom: "6vh",
        }}
      >
        <Col md="auto" xs="auto">
          <h1 className="sectionHeading" id="extra">
            EXTRA
          </h1>
        </Col>
      </Row>
      <Row>
        <Col md={7} xs={12} style={{
              marginBottom: "2vh",
            }}>
          <Card
            style={{
              width: "100%",
              height: "60vh",
              textAlign: "left",
              marginRight: "4vw",
              backgroundColor: "transparent",
            }}
            border="light"
          >
            <Card.Body>
              <h1 className="contactHeading">CONTACT</h1>
              <Form
                style={{
                  marginTop: "6vh",
                }}
                name="contact"
                method="POST"
                data-netlify="true"
              >
                <input type="hidden" name="form-name" value="contact" />
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter name" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridSurname">
                    <Form.Label>Surname</Form.Label>
                    <Form.Control type="text" name="surname" placeholder="Enter surname" />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" name="email"placeholder="Enter email" />
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control type="text" name="message" placeholder="Hi!" />
                </Form.Group>
                <Button variant="info" size="lg" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} xs={12}>
          <Card
            style={{ width: "100%", height: "45vh", textAlign: "left" }}
            bg="info"
          >
            <Card.Body>
              <Card.Title>Social Media</Card.Title>
              <Card.Text>
                <Row>
                  <Col>
                    <a
                      href="https://instagram.com/kialanpillay"
                      target="_blank"
                    >
                      <i
                        class="fa fa-instagram"
                        style={{ fontSize: "48px", color: "white" }}
                      ></i>
                    </a>
                  </Col>
                  <Col>
                    <h2>
                      <Badge variant="dark">@kialanpillay</Badge>
                    </h2>
                  </Col>
                </Row>
              </Card.Text>
              <Card.Text>
                <Row>
                  <Col>
                    <a
                      href="https://linkedin.com/in/kialan-p-a63779140/"
                      target="_blank"
                    >
                      <i
                        class="fa fa-linkedin"
                        style={{ fontSize: "48px", color: "white" }}
                      ></i>
                    </a>
                  </Col>
                  <Col>
                    <h2>
                      <Badge variant="dark">Kialan Pillay</Badge>
                    </h2>
                  </Col>
                </Row>
              </Card.Text>
              <Card.Text>
                <Row>
                  <Col>
                    <a
                      href="https://facebook.com/"
                      target="_blank"
                    >
                      <i
                        class="fa fa-facebook"
                        style={{ fontSize: "48px", color: "white" }}
                      ></i>
                    </a>
                  </Col>
                  <Col>
                    <h2>
                      <Badge variant="dark">Kialan Pillay</Badge>
                    </h2>
                  </Col>
                </Row>
              </Card.Text>
              <Card.Text>
                <Row>
                  <Col>
                    <a
                      href="https://flickr.com/photos/188051225@N03/"
                      target="_blank"
                    >
                      <i
                        class="fa fa-flickr"
                        style={{ fontSize: "48px", color: "white" }}
                      ></i>
                    </a>
                  </Col>
                  <Col>
                    <h2>
                      <Badge variant="dark">Kialan Pillay</Badge>
                    </h2>
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Extra;
