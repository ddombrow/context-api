import React from "react";

const Colorizer = React.createContext({
  background: "#E3E7FE",
  border: "#E1E1E1"
});

export let ColorizerProvider = Colorizer.Provider;
export let ColorizerConsumer = Colorizer.Consumer;
