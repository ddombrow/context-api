import React from "react";
import convert from "convert-units";

const unitLabels = {
  metric: "kg",
  imperial: "lbs"
};

class WeightDisplay extends React.Component {
  render() {
    let weightValue = this.props.value;
    if (this.props.localeSetting === "metric") {
      weightValue = convert(weightValue)
        .from("lb")
        .to("kg");
      weightValue = +weightValue.toFixed(2);
    }
    const unit = unitLabels[this.props.localeSetting];
    return (
      <span>
        {weightValue} {unit}
      </span>
    );
  }
}

export default WeightDisplay;
