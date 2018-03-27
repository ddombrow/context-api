//see https://github.com/jamiebuilds/unstated/blob/master/src/unstated.js for the real deal, this is just an annotated clone
import React from "react";

const StateContext = React.createContext(null);

/**
 *  A container is a simple state object that implements the setState API from react and an observer pattern (subscribe, unsubscribe)
 */
export class Container {
  state;
  _listeners = [];

  setState(state) {
    this.state = Object.assign({}, this.state, state);
    this._listeners.forEach(fn => fn());
  }

  subscribe(fn: Function) {
    this._listeners.push(fn);
  }

  unsubscribe(fn: Function) {
    this._listeners = this._listeners.filter(f => f !== fn);
  }
}

const DUMMY_STATE = {};

export class Subscribe extends React.Component {
  state = {};
  instances: Array<ContainerType> = [];

  componentWillUnmount() {
    this._unsubscribe();
  }

  _unsubscribe() {
    this.instances.forEach(container => {
      container.unsubscribe(this.onUpdate);
    });
  }

  // trigger's a re-render of the component tree.
  onUpdate = () => {
    this.setState(DUMMY_STATE);
  };

  _createInstances(map, containers) {
    this._unsubscribe();
    if (map === null) {
      throw new Error("You must wrap your <Subscribe> components with a <Provider>");
    }
    console.log(map);
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
        {map => this.props.children.apply(null, this._createInstances(map, this.props.to))}
      </StateContext.Consumer>
    );
  }
}

export function Provider(props) {
  return (
    //this looks bass-ackwards, but it's so you can have multiple nested <Provider> components
    <StateContext.Consumer>
      {parentMap => {
        let childMap = new Map(parentMap);

        if (props.inject) {
          props.inject.forEach(instance => {
            childMap.set(instance.constructor, instance);
          });
        }

        return <StateContext.Provider value={childMap}>{props.children}</StateContext.Provider>;
      }}
    </StateContext.Consumer>
  );
}
