import React from "react";
import { css } from "glamor";

const styles = {
  wrapper: css({
    display: "block"
  }),
  link: css({
    display: "inline-block",
    margin: 10,
    padding: "20px 30px",
    fontSize: 16,
    backgroundColor: "blue",
    background: "linear-gradient(#0000FF, #0000CC)",
    borderRadius: "4px",
    color: "white",
    cursor: "pointer",
    textAlign: "center",
    fontFamily: "Open Sans",
    textDecoration: "none"
  })
};

function Link(props) {
  return (
    <div {...styles.wrapper}>
      <a data-cy="link-detail" href={props.href} {...styles.link}>
        {props.label}
      </a>
    </div>
  );
}

export default Link;
