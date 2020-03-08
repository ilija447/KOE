import React, { Component } from "react";
import Event from "./components/Event";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <div>
        <Event
          // time={Date(Date.now())}
          time={Date.now()}
          name={"Tenis"}
          description={
            "Potreban mi je partner za tenis danas oko 15h. Zatrazio bih fsl;jgdl;fjdf;gjdgdfjgkldfgjdf;gjfpgeptieroptiertpoeritopertierpotierpotieroptierptierpotiertpoeritperitperiter ffdddddddddddddddddddddwwwwwwwwwwwwwwer"
          }
        />
      </div>
    );
  }
}
