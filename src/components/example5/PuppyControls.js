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
    const { locale, theme } = store.state;
    return (
      <div>
        Weight:
        <Dropdown
          options={["metric", "imperial"]}
          onChange={e => {
            store.actions.setWeight(e.value);
          }}
          value={locale.weight}
          defaultOption={""}
          placeholder="Select an option"
        />
        <br />
        Distance:
        <Dropdown
          options={["metric", "imperial"]}
          onChange={e => store.actions.setDistance(e.value)}
          value={locale.distance}
          placeholder="Select an option"
        />
        <br />
        Theme:
        <Dropdown
          options={[
            {
              value: "plain",
              label: "plain"
            },
            {
              value: "st",
              label: "st"
            }
          ]}
          onChange={e => store.actions.setTheme(this.themes[e.value])}
          value={theme.key}
          placeholder="Select an option"
        />
      </div>
    );
  }
}

export default subscribe(store, "store")(PuppyControls);
