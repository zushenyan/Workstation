import { connect } from "react-redux";
import ApiPage from "components/ApiPage";
import { fetchData } from "actions/Api";

const mapStateToProps = (state, ownProps) => ({
  data:        state.getIn(["api", "data", "data"]),
  error:       state.getIn(["api", "data", "error"]),
  requestState: state.getIn(["api", "data", "requestState"])
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onFetch: () => dispatch(fetchData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApiPage);
