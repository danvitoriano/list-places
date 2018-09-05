import React from "react";
import { withRouter } from "react-router-dom";

class ZapList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], loading: true };
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

  render() {
    return (
      <div>
        <div>
          {this.state.data.map(c => (
            <div key={c.id}>
              <a href={"/zap/" + c.id}>{c.id}</a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(ZapList);
