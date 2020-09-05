import "../assets/CSS/button.css";

import React from "react";

export default function Button({ text, className, href, newTab }) {
  return (
    <div className={className}>
      <a className="main-button" href={href} target={newTab && "_blank"}>
        {text}
      </a>
    </div>
  );
}
