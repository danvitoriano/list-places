import React from "react";
import { css } from "glamor";

const styles = {
  icon: css({
    textIndent: 30,
    backgroundRepeat: "no-repeat",
    lineHeight: 1.7,
    "> span": {
      "> span": {
        paddingLeft: 5,
        fontSize: 12,
        color: "black",
        fontWeight: "normal"
      }
    }
  }),
  container: css({
    fontFamily: "Open Sans",
    margin: 10,
    fontWeight: 300,
    fontSize: 16,
    lineHeight: 1,
    "> h1": {
      fontSize: 26
    },
    "> h2": {
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
    case "h2":
      return (
        <div {...styles.container}>
          <h2>{props.label}</h2>
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
    case "icon":
      return (
        <div
          {...styles.icon}
          {...css({
            backgroundImage: `url(${props.icon})`
          })}
        >
          <span>{props.label}</span>
        </div>
      );
    case "iconPrice":
      return (
        <div
          {...styles.icon}
          {...css({
            backgroundImage: `url(${props.icon})`
          })}
        >
          <span
            {...css({
              fontSize: 20,
              lineHeight: 1.25,
              fontWeight: "bold",
              color: "blue"
            })}
          >
            {"R$ " +
              props.label.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
          </span>
        </div>
      );
    case "iconArea":
      return (
        <div
          {...styles.icon}
          {...css({
            backgroundImage: `url(${props.icon})`
          })}
        >
          <span>
            {props.label}
            <span>{props.pricePerM2}</span>
          </span>
        </div>
      );
    default:
      return <div {...styles.container}>{props.label}</div>;
  }
}

export default Text;
