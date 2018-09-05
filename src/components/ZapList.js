import React from "react";
import { withRouter } from "react-router-dom";
import Pagination from "./Pagination";
import ZapItem from "./ZapItem";

class ZapList extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      exampleItems: [],
      pageOfItems: []
    };

    this.onChangePage = this.onChangePage.bind(this);
  }

  componentDidMount() {
    var myInit = { method: "GET", mode: "cors", cache: "default" };
    fetch(
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/sources/source-1.json",
      myInit
    )
      .then(response => response.json())
      .then(data => this.setState({ exampleItems: data, loading: false }));
  }

  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }

  render() {
    if (this.state.loading === true) {
      return <div>loading...</div>;
    } else {
      return (
        <div>
          <Pagination
            items={this.state.exampleItems}
            onChangePage={this.onChangePage}
          />
          <div>
            <ProductList data={this.state.pageOfItems} />
          </div>
        </div>
      );
    }
  }
}

var ProductList = props => (
  <div>
    {props.data.map(c => (
      <ZapItem key={c.id} data={c} />
    ))}
  </div>
);

export default withRouter(ZapList);
