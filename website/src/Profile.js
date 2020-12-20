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
          marginTop: "6vw",
          marginBottom: "2vh",
        }}
      >
        <Col>
          <h1 className="h1--section" id="profile">
            PROFILE
          </h1>
        </Col>
      </Row>
      <Row>
        <Col md={5} xs={12} style={{ marginBottom: "2vh", marginRight: "3vw" }}>
          <Card
            style={{
              width: "100%",
              height: "100%",
              textAlign: "left",
              backgroundColor: "transparent",
            }}
            border="light"
          >
            <Card.Body>
              <Card.Title>B I O</Card.Title>
              <div>
                <h1>Kialan Pillay</h1>
              </div>
              <div>
                <h1>
                  <Badge pill variant="light">
                    5 March 2001
                  </Badge>{" "}
                </h1>
              </div>
              <div>
                <h1>Durban | Cape Town</h1>
              </div>
              <div>
                <h1>Software Engineer</h1>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} xs={12} style={{ marginBottom: "2vh" }}>
          <Card
            style={{
              width: "100%",
              height: "100%",
              textAlign: "left",
              backgroundColor: "transparent",
            }}
            border="light"
          >
            <Card.Body>
              <Card.Title>A C A D E M I C S</Card.Title>
              <div>
                <h3>University of Cape Town</h3>
              </div>
              <div>
                <h1>BSc</h1>
              </div>
              <div>
                <h3>Computer Science &amp; Statistics</h3>
              </div>
              <div>
                <h1>
                  <Badge pill variant="light">
                    86.5 GPA
                  </Badge>
                </h1>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} xs={12} style={{ marginBottom: "2vh" }}>
          <Card
            style={{
              width: "100%",
              height: "100%",
              textAlign: "left",
              backgroundColor: "transparent",
            }}
            border="light"
          >
            <Card.Body>
              <Card.Title>E X C E L L E N C E</Card.Title>
              <div>
                <h2>16 Awards &amp; Honours</h2>
              </div>
              <div>
                <h2>6 Scholarships</h2>
              </div>
              <Button
                variant="dark"
                size="lg"
                style={{ marginTop: "4vw" }}
                href="https://kialan.co.za"
              >
                View More
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Profile;
