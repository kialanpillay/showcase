import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
function Profile() {
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
          <h1 className="sectionHeading" id="profile">
            PROFILE
          </h1>
        </Col>
      </Row>
      <Row>
        <Col md={5} xs={12} style={{ marginBottom: "2vh", marginRight: "4vw" }}>
          <Card
            style={{
              width: "100%",
              height: "44vh",
              textAlign: "left",
              backgroundColor: "transparent",
            }}
            border="light"
          >
            <Card.Body>
              <Card.Title>Data File</Card.Title>
              <div>
                <h1>Kialan Pillay</h1>
              </div>
              <div>
                <h1>
                  5 March 2001{" "}
                  <Badge pill variant="primary">
                    19
                  </Badge>{" "}
                </h1>
              </div>
              <div>
                <h1>Durban, South Africa</h1>
              </div>
              <div>
                <h1>Final Year Student</h1>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} xs={12} style={{ marginBottom: "2vh" }}>
          <Card
            style={{ width: "100%", height: "36vh", textAlign: "left" }}
            bg="primary"
          >
            <Card.Body>
              <Card.Title>University of Cape Town</Card.Title>
              <div>
                <h3>Bachelor of Science</h3>
              </div>
              <div>
                <h3>Computer Science &amp; Statistics</h3>
              </div>
              <div>
                <h1>
                  GPA:{" "}
                  <Badge pill variant="dark">
                    84.42
                  </Badge>
                </h1>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} xs={12} style={{ marginBottom: "2vh" }}>
          <Card
            style={{ width: "100%", height: "36vh", textAlign: "left" }}
            bg="primary"
          >
            <Card.Body>
              <Card.Title>Summary of Excellence</Card.Title>
              <div>
                <h2>10 Awards &amp; Honours</h2>
              </div>
              <div>
                <h2>4 Scholarships</h2>
              </div>
              <Button
                variant="dark"
                size="md"
                style={{ marginTop: "0vw" }}
                href="https://kialan.co.za"
              >
                View More
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
    </div>
  );
}

export default Profile;
