import React from "react";
import Link from "./Link";
import Text from "./Text";
import Header from "./Header";
import { css } from "glamor";

const styles = {
  wrapper: css({
    display: "grid",
    padding: 20,
    maxWidth: 300,
    margin: "0 auto",
    "@media(min-width: 570px)": {
      maxWidth: 1024,
      margin: "0 auto",
      gridTemplateColumns: "auto auto auto"
    }
  })
};

function Home() {
  return (
    <div>
      <Header label="Grupo ZAP" />
      <div {...styles.wrapper}>
        <Text label="Escolha uma das opções:" />
        <Link dataCy="zap" label="ZAP" href="/zap" />
        <Link dataCy="vivareal" label="VIVAREAL" href="/vivareal" />
      </div>
    </div>
  );
}

export default Home;
