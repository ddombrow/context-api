import React from "react";
import convert from "convert-units";
import PropTypes from "prop-types";

const unitLabels = {
  metric: "kg",
  imperial: "lbs"
};

class WeightDisplay extends React.Component {
  render() {
    let weightValue = this.props.value;
    if (this.context.locale.weight === "metric") {
      weightValue = convert(weightValue)
        .from("lb")
        .to("kg");
      weightValue = +weightValue.toFixed(2);
    }
    const unit = unitLabels[this.context.locale.weight];
    return (
      <span>
        {weightValue} {unit}
      </span>
    );
  }
}

WeightDisplay.contextTypes = {
  locale: PropTypes.shape({
    weight: PropTypes.string,
    distance: PropTypes.string
  })
};

export default WeightDisplay;
