import "../assets/CSS/TopButton.css";

import React from "react";

export default function TopButton() {
  function GoUpEvent() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function scrollFunction() {
    if (
      document.body.scrollTop > 30 ||
      document.documentElement.scrollTop > 30
    ) {
      document.getElementById("goTop").style.visibility = "visible";
    } else {
      document.getElementById("goTop").style.visibility = "hidden";
    }
  }

  window.onscroll = function () {
    scrollFunction();
  };

  const onMouseEnter = (color, bgColor) => {
    /* For the button */
    const topButton = document.getElementById("goTop");
    topButton.style.color = "color";
    topButton.style.backgroundColor = bgColor;

    /* For arrow icon */
    const arrow = document.getElementById("arrow");
    arrow.style.color = color;
    arrow.style.backgroundColor = bgColor;
  };

  const onMouseLeave = (color, bgColor) => {
    /* For the button */
    const topButton = document.getElementById("goTop");
    topButton.style.color = color;
    topButton.style.backgroundColor = bgColor;

    /* For arrow icon */
    const arrow = document.getElementById("arrow");
    arrow.style.color = color;
    arrow.style.backgroundColor = bgColor;
  };

  return (
    <div
      onClick={GoUpEvent}
      className="topButton"
      id="goTop"
      style={{
        color: "#92217a",
        backgroundColor: "#ffffff",
        border: `solid 1px #92217a`,
      }}
      title="Go up"
      onMouseEnter={() => onMouseEnter("#92217a", "#ffffff")}
      onMouseLeave={() => onMouseLeave("#ffffff", "#92217a")}
    >
      <i id="arrow" aria-hidden="true" className="fa fa-arrow-up"></i>
    </div>
  );
}
