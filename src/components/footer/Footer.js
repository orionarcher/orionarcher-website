import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
// import { greeting } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          {
            <a
              href={"https://github.com/orionarcher/orionarcher-website"}
              style={{ textDecoration: "none" }}
            >
              website source
            </a>
          }
        </p>
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
      </Fade>
    </div>
  );
}
