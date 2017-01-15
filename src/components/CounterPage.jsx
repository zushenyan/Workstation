import React, { PropTypes, PureComponent } from "react";

export default class CounterPage extends PureComponent {
  render(){
    const {
      counter,
      onInc,
      onIncAsync,
      onDec,
      onDecAsync
    } = this.props;
    return (
      <div>
        {counter}
        <div><button onClick = {onInc}>inc</button></div>
        <div><button onClick = {onIncAsync}>inc async</button></div>
        <div><button onClick = {onDec}>dec</button></div>
        <div><button onClick = {onDecAsync}>dec async</button></div>
      </div>
    );
  }
}

CounterPage.propTypes = {
  counter:    PropTypes.number,
  onInc:      PropTypes.func,
  onIncAsync: PropTypes.func,
  onDec:      PropTypes.func,
  onDecAsync: PropTypes.func,
};

CounterPage.defaultProps = {
  counter:    0,
  onInc:      () => console.log("onInc"),
  onIncAsync: () => console.log("onIncAsync"),
  onDec:      () => console.log("onDec"),
  onDecAsync: () => console.log("onDecAsync"),
};
