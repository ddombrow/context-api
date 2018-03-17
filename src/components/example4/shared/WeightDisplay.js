import React from "react";
import { getWeightDisplay } from "./locale-helpers";

export function WeightDisplay(props) {
  return <span>{getWeightDisplay(props.value, props.format)}</span>;
}

export default WeightDisplay;
