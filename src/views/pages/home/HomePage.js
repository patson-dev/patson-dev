import React, { Component } from "react";
import DevInfo from "./DevInfo";

export default class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="">
          <h1 className="display-3 font-major text-primary">WEB DESIGN &amp; DEV.</h1>
          <p className="mt-1 mb-2 font-mono">&mdash; by Patson Nyandoro</p>
        </div>
        <div className="divider divider-left">
          <div className="divider-text mt-2">
            <h3>Meet Patson</h3>
          </div>
        </div>
        <DevInfo />
      </React.Fragment>
    );
  }
}
