import React from "react";
import { getDistanceDisplay } from "./locale-helpers";

export function DistanceDisplay(props) {
  return <span>{getDistanceDisplay(props.value, props.format)}</span>;
}

export default DistanceDisplay;
