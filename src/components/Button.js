import React from "react";
import { css } from "glamor";

const styles = {
  button: css({
    display: "block",
    padding: 20,
    margin: 10,
    fontSize: 17,
    backgroundColor: "blue",
    background: "linear-gradient(blue, navy)",
    borderRadius: "4px",
    color: "white",
    cursor: "pointer",
    textAlign: "center",
    fontFamily: "Open Sans"
  })
};

function Button(props) {
  return (
    <button onClick={props.onClick} {...styles.button}>
      {props.label}
    </button>
  );
}

export default Button;
