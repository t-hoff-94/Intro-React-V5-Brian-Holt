import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Belle",
      animal: "Dog",
      breed: "Shitsoo"
    }),
    React.createElement(Pet, {
      name: "Tucker",
      animal: "Dog",
      breed: "Shitsoo"
    }),
    React.createElement(Pet, {
      name: "Tink",
      animal: "Sugar Glider",
      breed: "FlyingSquirrel"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
