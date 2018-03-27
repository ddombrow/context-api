import { createStore } from "react-contextual";

const store = {
  initialState: {
    locale: {
      weight: "imperial",
      distance: "imperial"
    },
    theme: {
      background: "#FFFFFF",
      border: "#FFFFFF"
    }
  },
  actions: {
    setWeight: weight => state => ({
      ...state,
      locale: { ...state.locale, weight: weight }
    }),
    setDistance: distance => state => ({
      ...state,
      locale: { ...state.locale, distance: distance }
    }),
    setTheme: theme => state => ({ ...state, theme: { ...theme } })
  }
};

const externalStore = createStore(store);
export default externalStore;
