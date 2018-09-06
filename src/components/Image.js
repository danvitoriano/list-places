import React from "react";
import { css } from "glamor";

const styles = {
  container: css({
    display: "grid",
    gridTemplateColumns: "auto",
    width: 400,
    height: 300,
    margin: "0 auto",
    "> img": {
      verticalAlign: "middle",
      width: 400,
      height: 300
    }
  })
};

function Image(props) {
  switch (props.type) {
    case "mini":
      return (
        <div {...styles.container}>
          <img src={props.src} alt={props.label ? props.label : null} />
        </div>
      );
    default:
      return (
        <div {...styles.container}>
          <img src={props.src} alt={props.label ? props.label : null} />
        </div>
      );
  }
}

export default Image;
