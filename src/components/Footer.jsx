import "../assets/CSS/Footer.css";

import React from "react";

export default function Community() {
  return (
    <section id="contact" className="footer-wrapper">
      <div className="row">
        <div className="col-md-6 p-5">
          <p>
            <img
              src="https://skillshipfoundation.com/wp-home2/2020/01/skillship-foundation-600x337-1.png"
              alt=""
              width="144"
              height="81"
            />
          </p>
          <p>
            <strong>India’s Fastest growing</strong>
            <br />
            <strong>Technical &amp; Non-technical Community</strong>
          </p>
          <p>
            <strong>
              101, Raghav Apartment, Reshimbaug Square, Nagpur, MH, India.
            </strong>
          </p>
        </div>
        <div className="col-md-6 p-5">
          <h4>Get Involved</h4>
          <ul className="footerlist">
            <li>
              <a href="https://skillshipfoundation.com/join-our-community/">
                Join our community
              </a>
            </li>
            <li>
              <a href="https://skillshipfoundation.com/mentors/">
                Become Mentor
              </a>
            </li>
            <li>
              <a href="https://skillshipfoundation.com/be-a-chapter-leader/">
                Be a chapter leader
              </a>
            </li>
            <li>
              <a href="https://skillshipfoundation.com/project-guidance/">
                Get Project Guidance
              </a>
            </li>
            <li>
              <a href="http://bit.ly/ApplySkillshipCampus2020">
                Campus Ambassador
              </a>
              &nbsp;
            </li>
            <li>
              <a href="https://skillshipfoundation.com/thought/">
                Express your thoughts
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="copyright">
        © 2020 Skillship foundation. All Rights Reserved.
      </div>
    </section>
  );
}
