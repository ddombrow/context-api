import React from "react";
import DistanceDisplay from "./DistanceDisplay";
import WeightDisplay from "./WeightDisplay";
import Img from "react-image";

const PuppyStats = function() {
  return (
    <div style={{ width: "300px" }}>
      <Img src="http://i.cubeupload.com/00SevS.jpeg" />
      Stats for these puppies:<br />
      Average Weight: <WeightDisplay value={3} /> <br />
      Average Length: <DistanceDisplay value={10} />
      <br />
      <br />
    </div>
  );
};

export default PuppyStats;
