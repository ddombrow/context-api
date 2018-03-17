import { actions, getState } from "./index";

describe("tests for the immutable store", () => {
  it("should be a store", () => {
    const store = getState();
    expect(store).toBeDefined();
    expect(store.locale).toBeDefined();
    expect(store.theme).toBeDefined();
  });

  it("should be able to set a new locale", () => {
    actions.locale.set({ distance: "metric" });
    expect(getState().locale.distance).toBe("metric");
  });
});
