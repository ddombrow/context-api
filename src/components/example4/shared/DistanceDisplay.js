import React from "react";
import convert from "convert-units";
import { LocalizerConsumer } from "../../../lib/localizer";

const unitLabels = {
  metric: "cm",
  imperial: "in"
};

class DistanceDisplay extends React.Component {
  getDisplayValue(val, distanceFormat) {
    let displayValue = "";
    if (distanceFormat === "metric") {
      displayValue += convert(val)
        .from("in")
        .to("cm")
        .toFixed(2);
    } else {
      displayValue += val.toFixed(2);
    }
    displayValue += " " + unitLabels[distanceFormat];
    return displayValue;
  }

  render() {
    return (
      <LocalizerConsumer>
        {({ distance }) => {
          return (
            <span>{this.getDisplayValue(this.props.value, distance)}</span>
          );
        }}
      </LocalizerConsumer>
    );
  }
}

export default DistanceDisplay;
