import React, { PureComponent } from "react";
import { Link } from "react-router";
import * as PATHS from "constants/paths";

export default class MainPage extends PureComponent {
  render(){
    return (
      <div>
        <div>
          <h1>Navigator</h1>
          <ul>
            <li><Link to = {PATHS.HELLO_WORLD_PAGE}>hello world</Link></li>
            <li><Link to = {PATHS.ASSETS_PAGE}>test assets bundling</Link></li>
            <li><Link to = {PATHS.API_PAGE}>test api call</Link></li>
            <li><Link to = {PATHS.COUNTER_PAGE}>counter</Link></li>
          </ul>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
