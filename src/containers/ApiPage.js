import { connect } from "react-redux";
import ApiPage from "components/ApiPage";
import { fetchData } from "actions/Api";

const mapStateToProps = (state, ownProps) => ({
  data:        state.api.data.data,
  error:       state.api.data.error,
  requestState: state.api.data.requestState
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onFetch: () => dispatch(fetchData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApiPage);
