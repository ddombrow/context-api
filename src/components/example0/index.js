import React from "react";
import "react-dropdown/style.css";
import PuppyStats from "./shared/PuppyStats";
import PropTypes from "prop-types";
import Dropdown from "react-dropdown";

class Example0 extends React.Component {
  state = {
    locale: {
      distance: "metric",
      weight: "metric"
    }
  };

  getChildContext() {
    /*return {
      locale: {
        distance: "metric",
        weight: "imperial"
      }
    };*/
    return this.state;
  }

  _onSelectWeight = e => {
    const newState = Object.assign({}, this.state);
    newState.locale.weight = e.value;
    this.setState(newState);
  };
  _onSelectDistance = e => {
    const newState = Object.assign({}, this.state);
    newState.locale.distance = e.value;
    this.setState(newState);
  };

  render() {
    return (
      <div>
        <h2>Old Pups</h2>
        <PuppyStats />
        <br />
        Weight:{" "}
        <Dropdown
          options={["metric", "imperial"]}
          onChange={this._onSelectWeight}
          value={this.state.locale.weight}
          defaultOption={this.state.locale.weight}
          placeholder="Select an option"
        />
        <br />
        Distance:{" "}
        <Dropdown
          options={["metric", "imperial"]}
          onChange={this._onSelectDistance}
          value={this.state.locale.distance}
          placeholder="Select an option"
        />
      </div>
    );
  }
}

Example0.childContextTypes = {
  locale: PropTypes.shape({
    weight: PropTypes.string,
    distance: PropTypes.string
  })
};

export default Example0;
