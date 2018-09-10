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
  }),
  strike: css({
    textDecoration: "line-through",
    color: "red !important"
  })
};

const boundinBoxZap = {
  minlon: -46.693419,
  minlat: -23.568704,
  maxlon: -46.641146,
  maxlat: -23.546686
};
var iconPrice =
  "https://cdn1.vivareal.com/p/14247-54dc1e2/v/static/app/svg/app/ic-dollarsign.svg";

function ZapItem(props) {
  var discount = 0;
  var bathrooms = props.data.bathrooms;
  var bedrooms = props.data.bedrooms;
  var parkingSpaces = props.data.parkingSpaces;
  var header = "";
  var businessType = props.data.pricingInfos.businessType;
  var boundingBox = "";
  var price = "";
  var lon = props.data.address.geoLocation.location.lon;
  var lat = props.data.address.geoLocation.location.lat;

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

  // calculate bounding box zap
  if (
    props.player === "zap" &&
    props.data.pricingInfos.businessType === "SALE"
  ) {
    discount =
      props.data.pricingInfos.price - props.data.pricingInfos.price * 0.1;
  }

  // calculate bounding box vivareal
  if (
    props.player === "vivareal" &&
    props.data.pricingInfos.businessType === "RENTAL"
  ) {
    if (props.data.pricingInfos.rentalTotalPrice) {
      discount = parseInt(props.data.pricingInfos.rentalTotalPrice * 0.5, 10);
      discount += parseInt(props.data.pricingInfos.rentalTotalPrice, 10);
    }
  }

  // show price with bounding box
  if (
    lon >= boundinBoxZap.minlon ||
    lon <= boundinBoxZap.maxlon ||
    lat >= boundinBoxZap.minlat ||
    lat <= boundinBoxZap.maxlat
  ) {
    boundingBox = discount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
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

        {discount !== 0 ? (
          <div {...styles.strike}>
            <Text label={price} type="price" />
          </div>
        ) : (
          <Text label={price} type="price" />
        )}
        {discount !== 0 ? (
          <Text label={boundingBox} type="iconPrice" icon={iconPrice} />
        ) : null}
        {props.data.pricingInfos.monthlyCondoFee >= "1000" ? (
          <Text
            label={
              "Condomínio: " +
              props.data.pricingInfos.monthlyCondoFee.replace(
                /\B(?=(\d{3})+(?!\d))/g,
                "."
              )
            }
          />
        ) : null}
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
