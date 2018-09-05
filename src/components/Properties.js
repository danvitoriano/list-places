import React from "react";
import { withRouter, matchPath } from "react-router-dom";

class Properties extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], loading: true, vendor: "" };
    this.listItem = this.listItem.bind(this);
  }

  componentDidMount() {
    // console.log(this.props.match.params.vendor);
    // console.log(this.props.match.params.id);
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
    // this.setState({ vendor: this.props.match.path });
    // console.log(this.state.vendor);
    if (this.props.match.path === "/zap") {
      if ("pricingInfos" in obj && obj.pricingInfos.rentalTotalPrice >= 3500) {
        return true;
      }
    } else {
      if ("pricingInfos" in obj && obj.pricingInfos.rentalTotalPrice <= 4000) {
        return true;
      }
    }
  }

  listVendor(obj) {
    // return true;
    // console.log(this.props.match.params);
    // console.log(this.props.match.params.id);
    if ("pricingInfos" in obj && obj.pricingInfos.rentalTotalPrice >= 3500) {
      return true;
    }
    // if ("pricingInfos" in obj && obj.pricingInfos.rentalTotalPrice >= 3500) {
    // }

    // if (match.params.id === "zap") {
    //   console.log("zap");
    //   return true;
    // }
  }

  render() {
    // console.log(this.props.match.params.vendor);
    // console.log(this.props.match.params.id);
    return (
      <div>
        <div>
          {this.state.data.filter(this.listItem).map(({ id }) => (
            <div key={id}>
              <a href={this.props.match.path + "/" + id}>{id}</a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(Properties);
