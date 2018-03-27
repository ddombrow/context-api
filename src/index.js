import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Example0 from "./components/example0";
import Example1 from "./components/example1";
import Example2 from "./components/example2";
import Example3 from "./components/example3";
import Example4 from "./components/example4";
import Example5 from "./components/example5";

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
                <Link to="/example0">Old Pups</Link>
              </li>
              <li>
                <Link to="/example1">Naive Pups</Link>
              </li>
              <li>
                <Link to="/example2">Smarter Pups</Link>
              </li>
              <li>
                <Link to="/example3">Composed Pups</Link>
              </li>
              <li>
                <Link to="/example4">Global Pups</Link>
              </li>
              <li>
                <Link to="/example5">Contextual Pups</Link>
              </li>
            </ul>

            <Route exact path="/" component={Home} />
            <Route exact path="/example0" component={Example0} />
            <Route exact path="/example1" component={Example1} />
            <Route exact path="/example2" component={Example2} />
            <Route exact path="/example3" component={Example3} />
            <Route exact path="/example4" component={Example4} />
            <Route exact path="/example5" component={Example5} />
          </div>
        </Router>
      </div>
    );
  }
}

const Home = () => (
  <div>
    <h1>Time for some demos!</h1>
    <h2>Puppy stats 6 ways.</h2>
  </div>
);

render(<App />, document.getElementById("root"));
