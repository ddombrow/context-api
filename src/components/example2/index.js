import React from "react";
import Img from "react-image";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import DistanceDisplay from "./shared/DistanceDisplay";
import WeightDisplay from "./shared/WeightDisplay";
import { LocalizerProvider } from "../../lib/localizer";

class Example2 extends React.Component {
  state = {
    locale: {
      distance: "metric",
      weight: "metric"
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

  render() {
    return (
      <div>
        <LocalizerProvider value={this.state.locale}>
          <div style={{ width: "300px" }}>
            <Img src="http://i.cubeupload.com/00SevS.jpeg" />
            Stats for these puppies:<br />
            Average Weight: <WeightDisplay value={3} /> <br />
            Average Length: <DistanceDisplay value={10} />
            <br />
            <br />
          </div>
        </LocalizerProvider>
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

export default Example2;
