import React, { Component } from "react";
import Event from "./components/Event";
import Button from "@material-ui/core/Button";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <div>
        <Event
          time={100}
          name={"Tenis"}
          description={"Potreban mi je partner za tenis danas oko 15h"}
        />
      </div>
    );
  }
}
