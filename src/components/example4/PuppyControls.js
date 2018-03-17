import React from "react";
import ThemeContainer from "../../lib/state-containers/theme";
import LocaleContainer from "../../lib/state-containers/locale";
import { Subscribe } from "../../lib/overstated";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

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
      <Subscribe to={[ThemeContainer, LocaleContainer]}>
        {(theme, locale) => (
          <div>
            Weight:
            <Dropdown
              options={["metric", "imperial"]}
              onChange={e => locale.setWeight(e.value)}
              value={locale.state.weight}
              defaultOption={""}
              placeholder="Select an option"
            />
            <br />
            Distance:
            <Dropdown
              options={["metric", "imperial"]}
              onChange={e => locale.setDistance(e.value)}
              value={locale.state.distance}
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
              onChange={e => theme.set(this.themes[e.value])}
              value={theme.state.key}
              placeholder="Select an option"
            />
          </div>
        )}
      </Subscribe>
    );
  }
}

export default PuppyControls;
