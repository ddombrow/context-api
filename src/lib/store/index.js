import React from "react";
import locale from "./locale";
import theme from "./theme";

const state = {
  locale: locale.initial,
  theme: theme.initial
};

function bindActions(actions, state) {
  Object.keys(actions).forEach(a => {
    actions[a] = actions[a].bind(null, state);
  });
  return actions;
}

export const actions = {
  locale: { ...bindActions(locale.actions, state.locale) },
  theme: { ...bindActions(theme.actions, state.theme) }
};

export function getState() {
  return state;
}

const storeContext = React.createContext(state);

export const Provider = storeContext.Provider;
export const Subscriber = storeContext.Consumer;
