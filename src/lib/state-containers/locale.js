import { Container } from "unstated";

class LocaleContainer extends Container {
  state = {
    weight: "imperial",
    distance: "imperial"
  };

  setWeight(weight) {
    this.setState({ weight });
  }

  setDistance(distance) {
    this.setState({ distance });
  }

  set(locale) {
    this.setState(locale);
  }
}

export default LocaleContainer;
