import React from "react";

const Localizer = React.createContext({
  distance: "imperial",
  weight: "imperial"
});

export let LocalizerProvider = Localizer.Provider;
export let LocalizerConsumer = Localizer.Consumer;
