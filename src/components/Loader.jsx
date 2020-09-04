import "../assets/CSS/Loader.css";

import React, { Component } from "react";

import { Fade } from "react-reveal";
import IconLogo from "../assets/images/SkillShip-FoundationBlack.png";

class PageLoader extends Component {
  state = {
    show: true,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: false });
    }, 1800);
  }
  render() {
    return (
      <div className="loader-wrapper">
        <Fade opposite when={this.state.show}>
          <div>
            <a href="/" aria-label="home">
              <img
                className="loader-img"
                src={IconLogo}
                alt="SkillShip Vellore"
              />
            </a>
          </div>
        </Fade>
      </div>
    );
  }
}

export default PageLoader;
