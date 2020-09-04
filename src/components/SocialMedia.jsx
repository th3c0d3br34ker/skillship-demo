import "../assets/CSS/SocialMedia.css";

import { Fade } from "react-reveal";
import React from "react";

export default function SocialMedia() {
  return (
    <React.Fragment>
      <div className="socialmedia-wrapper-left">
        <Fade delay={2000}>
          <ul className="socialmedia-ul">
            <li className="socialmedia-li">
              <a
                href={"facebook"}
                className="icon-button facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://skillshipfoundation.com/wp-home2/2020/01/facebook.png"
                  alt="facebook"
                />
                <span></span>
              </a>
            </li>
            <li className="socialmedia-li">
              <a
                href={"linkedin"}
                className="icon-button linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://skillshipfoundation.com/wp-home2/2020/01/linkedin.png"
                  alt="linkedin"
                />
                <span></span>
              </a>
            </li>
            <li className="socialmedia-li">
              <a
                href={"instagram"}
                className="icon-button instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://skillshipfoundation.com/wp-home2/2020/01/instagram.png"
                  alt="instagram"
                />
                <span></span>
              </a>
            </li>
            <li className="socialmedia-li">
              <a
                href="https://www.youtube.com/channel/UCEo6gNuTr9nzy2QWyeXoz-g/"
                className="icon-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://skillshipfoundation.com/wp-home2/2020/03/youtube-1.png"
                  alt="youtube"
                />
                <span></span>
              </a>
            </li>
          </ul>
        </Fade>
      </div>

      <div className="socialmedia-wrapper-bottom">
        <Fade bottom distance="10px">
          <a
            href={"facebook"}
            className="icon-button facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://skillshipfoundation.com/wp-home2/2020/01/facebook.png"
              alt="facebook"
            />
            <span></span>
          </a>
          <a
            href={"linkedin"}
            className="icon-button linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://skillshipfoundation.com/wp-home2/2020/01/linkedin.png"
              alt="linkedin"
            />
            <span></span>
          </a>
          <a
            href={"instagram"}
            className="icon-button instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://skillshipfoundation.com/wp-home2/2020/01/instagram.png"
              alt="instagram"
            />
            <span></span>
          </a>
          <a
            href="https://www.youtube.com/channel/UCEo6gNuTr9nzy2QWyeXoz-g/"
            className="icon-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://skillshipfoundation.com/wp-home2/2020/03/youtube-1.png"
              alt="youtube"
            />
            <span></span>
          </a>
        </Fade>
      </div>
    </React.Fragment>
  );
}
