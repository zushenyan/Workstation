import React, { PropTypes, PureComponent } from "react";

export default class ApiPage extends PureComponent {
  render(){
    const {
      data,
      error,
      requestState,
      onFetch
    } = this.props;
    return (
      <div>
        <button onClick = {onFetch}>fetch data</button>
        <div>
          <h3>requestState</h3>
          {requestState}
        </div>
        <div>
          <h3>data</h3>
          {data && data[0].email}
        </div>
        <div>
          <h3>error</h3>
          {error}
        </div>
      </div>
    );
  }
}

ApiPage.propTypes = {
  data:         PropTypes.any,
  error:        PropTypes.any,
  requestState: PropTypes.string,
  onFetch:      PropTypes.func
};

ApiPage.defaultProps = {
  data:         null,
  error:        null,
  requestState: "",
  onFetch:      () => console.log("onFetch")
};
