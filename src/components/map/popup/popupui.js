import React from "react";

import PropTypes from "prop-types";

import "./popup.css";

const Popup = (props) => {
  return (
    <div className="popup-container">
      <div className="popup-container1">
        <img
          src={props.image_src}
          alt={props.image_alt}
          className="popup-image"
        />
        <svg viewBox="0 0 1024 1024" className="popup-close-popup">
          <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
        </svg>
        <svg viewBox="0 0 1024 1024" className="popup-next-image">
          <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
        </svg>
      </div>
      <h1 className="popup-heading">{props.heading}</h1>
      <span className="popup-about">{props.text}</span>
      <div className="popup-button-open-data">
        <span className="popup-text">{props.text1}</span>
      </div>
    </div>
  );
};

Popup.defaultProps = {
  image_src:
    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fGNpdHl8ZW58MHx8fHwxNjU2ODQ4OTMx&ixlib=rb-1.2.1&w=1000",
  image_alt: "image",
  heading: "Heading",
  text: "Text TextText Text TextText Text TextText Text TextText Text TextText",
  text1: "Text"
};

Popup.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string
};

export default Popup;
