import "../assets/CSS/Community.css";

import Button from "./button";
import { Fade } from "react-reveal";
import React from "react";

export default function Community() {
  return (
    <section id="community" className="community-wrapper">
      <Fade bottom distance="20px">
        <div className="community-heading">
          <h1 className="community-title">Community!</h1>
          <h4 style={{ display: "inline-block", fontSize: "14px" }}>
            We believe there is no bias in knowledge.
          </h4>
          <Button
            text="See Our Community"
            href="https://skillshipfoundation.com/about-us/"
            newTab={true}
            className="title-button"
          />
        </div>
      </Fade>
      <div style={{ height: "2px", background: "#92217a" }}></div>

      <div className="row">
        <Fade delay={200}>
          <div className="col-md-4">
            <h6 className="p-3">
              Community provides with the apt set of technical and non-technical
              skills to build human relations, a platform to grow and learn
              together. We hope to produce the kind of entrepreneurs the world
              needs right now, skilled!
            </h6>
            <h6 className="p-3">
              <strong>
                Skillship foundation working on the principle of Knowledge
                sharing if you have any knowledge you can pass your knowledge to
                the next person, and the next person will transfer the knowledge
                to the next one.
              </strong>
            </h6>
          </div>
        </Fade>
        <Fade delay={400}>
          <div className="col-md-4">
            <h3 className="p-3 community-subtitle">
              Technical <br></br> Community
            </h3>
            <p className="p-3">
              Here we provide you with technical skills required for the real
              world.And to direct your passion into productivity; we can give
              you the guidance you need!
            </p>
            <p className="p-3">
              Interested in the fields of Programming like Python, Java,
              Progressive Web Apps, Angular Js and many more.
            </p>
          </div>
        </Fade>
        <Fade delay={600}>
          <div className="col-md-4">
            <h3 className="p-3 community-subtitle">
              Non Technical<br></br>Community
            </h3>
            <p className="p-3">
              As an organisation that gives opportunities to all driven young
              minds, we give equal openings for those interested in areas such
              as Art, Commercial studies, Competitive exams, Leadership,
              cultural, Govt Sector, Public Speaking and many more.
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
}
