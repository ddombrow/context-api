import React from "react";
import Img from "react-image";
import DistanceDisplay from "./DistanceDisplay";
import WeightDisplay from "./WeightDisplay";
import { subscribe } from "react-contextual";
import store from "../store";

const PuppyStats = props => {
  const theme = { state: { background: "", border: "" } };
  const locale = { state: { weight: "", distance: "" } };
  const themedStyles = {
    width: "300px",
    padding: "10px",
    backgroundColor: theme.state.background,
    border: `solid ${theme.state.border} 1px`
  };

  return (
    <div style={themedStyles}>
      <Img src="http://i.cubeupload.com/00SevS.jpeg" />
      <strong>Stats for these puppies:</strong>
      <br />
      Average Weight: <WeightDisplay value={props.avgWeight} format={locale.state.weight} /> <br />
      Average Length: <DistanceDisplay value={props.avgLength} format={locale.state.distance} />
      <br />
    </div>
  );
};

export default subscribe(store)(PuppyStats);
