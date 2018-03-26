import React from "react";

import { Provider } from "react-contextual";
import PuppyStats from "./shared/PuppyStats";
import PuppyControls from "./PuppyControls";
import store from "./store";

class Example5 extends React.Component {
  render() {
    return (
      <div>
        <h2>Global Pups</h2>
        <Provider {...store}>
          <PuppyStats avgWeight={3} avgLength={10} />
          <PuppyControls />
        </Provider>
        <br />
      </div>
    );
  }
}

export default Example5;