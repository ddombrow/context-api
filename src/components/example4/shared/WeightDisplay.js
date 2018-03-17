import React from "react";
import convert from "convert-units";
import { LocalizerConsumer } from "../../../lib/localizer";

const unitLabels = {
  metric: "kg",
  imperial: "lbs"
};

class WeightDisplay extends React.Component {
  getDisplayValue(val, weightFormat) {
    let displayValue = "";
    if (weightFormat === "metric") {
      displayValue += convert(val)
        .from("lb")
        .to("kg")
        .toFixed(2);
    } else {
      displayValue += val.toFixed(2);
    }
    displayValue += " " + unitLabels[weightFormat];
    return displayValue;
  }

  render() {
    return (
      <LocalizerConsumer>
        {({ weight }) => {
          return <span>{this.getDisplayValue(this.props.value, weight)}</span>;
        }}
      </LocalizerConsumer>
    );
  }
}

export default WeightDisplay;
