import "../assets/CSS/Branches.css";

import Button from "./button.jsx";
import { Fade } from "react-reveal";
import React from "react";

export default function Branches() {
  return (
    <section id="branches" className="branches-wrapper">
      <Fade bottom distance="20px">
        <div className="branches-heading">
          <h1 className="branches-title">Where we are...</h1>
          <h4 style={{ display: "inline-block", fontSize: "14px" }}>
            Take a look at our chapter.
          </h4>
          <Button
            text="More"
            href="https://skillshipfoundation.com/about-us/"
            className="title-button"
            newTab={true}
          />
        </div>
      </Fade>

      <div style={{ height: "2px", background: "#92217a" }}></div>
      <div className="row">
        <div className="image_wrapper">
          <img
            alt="skillship foundation Delhi"
            style={{ width: "inherit" }}
            src="https://skillshipfoundation.com/wp-home2/2019/11/DELHI1000.png"
          />
        </div>
        <div className="image_wrapper">
          <img
            alt="skillship foundation Kurukshethra"
            style={{ width: "inherit", paddingTop: "8px" }}
            src="https://skillshipfoundation.com/wp-home2/2019/11/logo1.png"
          />
        </div>
      </div>
      <div className="row">
        <div className="image_wrapper">
          <img
            alt="skillship foundation Jaipur"
            style={{ width: "inherit" }}
            src=" https://skillshipfoundation.com/wp-home2/2019/11/JaipurSS.png"
          />
        </div>
        <div className="image_wrapper">
          <img
            alt="skillship foundation Nagpur"
            style={{ width: "inherit" }}
            src="https://skillshipfoundation.com/wp-home2/2019/11/NAGPUR1000.png"
          />
        </div>
      </div>
    </section>
  );
}
