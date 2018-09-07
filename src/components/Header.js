import React from "react";
import Link from "./Link";
import { css } from "glamor";
import Text from "./Text";

const styles = {
  container: css({
    display: "block",
    backgroundColor: "gainsboro",
    fontFamily: "Open Sans"
  }),
  wrapper: css({
    display: "grid",
    padding: "1rem",
    gridTemplateColumns: "auto auto",
    margin: "0 auto",
    "> a": {
      textDecoration: "none",
      color: "#222",
      "&:hover": {
        textShadow: "0 0 1px gray"
      }
    },
    "@media(min-width: 570px)": {
      maxWidth: 1024,
      margin: "0 auto"
    }
  }),
  back: css({
    textAlign: "right"
  })
};

function Header(props) {
  return (
    <div {...styles.container} data-cy="header">
      <div {...styles.wrapper}>
        <a href="/">
          <Text label="Real Estate" type="h1" />
        </a>
        <div {...styles.back}>
          <Text label={props.total + " results"} />
        </div>
      </div>
    </div>
  );
}

export default Header;
