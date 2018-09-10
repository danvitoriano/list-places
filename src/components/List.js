import React from "react";
import { withRouter } from "react-router-dom";
import Pagination from "./Pagination";
import Card from "./Card";
import Header from "./Header";

const source =
  "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/sources/source-1.json";
const init = { method: "GET", mode: "cors", cache: "default" };

const boundinBoxZap = {
  minlon: -46.693419,
  minlat: -23.568704,
  maxlon: -46.641146,
  maxlat: -23.546686
};

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      fetchedItems: [],
      pageOfItems: [],
      player: this.props.player
    };

    this.onChangePage = this.onChangePage.bind(this);
    this.filterData = this.filterData.bind(this);
    this.rentalOrSale = this.rentalOrSale.bind(this);
  }

  //business rule 1: lon and lat equal 0, return false
  nullLocation(data) {
    if (
      data.address.geoLocation.location.lon === 0 &&
      data.address.geoLocation.location.lat === 0
    ) {
      return false;
    }
    return true;
  }

  // business rule 4: if rental and zap >= 3500 || rental and viva <= 4000
  rentalOrSale(data) {
    var pricePerM2 = data.pricingInfos.price / data.usableAreas;

    if (this.state.player === "zap") {
      if (data.pricingInfos.businessType === "RENTAL") {
        if (data.pricingInfos.rentalTotalPrice >= 3500) {
          return true;
        } else {
          return false;
        }
      } else {
        if (data.pricingInfos.price >= 600000) {
          if (pricePerM2 > 3500) {
            return true;
          } else {
            return false;
          }
        }
      }
    } else {
      if (data.pricingInfos.businessType === "RENTAL") {
        if (data.pricingInfos.rentalTotalPrice <= 4000) {
          return true;
        } else {
          return false;
        }
      } else {
        if (data.pricingInfos.price <= 700000) {
          return true;
        } else {
          return false;
        }
      }
    }
  }

  boundinBoxZap(data) {
    var lon = data.address.geoLocation.location.lon;
    var lat = data.address.geoLocation.location.lat;

    console.log("type of lon: ", typeof lon);
    console.log("type of boundingBoxZap.minlon: ", typeof boundinBoxZap.minlon);
    console.log("if number is negative: ", lon < 0 ? true : false);
    if (
      lon < boundinBoxZap.minlon &&
      lon > boundinBoxZap.maxlon &&
      lat < boundinBoxZap.minlat &&
      lat > boundinBoxZap.maxlat
    ) {
      return false;
    }
    return true;
  }

  filterData(data) {
    data = data
      .filter(this.nullLocation)
      .filter(this.boundinBoxZap)
      .filter(this.rentalOrSale);
    this.setState({ fetchedItems: data, loading: false });
  }

  componentDidMount() {
    fetch(source, init)
      .then(response => response.json())
      .then(data => this.filterData(data));
  }

  // update state with new page of items from Pagination
  onChangePage(pageOfItems) {
    this.setState({ pageOfItems: pageOfItems });
  }

  render() {
    // if loading
    if (this.state.loading === true) {
      return <div>loading...</div>;
    } else {
      return (
        <div>
          <Header
            total={this.state.fetchedItems.length}
            player={this.props.player}
            headerButtons
          />
          <div>
            <ProductList
              data={this.state.pageOfItems}
              player={this.props.player}
            />
          </div>
          <Pagination
            items={this.state.fetchedItems}
            onChangePage={this.onChangePage}
          />
        </div>
      );
    }
  }
}
// render product list items
var ProductList = props => {
  return (
    <div data-cy="list-container">
      {props.data.map(c => {
        var lon = c.address.geoLocation.location.lon;
        var lat = c.address.geoLocation.location.lat;
        if (
          lon >= boundinBoxZap.minlon &&
          lon <= boundinBoxZap.maxlon &&
          lat >= boundinBoxZap.minlat &&
          lat <= boundinBoxZap.maxlat
        ) {
          return (
            <Card
              key={c.id}
              dataCy={c.id}
              data={c}
              boundinBoxZap="true"
              player={props.player}
            />
          );
        } else {
          return (
            <Card key={c.id} dataCy={c.id} data={c} player={props.player} />
          );
        }
      })}
    </div>
  );
};

export default withRouter(List);
