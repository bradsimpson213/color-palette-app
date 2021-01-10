// React imports
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
// Custom Component imports
import PaletteList from './PaletteList';
import Palette from "./Palette";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";
// Data/Function imports
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

const App = () => {
  const [palettes,  setPalettes] = useState(seedColors);
  const findPalette = (id) => {
    return palettes.find((palette) => palette.id === id);
  };

  const savePalette = (newPalette) => {
    setPalettes([...palettes, newPalette ])
  };

  return (
    <Switch>
      <Route
        exact
        path="/palette/new"
        render={ ()=> <NewPaletteForm savePalette={ savePalette } palettes={ palettes }/>} 
      />
      <Route 
        exact 
        path="/"
        render={ () => <PaletteList palettes={ palettes } /> }
      />
      <Route 
        exact 
        path="/palette/:id" 
        render={ routeProps => 
          <Palette 
            palette={ generatePalette(
              findPalette(routeProps.match.params.id)) }
          />
        }
      />
      <Route
        exact 
        path="/palette/:paletteId/:colorId"
        render= { routeProps => (
          <SingleColorPalette
            colorId={ routeProps.match.params.colorId }
            palette={ generatePalette(
              findPalette(routeProps.match.params.paletteId)
            )}
          />
        )}
      />
    </Switch>
  )
};

export default App;
