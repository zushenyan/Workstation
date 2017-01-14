import React, { PropTypes, PureComponent } from "react";
import cx from "classnames";
import foobar from "mock-data/foobar.json";

import style from "./HelloWorldPage.scss";

export default class HelloWorldPage extends PureComponent {
  render(){
    const {
      toggle,
      text
    } = this.props;
    const className = cx({
      [style["title"]]:  true,
      [style["toggle"]]: toggle
    });
    console.log(foobar);
    return (
      <div>
        <h1 className = {className}>{text}</h1>
      </div>
    );
  }
}

HelloWorldPage.propTypes = {
  toggle: PropTypes.bool,
  text:   PropTypes.string
};

HelloWorldPage.defaultProps = {
  toggle: false,
  text:   "Hello World"
};
