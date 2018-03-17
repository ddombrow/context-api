import produce from "immer";

export default {
  initial: {
    background: "#E1E1E1",
    border: "#333333"
  },
  actions: {
    set: (state, newTheme) => {
      state = produce(state, draft => {
        draft = Object.assign(state, newTheme);
      });
    }
  }
};
