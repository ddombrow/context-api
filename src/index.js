import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Example1 from "./components/example1";
import Example2 from "./components/example2";

class App extends React.Component {
  render() {
    return (
      <div className="uk-container">
        <h1 className="uk-heading-primary">Context Without Constraint</h1>
        <Router>
          <div>
            <ul className="uk-tab">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/example1">Naive Pups</Link>
              </li>
              <li>
                <Link to="/example2">Smarter Pups</Link>
              </li>
            </ul>

            <Route exact path="/" component={Home} />
            <Route exact path="/example1" component={Example1} />
            <Route exact path="/example2" component={Example2} />
          </div>
        </Router>
      </div>
    );
  }
}

const Home = () => (
  <div>
    <h1>Time for some demos!</h1>
  </div>
);

render(<App />, document.getElementById("root"));
