import React from "react";

import { Provider, Subscribe } from "unstated";
import PuppyStats from "./shared/PuppyStats";
import PuppyControls from "./PuppyControls";

class Example4 extends React.Component {
  render() {
    return (
      <div>
        <h2>Global Pups</h2>
        <Provider>
          <PuppyStats avgWeight={3} avgLength={10} />
          <PuppyControls />
        </Provider>
        <br />
      </div>
    );
  }
}

export default Example4;
