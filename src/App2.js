import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

var topics = [];

function Resource({ match }) {
  const topic = topics
    .find(({ id }) => id === match.params.topicId)
    .resources.find(({ id }) => id === match.params.subId);

  return (
    <div>
      <h3>{topic.id}</h3>
      <p>{topic.pricingInfos.price}</p>
      <a href={topic.id}>More info.</a>
    </div>
  );
}

function Topic({ match }) {
  // const rentalTotalPrice = pricingInfos.rentalTotalPrice >= 3500;
  const topic = topics.find(
    ({ pricingInfos }) =>
      console.log(pricingInfos.price === pricingInfos.rentalTotalPrice >= 3500)
    // pricingInfos.price === pricingInfos.rentalTotalPrice >= 3500
    // ({ id }) => id === match.params.topicId
  );

  return (
    <div>
      <h2>{topic.name}</h2>
      <p>{topic.description}</p>

      <ul>
        {topic.resources.map(sub => (
          <li key={sub.id}>
            <Link to={`${match.url}/${sub.id}`}>{sub.name}</Link>
          </li>
        ))}
      </ul>

      <hr />

      <Route path={`${match.path}/:subId`} component={Resource} />
    </div>
  );
}

function Topics({ match }) {
  return (
    <div>
      <h1>Topics</h1>
      <ul>
        {/* {topics.map(({ name, id }) => (
          <li key={id}>
            <Link to={`${match.url}/${id}`}>{name}</Link>
          </li>
        ))} */}
      </ul>

      <hr />

      <Route path={`${match.path}/:topicId`} component={Topic} />
    </div>
  );
}

function Home() {
  return <h1>Home.</h1>;
}

class App extends Component {
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
      .then(data => (topics = data));
    // .then(data => this.setState({ data: data, loading: false }));
  }

  render() {
    return (
      <Router>
        <div style={{ width: 1000, margin: "0 auto" }}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/viva">viva</Link>
            </li>
            <li>
              <Link to="/zap">zap</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/topics" component={Topics} />
        </div>
      </Router>
    );
  }
}

export default App;
