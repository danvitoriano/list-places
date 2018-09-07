import React from "react";
import { withRouter } from "react-router-dom";
import Slider from "./Slider";
import Text from "./Text";
import Button from "./Button";
import Header from "./Header";
import { css } from "glamor";

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
  wrapper: css({
    display: "grid",
    padding: 16,
    maxWidth: 300,
    margin: "0 auto",
    "@media(min-width: 570px)": {
      maxWidth: 1024,
      margin: "0 auto"
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
      gridTemplateColumns: "450px auto auto",
      maxWidth: 1024,
      margin: "0 auto"
    }
  })
};

var discount = 0;
var bathrooms;
var bedrooms;
var parkingSpaces;
var header;
var businessType;
var boundingBox;
var lon;
var lat;
const boundinBoxZap = {
  minlon: -46.693419,
  minlat: -23.568704,
  maxlon: -46.641146,
  maxlat: -23.546686
};

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], loading: true };
    this.listItem = this.listItem.bind(this);
  }

  componentDidMount() {
    var myInit = {
      method: "GET",
      mode: "cors",
      cache: "default"
    };
    fetch(
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/sources/source-1.json",
      myInit
    )
      .then(response => response.json())
      .then(data => this.setState({ data: data, loading: false }));
  }

  listItem(obj) {
    if ("id" in obj && obj.id === this.props.match.params.id) {
      return true;
    }
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.data.filter(this.listItem).map(item => {
          businessType = item.pricingInfos.businessType;
          parkingSpaces = item.parkingSpaces;
          bedrooms = item.bedrooms;
          bathrooms = item.bathrooms;
          lon = item.address.geoLocation.location.lon;
          lat = item.address.geoLocation.location.lat;
          // translate business type
          businessType === "SALE"
            ? (businessType = "à Venda")
            : (businessType = "para Locação");
          header =
            "Apartamento " + businessType + ", " + item.usableAreas + "m²";
          // plurals
          bedrooms <= 1
            ? (bedrooms += " Quarto | ")
            : (bedrooms += " Quartos | ");
          bathrooms <= 1
            ? (bathrooms += " Banheiro | ")
            : (bathrooms += " Banheiros | ");
          parkingSpaces <= 1
            ? (parkingSpaces += " Vaga")
            : (parkingSpaces += " Vagas");

          // calculate bounding box
          if (item.pricingInfos.price) {
            discount = item.pricingInfos.price - item.pricingInfos.price * 0.1;
          }

          // show price with bounding box
          if (
            lon >= boundinBoxZap.minlon &&
            lon <= boundinBoxZap.maxlon &&
            lat >= boundinBoxZap.minlat &&
            lat <= boundinBoxZap.maxlat
          ) {
            boundingBox = "OFFER R$ " + discount.toLocaleString();
          } else {
            boundingBox = "Fora do Bounding Box";
          }
          return (
            <div {...styles.wrapper}>
              <Text type="h1" label={header} />
              <div key={item.id} {...styles.detail}>
                <Slider images={item.images} />
                <div>
                  <Text
                    label={
                      bedrooms +
                      bathrooms +
                      item.usableAreas +
                      "m² | " +
                      parkingSpaces
                    }
                  />
                  <Text label={boundingBox} />
                  <Text label={item.pricingInfos.price} type="price" />
                  <Text
                    label={"Condomínio: " + item.pricingInfos.monthlyCondoFee}
                  />
                </div>
                <div>
                  <Button label="Ver Telefone" />
                  <Button label="Enviar Mensagem" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withRouter(Detail);
