import React, { useState, useRef } from "react";
import img from "./assets/avatar.png";
import Tooltip from "react-bootstrap/Tooltip";
import Overlay from "react-bootstrap/Overlay";

function Image() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      <a
        href="https://kialan.co.za"
        target="_blank"
        ref={target}
        onMouseEnter={() => setShow(!show)}
      >
        <img
          width="250vw"
          src={img}
          alt="Profile"
          rel="noopener noreferrer"
          style={{
            marginLeft: "2vw",
            borderRadius: "50%",
            filter: "grayscale(100%)",
          }}
        ></img>
      </a>
      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            Bonus Content! Click to visit my digital resume; a static site built with Gatsby.
          </Tooltip>
        )}
      </Overlay>
    </>
  );
}

export default Image;
