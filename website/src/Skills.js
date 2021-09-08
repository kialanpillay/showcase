import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

function Skills(props) {
  return (
    <div>
      <Row
        style={{
          marginTop: "6vw",
          marginBottom: "2vh",
        }}
      >
        <Col>
          <h1 className="h1--section" id="skills">
            SKILLS
          </h1>
        </Col>
      </Row>
      <Row>
        <Col md={8} xs={12}>
          <h1 className="h1--skills">
            <Badge variant="light">C L I E N T - S I D E</Badge>
          </h1>
          <Row
            style={{
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            <Col md="auto">
              <h4 className="h4--skills">
                JavaScript | ReactJS | TypeScript | HTML | CSS
              </h4>
            </Col>
          </Row>
          <h1 className="h1--skills">
            <Badge variant="light">S E R V E R - S I D E</Badge>
          </h1>
          <Row
            style={{
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            <Col md="auto">
              <h4 className="h4--skills">
                Java | Python | C++ | SQL | Golang | Kotlin | Haskell | Ruby
              </h4>
            </Col>
          </Row>
          <h1 className="h1--skills">
            <Badge variant="light">M A C H I N E &nbsp; L E A R N I N G</Badge>
          </h1>
          <Row
            style={{
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            <Col md="auto">
              <h4 className="h4--skills">
                Keras | Tensorflow | R | MATLAB | PyTorch
              </h4>
            </Col>
          </Row>
        </Col>
        <Col md={4} xs={12}>
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
              <Card.Title><h3>S N A P S H O T</h3></Card.Title>
              <div>
                <h1 className="h1--numeric">4</h1>
                <h3>Years of Experience</h3>
              </div>
              <div>
                <h1 className="h1--numeric">16</h1>
                <h3>Languages &amp; Frameworks</h3>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Skills;
