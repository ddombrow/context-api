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
    setWeight: weight => state => Object.assign({}, state, { weight }),
    setDistance: distance => state => Object.assign({}, state, { distance }),
    setTheme: theme => state => Object.assign({}, state, { theme: { ...theme } })
  }
};

export default createStore(store);
