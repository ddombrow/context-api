import React from "react";
import convert from "convert-units";

const unitLabels = {
  metric: "cm",
  imperial: "in"
};

class DistanceDisplay extends React.Component {
  render() {
    let distValue = this.props.value;
    if (this.props.localeSetting === "metric") {
      distValue = convert(distValue)
        .from("in")
        .to("cm");
      distValue = +distValue.toFixed(2);
    }
    const unit = unitLabels[this.props.localeSetting];

    return (
      <span>
        {distValue} {unit}
      </span>
    );
  }
}

export default DistanceDisplay;
