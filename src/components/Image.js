import React from "react";

function Image(props) {
  return <img src={props.src} alt={props.label ? props.label : null} />;
}

export default Image;
