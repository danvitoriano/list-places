import React from "react";
import Slider from "./Slider";
import Text from "./Text";
import { css } from "glamor";
import Link from "./Link";

const styles = {
  card: css({
    display: "grid",
    gridTemplateColumns: "auto",
    maxWidth: 240,
    padding: 16,
    margin: "25px auto",
    transition: ".3s",
    backgroundColor: "whitesmoke",
    "&:hover": {
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)"
    },
    "> img": {
      width: "100%"
    },
    "@media(min-width: 321px)": {
      gridTemplateColumns: "auto",
      maxWidth: 280,
      margin: "25px auto"
    },
    "@media(min-width: 540px)": {
      gridTemplateColumns: "290px auto",
      maxWidth: "90%",
      margin: "25px auto"
    },
    "@media(min-width: 768px)": {
      gridTemplateColumns: "450px auto",
      maxWidth: "90%",
      margin: "25px auto"
    }
  }),
  strike: css({
    textDecoration: "line-through",
    color: "red !important"
  })
};

function ZapItem(props) {
  const boundinBoxZap = {
    minlon: -46.693419,
    minlat: -23.568704,
    maxlon: -46.641146,
    maxlat: -23.546686
  };
  var iconPrice =
    "https://cdn1.vivareal.com/p/14247-54dc1e2/v/static/app/svg/app/ic-dollarsign.svg";
  var bathrooms = props.data.bathrooms;
  var bedrooms = props.data.bedrooms;
  var parkingSpaces = props.data.parkingSpaces;
  var header = "";
  var businessType = props.data.pricingInfos.businessType;
  var price = "";
  var discount = null;
  var boundingBox = "";
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
    props.data.pricingInfos.businessType === "SALE" &&
    (lon >= boundinBoxZap.minlon &&
      lon <= boundinBoxZap.maxlon &&
      lat <= boundinBoxZap.minlat &&
      lat >= boundinBoxZap.maxlat)
  ) {
    discount =
      props.data.pricingInfos.price - props.data.pricingInfos.price * 0.1;
    boundingBox = discount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  // calculate bounding box vivareal
  if (
    props.player === "vivareal" &&
    props.data.pricingInfos.businessType === "RENTAL" &&
    (lon >= boundinBoxZap.minlon &&
      lon <= boundinBoxZap.maxlon &&
      lat <= boundinBoxZap.minlat &&
      lat >= boundinBoxZap.maxlat)
  ) {
    discount =
      parseInt(props.data.pricingInfos.rentalTotalPrice, 10) +
      parseInt(props.data.pricingInfos.rentalTotalPrice * 0.5, 10);
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

        {boundingBox !== "" ? (
          <div {...styles.strike}>
            <Text label={price} type="price" />
          </div>
        ) : (
          <Text label={price} type="price" />
        )}
        {boundingBox !== "" ? (
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
