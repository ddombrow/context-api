import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import PuppyStats from "./shared/PuppyStats";
import { LocalizerProvider } from "../../lib/localizer";
import { ColorizerProvider } from "../../lib/colorizer";

class Example3 extends React.Component {
  state = {
    locale: {
      distance: "metric",
      weight: "metric"
    },
    theme: {
      name: "Plain",
      background: "#FFFFFF",
      border: "#FFFFFF"
    }
  };
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
    newState.theme = this.themes[e.value];
    this.setState(newState);
  };

  themes = {
    plain: {
      name: "Plain",
      background: "#FFFFFF",
      border: "#FFFFFF"
    },
    st: {
      name: "ST",
      background: "#E3E7FE",
      border: "#273CB4"
    }
  };

  render() {
    return (
      <div>
        <h2>Composed Pups</h2>
        <LocalizerProvider value={this.state.locale}>
          <ColorizerProvider value={this.state.theme}>
            <PuppyStats avgWeight={3} avgLength={10} />
          </ColorizerProvider>
        </LocalizerProvider>
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
              value: "plain",
              label: "Plain"
            },
            {
              value: "st",
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

export default Example3;
