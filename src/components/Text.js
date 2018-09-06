import React from "react";
import { css } from "glamor";

const styles = {
  container: css({
    margin: 10,
    fontWeight: 300,
    fontSize: 16,
    lineHeight: 1.5,
    "> h1": {
      fontSize: 24
    },
    "> div": {
      fontSize: 20,
      color: "#00ff00"
    }
  })
};

function Text(props) {
  switch (props.type) {
    case "h1":
      return (
        <div {...styles.container}>
          <h1>{props.label}</h1>
        </div>
      );
    case "price":
      return (
        <div {...styles.container}>
          <div>{props.label}</div>
        </div>
      );
    default:
      return <div {...styles.container}>{props.label}</div>;
  }
}

export default Text;
