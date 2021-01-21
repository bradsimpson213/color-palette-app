// React imports
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
// Custom Component imports
import PaletteList from './PaletteList';
import Palette from './Palette';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import Page from './Page';
// Data/Function imports
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
// Transition omports
import { TransitionGroup, CSSTransition } from "react-transition-group";
// Stye imports
import './App.css';

const App = () => {
 
  const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
  const [palettes,  setPalettes] = useState(savedPalettes || seedColors);

  const findPalette = (id) => {
    return palettes.find((palette) => palette.id === id);
  };

  const savePalette = (newPalette) => {
    setPalettes([...palettes, newPalette ]);
  };  

  const removePalette = (id) => {
    setPalettes( palettes.filter( palette => palette.id !== id ));
  };

  // useEffect will sync localStorage each time state of palettes is changed
  useEffect( () => {
    window.localStorage.setItem("palettes", JSON.stringify(palettes));
  },[palettes]);

  return (
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition
            classNames="fade"
            timeout={ 500 }
            key={ location.key }
          >
            <Switch location={ location }>
            <Route
              exact
              path="/palette/new"
              render={ ()=> (
                <Page>
                  <NewPaletteForm 
                    savePalette={ savePalette } 
                    palettes={ palettes }
                  />
                </Page>
              )}
            />
            <Route 
              exact 
              path="/"
              render={ () => (
                <Page>
                  <PaletteList 
                    palettes={ palettes } 
                    removePalette={ removePalette }
                  /> 
                </Page>
              )}
            />
            <Route 
              exact 
              path="/palette/:id" 
              render={ routeProps => (
                <Page>
                  <Palette 
                    palette={ generatePalette(
                      findPalette(routeProps.match.params.id)) }
                  />
                </Page>
              )}
            />
            <Route
              exact 
              path="/palette/:paletteId/:colorId"
              render= { routeProps => (
                <Page>
                  <SingleColorPalette
                    colorId={ routeProps.match.params.colorId }
                    palette={ generatePalette(
                      findPalette(routeProps.match.params.paletteId)
                    )}
                  />
                </Page>
              )}
            />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      )}
    />
  )
};

export default App;
