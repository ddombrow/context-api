import produce from "immer";

export default {
  initial: {
    distance: "imperial",
    weight: "imperial"
  },
  actions: {
    set: (state, newLocale) => {
      state = produce(state, draft => {
        draft = Object.assign(state, newLocale);
      });
    }
  }
};
