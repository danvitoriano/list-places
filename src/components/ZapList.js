import React from "react";
import { withRouter } from "react-router-dom";
import Pagination from "./Pagination";
import ZapItemSolo from "./ZapItemSolo";

class ZapList extends React.Component {
  state = { data: [], loading: true, page: 1, itemsPerPage: 20 };

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

  render() {
    return (
      <div>
        <Pagination
          totalPages={this.state.data.length}
          currentPage={this.state.page}
          itemsPerPage={this.state.itemsPerPage}
        />
        <div>
          <ProductList data={this.state.data} />
        </div>
      </div>
    );
  }
}

var ProductList = props => (
  <div>
    {props.data.map(c => (
      <ZapItemSolo key={c.id} data={c} />
    ))}
  </div>
);

export default withRouter(ZapList);
