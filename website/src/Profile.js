import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
function Profile() {
  return (
    <div>
      <Row
        style={{
          width: "100%",
          marginTop: "6vh",
          marginBottom: "2vh",
        }}
      >
        <Col md="auto">
          <h1 className="headingText" id="profile">PROFILE</h1>
        </Col>
      </Row>
      <Row>
        <Col md="auto">
          <Card
            style={{
              width: "28vw",
              height: "24vw",
              textAlign: "left",
              marginRight: "4vw",
              backgroundColor: "transparent",
            }}
            border="light"
          >
            <Card.Body>
              <Card.Title>Data File</Card.Title>
              <Card.Text>
                <h1>Kialan Pillay</h1>
              </Card.Text>
              <Card.Text>
                <h1>5 March 2001 (19)</h1>
              </Card.Text>
              <Card.Text>
                <h1>Durban, South Africa</h1>
              </Card.Text>
              <Card.Text>
                <h1>3<sup>rd</sup> Year Student</h1>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="auto">
          <Card
            style={{ width: "20vw", height: "20vw", textAlign: "left" }}
            bg="primary"
          >
            <Card.Body>
              <Card.Title>University of Cape Town</Card.Title>

              <Card.Text>
                <h3>Computer Science &amp; Statistics</h3>
              </Card.Text>
              <Card.Text>
                <h1>GPA: 85</h1>
              </Card.Text>
              <Button variant="dark" size="lg" style={{marginTop: "0vw" }}>
                Transcript
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md="auto">
          <Card
            style={{ width: "20vw", height: "20vw", textAlign: "left" }}
            bg="primary"
          >
            <Card.Body>
              <Card.Title>Summary of Excellence</Card.Title>
              <Card.Text>
                <h2>10 Awards &amp; Honours</h2>
              </Card.Text>
              <Card.Text>
                <h2>4 Scholarships</h2>
              </Card.Text>
              <Button variant="dark" size="lg" style={{marginTop: "0vw" }} href="https://kialan.co.za">
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
