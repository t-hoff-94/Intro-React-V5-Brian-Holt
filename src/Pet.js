import React from "react";

export default function Pet({ name, animal, breed }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{breed}</h2>
      <h3>{animal}</h3>
    </div>
  );
}
