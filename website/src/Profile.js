import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Moment from "react-moment";
function Profile(props) {
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
        <Col md={5} sm={12} xs={12} style={{ marginBottom: "2vh", marginRight: "3vw" }}>
          <Card
            style={{
              width: "100%",
              height: "100%",
              textAlign: "left",
              backgroundColor: "transparent",
            }}
            className="shadow"
            border={props.mode ? "light" : "secondary"}
          >
            <Card.Body>
              <Card.Title><h3>B I O</h3></Card.Title>
              <div>
                <h1>Kialan Pillay</h1>
              </div>
              <div>
                <h1>
                  <Badge pill variant="light">
                    <Moment fromNow ago>
                      2001-03-05
                    </Moment>{" "}
                    old
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
        <Col md={3} sm={12} xs={12} style={{ marginBottom: "2vh" }}>
          <Card
            style={{
              width: "100%",
              height: "100%",
              textAlign: "left",
              backgroundColor: "transparent",
            }}
            className="shadow"
            border={props.mode ? "light" : "secondary"}
          >
            <Card.Body>
              <Card.Title><h3>E D U C A T I O N</h3></Card.Title>
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
                <h1>86.5 GPA</h1>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={12} xs={12} style={{ marginBottom: "2vh" }}>
          <Card
            style={{
              width: "100%",
              height: "100%",
              textAlign: "left",
              backgroundColor: "transparent",
            }}
            className="shadow"
            border={props.mode ? "light" : "secondary"}
          >
            <Card.Body>
              <Card.Title><h3>H O N O U R S</h3></Card.Title>
              <div>
                <h1>15</h1>
              </div>
              <div>
                <h2>Awards &amp; Honours</h2>
              </div>
              <div>
                <h1>5</h1>
              </div>
              <div>
                <h2>Scholarships</h2>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Profile;
