import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { Provider, Subscriber } from "../../lib/store";
import PuppyStats from "./shared/PuppyStats";

class Example4 extends React.Component {
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
  _onSelectTheme = e => {
    const newState = Object.assign({}, this.state);
    newState.theme = e.value;
    this.setState(newState);
  };

  render() {
    return (
      <div>
        <h2>Global Pups</h2>
        <Provider>
          <PuppyStats />
        </Provider>
        <br />
        Weight:
        <Dropdown
          options={["metric", "imperial"]}
          onChange={this._onSelectWeight}
          value={this.state.locale.weight}
          defaultOption={this.state.locale.weight}
          placeholder="Select an option"
        />
        <br />
        Distance:
        <Dropdown
          options={["metric", "imperial"]}
          onChange={this._onSelectDistance}
          value={this.state.locale.distance}
          placeholder="Select an option"
        />
        <br />
        Theme:
        <Dropdown
          options={[
            {
              value: {
                name: "Plain",
                background: "#FFFFFF",
                border: "#FFFFFF"
              },
              label: "Plain"
            },
            {
              value: {
                name: "ST",
                background: "#E3E7FE",
                border: "#273CB4"
              },
              label: "ST"
            }
          ]}
          onChange={this._onSelectTheme}
          value={this.state.theme.name}
          placeholder="Select an option"
        />
      </div>
    );
  }
}

export default Example4;
