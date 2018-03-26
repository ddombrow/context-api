import convert from "convert-units";

export function getDistanceDisplay(val, distanceFormat) {
  const unitLabels = {
    metric: "cm",
    imperial: "in"
  };
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

export function getWeightDisplay(val, weightFormat) {
  const unitLabels = {
    metric: "kg",
    imperial: "lbs"
  };
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
