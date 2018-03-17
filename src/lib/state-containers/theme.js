import { Container } from "unstated";

class ThemeContainer extends Container {
  state = {
    background: "#FFFFFF",
    border: "#FFFFFF"
  };

  setBackground(background) {
    this.setState({ background });
  }

  setBorder(border) {
    this.setState({ border });
  }

  set(theme) {
    this.setState(theme);
  }
}

export default ThemeContainer;
