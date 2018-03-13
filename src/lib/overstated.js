import React from "react";
import createReactContext from "create-react-context";
import PropTypes from "prop-types";

const StateContext = createReactContext(null);

export class Container {
  state;
  _listeners;

  constructor() {
    this._listeners = [];
  }

  setState(state) {
    this.state = Object.assign({}, this.state, state);
    this._listeners.forEach(fn => fn());
  }

  subscribe(fn) {
    this._listeners.push(fn);
  }

  unsubscribe(fn) {
    this._listeners = this._listeners.filter(f => f !== fn);
  }
}

const DUMMY_STATE = {};
export class Subscribe extends React.Component {
  static propTypes = {
    to: PropTypes.array.isRequired,
    children: PropTypes.func.isRequired
  };

  state = {};
  instances;

  componentWillReceiveProps() {
    this._unsubscribe();
  }

  _unsubscribe() {
    this.instances.forEach(container => {
      container.unsubscribe(this.onUpdate);
    });
  }

  onUpdate = () => {
    this.setState(DUMMY_STATE);
  };

  _createInstances(map, containers) {
    if (map === null) {
      throw new Error(
        "You must wrap your <Subscribe> components with a <Provider>"
      );
    }

    let safeMap = map;
    let instances = containers.map(Container => {
      let instance = safeMap.get(Container);

      if (!instance) {
        instance = new Container();
        safeMap.set(Container, instance);
      }

      instance.unsubscribe(this.onUpdate);
      instance.subscribe(this.onUpdate);

      return instance;
    });

    this.instances = instances;
    return instances;
  }

  render() {
    return (
      <StateContext.Consumer>
        {map =>
          this.props.children.apply(
            null,
            this._createInstances(map, this.props.to)
          )
        }
      </StateContext.Consumer>
    );
  }
}

export function Provider(props) {
  return (
    <StateContext.Consumer>
      {parentMap => {
        let childMap = new Map(parentMap);

        if (props.inject) {
          props.inject.forEach(instance => {
            childMap.set(instance.constructor, instance);
          });
        }

        return (
          <StateContext.Provider value={childMap}>
            {props.children}
          </StateContext.Provider>
        );
      }}
    </StateContext.Consumer>
  );
}
