import React, { Component } from "react";

export default class ApiPage extends Component {
  constructor(){
    super();
    this.onFetchButtonClick = this.onFetchButtonClick.bind(this);
  }

  render(){
    return (
      <div>
        <button onClick = {this.onFetchButtonClick}>fetch api(see console for result)</button>
      </div>
    );
  }

  onFetchButtonClick(){
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("load", data => console.log(data));
    xhr.open("GET", "http://localhost:8081/users");
    xhr.send();
  }
}
