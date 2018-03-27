import React from "react";
import convert from "convert-units";
import PropTypes from "prop-types";

const unitLabels = {
  metric: "cm",
  imperial: "in"
};

class DistanceDisplay extends React.Component {
  render() {
    let distValue = this.props.value;
    if (this.context.locale.distance === "metric") {
      distValue = convert(distValue)
        .from("in")
        .to("cm");
      distValue = +distValue.toFixed(2);
    }
    const unit = unitLabels[this.context.locale.distance];

    return (
      <span>
        {distValue} {unit}
      </span>
    );
  }
}

DistanceDisplay.contextTypes = {
  locale: PropTypes.shape({
    weight: PropTypes.string,
    distance: PropTypes.string
  })
};

export default DistanceDisplay;
