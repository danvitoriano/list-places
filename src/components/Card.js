import React from "react";
import Slider from "./Slider";
import Text from "./Text";
import { css } from "glamor";
import Link from "./Link";

const styles = {
  card: css({
    display: "grid",
    gridTemplateColumns: "auto",
    padding: 16,
    margin: 25,
    transition: ".3s",
    backgroundColor: "whitesmoke",
    "&:hover": {
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)"
    },
    "> img": {
      width: "100%"
    },
    "@media(min-width: 570px)": {
      gridTemplateColumns: "450px auto",
      maxWidth: 1024,
      margin: "25px auto"
    }
  }),
  detail: css({
    display: "grid",
    gridTemplateColumns: "auto",
    padding: 16,
    backgroundColor: "white",
    maxWidth: 300,
    margin: "0 auto",
    "@media(min-width: 570px)": {
      gridTemplateColumns: "450px auto",
      maxWidth: 1024,
      margin: "0 auto"
    }
  }),
  link: css({
    display: "block",
    textDecoration: "none",
    transition: 0.1,
    color: "green",
    "&:after": {
      content: "''",
      display: "inline-block",
      width: "100%",
      borderBottom: "2px solid",
      opacity: "0",
      WebkitTransition: "opacity 0.35s, -webkit-transform 0.35s",
      transition: "opacity 0.35s, transform 0.35s",
      WebkitTransform: "scale(0,1)",
      transform: "scale(0,1)"
    },
    "&:hover": {
      color: "black",
      textShadow: "0 0 2px gainsboro",
      "&:after": {
        opacity: "1",
        WebkitTransform: "scale(1)",
        transform: "scale(1)"
      }
    }
  })
};

function ZapItem(props) {
  var discount = 0;
  var bathrooms = props.data.bathrooms;
  var bedrooms = props.data.bedrooms;
  var parkingSpaces = props.data.parkingSpaces;
  var header = "";
  var businessType = props.data.pricingInfos.businessType;
  var boundingBox = "";
  var price = "";

  // translate business type
  if (businessType === "SALE") {
    businessType = "à Venda";
    price = props.data.pricingInfos.price;
  }
  if (businessType === "RENTAL") {
    businessType = "para Locação";
    price = props.data.pricingInfos.rentalTotalPrice;
  }
  header = "Apartamento " + businessType + ", " + props.data.usableAreas + "m²";

  // plurals
  bedrooms <= 1 ? (bedrooms += " Quarto | ") : (bedrooms += " Quartos | ");
  bathrooms <= 1
    ? (bathrooms += " Banheiro | ")
    : (bathrooms += " Banheiros | ");
  parkingSpaces <= 1 ? (parkingSpaces += " Vaga") : (parkingSpaces += " Vagas");

  // calculate bounding box
  if (props.data.pricingInfos.price) {
    discount =
      props.data.pricingInfos.price - props.data.pricingInfos.price * 0.1;
  }

  // show price with bounding box
  if (props.boundinBoxZap) {
    boundingBox = "OFFER R$ " + discount.toLocaleString();
  }

  // return card
  return (
    <div data-cy={props.dataCy} {...styles.card}>
      <Slider images={props.data.images} />
      <div>
        <Text
          label={
            props.data.address.neighborhood + ", " + props.data.address.city
          }
        />
        <Text type="h2" label={header} />
        <Text
          label={
            bedrooms +
            bathrooms +
            props.data.usableAreas +
            "m² | " +
            parkingSpaces
          }
        />
        <Text label={boundingBox} />
        <Text label={price} type="price" />
        <Text
          label={"Condomínio: " + props.data.pricingInfos.monthlyCondoFee}
        />
        <Link
          dataCy={props.data.id + "-link"}
          label="Detalhes"
          href={"/" + props.player + "/" + props.data.id}
        />
      </div>
    </div>
  );
}

export default ZapItem;
