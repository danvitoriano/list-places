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
  constructor() {
    super();

    this.state = {
      loading: true,
      fetchedItems: [],
      pageOfItems: []
    };

    this.onChangePage = this.onChangePage.bind(this);
    this.filterData = this.filterData.bind(this);
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

  //business rule 2: sell price More Than 3500 Per M2
  sellMoreThan3500PerM2(data) {
    if (data.pricingInfos.businessType === "SALE") {
      var pricePerM2 = data.pricingInfos.price / data.usableAreas;
      if (pricePerM2 <= 3500) {
        return false;
      }
    }
    return true;
  }

  rentMoreThan3500(data) {
    if (
      data.pricingInfos.businessType === "RENTAL" &&
      data.pricingInfos.price < 3500
    ) {
      return false;
    }
    return true;
  }

  sellMoreThan600000(data) {
    if (
      data.pricingInfos.businessType === "SALE" &&
      data.pricingInfos.price < 600000
    ) {
      return false;
    }
    return true;
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
      .filter(this.sellMoreThan3500PerM2)
      .filter(this.boundinBoxZap)
      .filter(this.rentMoreThan3500)
      .filter(this.sellMoreThan600000);
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
          <p>total itens: {this.state.fetchedItems.length}</p>
          <Header />
          <div>
            <ProductList data={this.state.pageOfItems} />
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
            <Card key={c.id} dataCy={c.id} data={c} boundinBoxZap="true" />
          );
        } else {
          return <Card key={c.id} dataCy={c.id} data={c} />;
        }
      })}
    </div>
  );
};

export default withRouter(List);
