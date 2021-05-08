import React from "react";
import Heading from "./Heading"; // remember - relative path
import List from "./List";

const App = function () {
  return (
    <div>
      <Heading />
      <List />
      <List />
    </div>
  );
};

export default App;
