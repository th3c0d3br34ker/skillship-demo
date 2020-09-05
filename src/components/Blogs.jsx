import "../assets/CSS/Blogs.css";

import Button from "./button";
import { Fade } from "react-reveal";
import React from "react";

export default function Branches() {
  return (
    <section id="blogs" className="blogs-wrapper">
      <Fade bottom distance="20px">
        <div className="blogs-heading">
          <h1 className="blogs-title">Read our Blogs</h1>
          <Button
            text="More Blogs"
            href="https://skillshipfoundation.com/blog/"
            className="title-button blogs-button"
            newTab={true}
          />
        </div>
      </Fade>
      <div style={{ height: "2px", background: "#92217a" }}></div>
      <div className="row">
        <div className="col-md-7 p-4">
          <a href="https://skillshipfoundation.com/efficient-education-on-its-way/">
            <img
              width="100%"
              height="auto"
              src="https://skillshipfoundation.com/wp-home2/2020/08/new-education-policy-960x750.png"
              alt="education policy"
            />
          </a>
        </div>
        <div className="col-md-5 p-4">
          <div className="blog p-2 row">
            <div className="photo col">
              <a href="https://skillshipfoundation.com/machine-learning/">
                <img
                  width="100%"
                  height="80%"
                  src="https://skillshipfoundation.com/wp-home2/2020/07/machine-learning-960x512.jpeg"
                  alt="machine learning"
                />
              </a>
            </div>
            <div className="desc col">
              <h5 className="desc">
                <a href="https://skillshipfoundation.com/technology-fighting-pandemic/">
                  MAKE IT WITH MACHINE LEARNING
                </a>
              </h5>
              <div className="desc_footer">
                <span className="date">19th July 2020</span>
                <i class="icon-comment-empty-fa"></i>{" "}
              </div>
            </div>
          </div>
          <div className="blog p-2 row">
            <div className="photo col">
              <a href="https://skillshipfoundation.com/technology-fighting-pandemic//">
                <img
                  width="100%"
                  height="90%"
                  src="https://skillshipfoundation.com/wp-home2/2020/07/technology-fighting-Pandemic-960x720.jpeg"
                  alt="machine learning"
                />
              </a>
            </div>
            <div className="desc col">
              <h5>
                <a href="https://skillshipfoundation.com/machine-learning/">
                  MAKE IT WITH MACHINE LEARNING
                </a>
              </h5>
              <div class="desc_footer">
                <span className="date">19th July 2020</span>
                <i class="icon-comment-empty-fa"></i>{" "}
              </div>
            </div>
          </div>
          <div className="blog p-2 row ">
            <div className="photo col">
              <a href="https://skillshipfoundation.com/support-lgbtq/">
                <img
                  width="100%"
                  height="90%"
                  src="https://skillshipfoundation.com/wp-home2/2020/07/Rainbow-Fight-Hatred-Instagram-Post-960x750.png"
                  alt="machine learning"
                />
              </a>
            </div>
            <div className="desc col">
              <h5>
                <a href="https://skillshipfoundation.com/support-lgbtq/">
                  WE SUPPORT LGBTQ+
                </a>
              </h5>
              <div class="desc_footer">
                <span className="date">19th July 2020</span>
                <i class="icon-comment-empty-fa"></i>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
