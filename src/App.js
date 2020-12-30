import React from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

const App = () => {
  console.log(generatePalette(seedColors[4]));
  return (
    <div className="App">
      <Palette {...seedColors[4]}/>
    </div>
  );
}

export default App;
