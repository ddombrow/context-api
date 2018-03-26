import React from "react";
import { subscribe } from "react-contextual";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import store from "./store";

class PuppyControls extends React.Component {
  themes = {
    plain: {
      name: "Plain",
      key: "plain",
      background: "#FFFFFF",
      border: "#FFFFFF"
    },
    st: {
      name: "ST",
      key: "st",
      background: "#E3E7FE",
      border: "#273CB4"
    }
  };

  render() {
    return (
      <div>
        Weight:
        <Dropdown
          options={["metric", "imperial"]}
          onChange={e => store.actions.setWeight(e.value)}
          value={store.weight}
          defaultOption={""}
          placeholder="Select an option"
        />
        <br />
        Distance:
        <Dropdown
          options={["metric", "imperial"]}
          onChange={e => store.actions.setDistance(e.value)}
          value={store.distance}
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
          onChange={e => store.actions.setTheme(this.themes[e.value])}
          value={null}
          placeholder="Select an option"
        />
      </div>
    );
  }
}

export default subscribe(store, "store")(PuppyControls);
