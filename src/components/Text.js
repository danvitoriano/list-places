import React from "react";
import { css } from "glamor";

const styles = {
  container: css({
    fontFamily: "Open Sans",
    margin: 10,
    fontWeight: 300,
    fontSize: 16,
    lineHeight: 1,
    "> h1": {
      fontSize: 22
    },
    "> span": {
      fontSize: 20,
      fontWeight: "bold",
      color: "blue"
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
          <span>
            {"R$ " +
              props.label.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
          </span>
        </div>
      );
    default:
      return <div {...styles.container}>{props.label}</div>;
  }
}

export default Text;
