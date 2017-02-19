import { connect } from "react-redux";
import CounterPage from "components/CounterPage";
import {
  inc,
  incAsync,
  dec,
  decAsync
} from "actions/Counter";

const mapStateToProps = (state, ownProps) => ({
  counter: state.counter.counter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onInc:      () => dispatch(inc()),
  onIncAsync: () => dispatch(incAsync()),
  onDec:      () => dispatch(dec()),
  onDecAsync: () => dispatch(decAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterPage);
