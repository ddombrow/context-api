import React from "react";
import Img from "react-image";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import DistanceDisplay from "./shared/DistanceDisplay";
import WeightDisplay from "./shared/WeightDisplay";

const LocalizationContext = React.createContext({
  distance: "imperial",
  weight: "imperial"
});

class Example1 extends React.Component {
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
        <h2>Naive Pups</h2>
        <LocalizationContext.Provider value={this.state.locale}>
          <LocalizationContext.Consumer
            children={ctx => {
              return (
                <div style={{ width: "300px" }}>
                  <Img src="http://i.cubeupload.com/00SevS.jpeg" />
                  Stats for these puppies:<br />
                  Average Weight: <WeightDisplay value={3} localeSetting={ctx.weight} /> <br />
                  Average Length: <DistanceDisplay value={10} localeSetting={ctx.distance} />
                  <br />
                  <br />
                </div>
              );
            }}
          />
        </LocalizationContext.Provider>
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

export default Example1;
