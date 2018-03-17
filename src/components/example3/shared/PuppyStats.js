import React from "react";
import Img from "react-image";
import DistanceDisplay from "./DistanceDisplay";
import WeightDisplay from "./WeightDisplay";
import { ColorizerConsumer } from "../../../lib/colorizer";

const PuppyStats = props => {
  return (
    <ColorizerConsumer>
      {theme => {
        const themedStyles = {
          width: "300px",
          padding: "10px",
          backgroundColor: theme.background,
          border: `solid ${theme.border} 1px`
        };
        return (
          <div style={themedStyles}>
            <Img src="http://i.cubeupload.com/00SevS.jpeg" />
            <strong>Stats for these puppies:</strong>
            <br />
            Average Weight: <WeightDisplay value={props.avgWeight} /> <br />
            Average Length: <DistanceDisplay value={props.avgLength} />
            <br />
          </div>
        );
      }}
    </ColorizerConsumer>
  );
};

export default PuppyStats;
