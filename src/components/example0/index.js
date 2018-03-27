import React from "react";
import "react-dropdown/style.css";
import PuppyStats from "./PuppyStats";
import PropTypes from "prop-types";

class Example0 extends React.Component {
  getChildContext() {
    return {
      locale: {
        distance: "metric",
        weight: "imperial"
      }
    };
  }

  render() {
    return (
      <div>
        <h2>Old Pups</h2>
        <PuppyStats />
      </div>
    );
  }
}

Example0.childContextTypes = {
  locale: PropTypes.shape({
    weight: PropTypes.string,
    distance: PropTypes.string
  })
};

export default Example0;
