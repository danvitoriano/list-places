import React from "react";
import { withRouter } from "react-router-dom";

class Vivareal extends React.Component {
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
    if (this.props.match.params.id) {
      return this.state.data.filter(this.listItem).map(item => (
        <div key={item.id}>
          <div>{item.pricingInfos.price}</div>
          <div>{item.id}</div>
        </div>
      ));
    } else {
      return (
        <div>
          <div>
            {this.state.data.map(c => (
              <div key={c.id}>
                <a href={c.id}>{c.id}</a>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default withRouter(Vivareal);
