import React, { useState, useRef } from "react";
import img from "./assets/icon-512x512.png";
import Tooltip from "react-bootstrap/Tooltip";
import Overlay from "react-bootstrap/Overlay";

function Image() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      <a
        href="https://kialan.co.za"
        rel="noopener noreferrer"
        target="_blank"
        ref={target}
        onMouseEnter={() => setShow(!show)}
      >
        <img
          width="200vw"
          src={img}
          alt="Profile"
          rel="noopener noreferrer"
          style={{
            margin: "2vw",
            borderRadius: "50%",
          }}
        ></img>
      </a>
      <Overlay target={target.current} show={show} placement="top">
        {(props) => (
          <Tooltip {...props}>
            Bonus Content! Click to visit my digital resume; a static site built with Gatsby.
          </Tooltip>
        )}
      </Overlay>
    </>
  );
}

export default Image;
