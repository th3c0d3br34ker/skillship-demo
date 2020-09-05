import "../assets/CSS/Greetings.css";

import { Fade } from "react-reveal";
import React from "react";

export default function Greetings() {
  return (
    <section className="greetings-wrapper">
      <Fade distance="20px">
        <h1 className="overline">{"Hi, we are"}</h1>
      </Fade>
      <Fade bottom delay={800} distance="20px">
        <h1 className="greeting-title">{"SkillShip Vellore"}</h1>
      </Fade>
      <Fade delay={1800} distance="20px">
        <h3 className="greetings-subtitle">
          {"India’s Fastest growing Technical & Non-technical Community."}
        </h3>
      </Fade>
      <Fade delay={2000} distance="10px">
        <div className="greetings-description">
          {
            "We believe there is no bias in knowledge, we believe in quality education. We know the education goes beyond books and we provide a platform for the same! Are you in this to learn? Skillship is the right place! Our Prime focus is on women empowerment."
          }
        </div>
      </Fade>
    </section>
  );
}
