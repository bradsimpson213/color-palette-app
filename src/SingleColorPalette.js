import React, { useState } from "react";
import ColorBox from "./ColorBox";

const SingleColorPalette = (props) => {
    // const [] = useState()
        
    const gatherShades = (palette, colorToFilter ) => {
        let shades = [];
        let allColors = palette.colors;

        for (let key in allColors) {
            shades = shades.concat(
                allColors[key].filter( color => color.id === colorToFilter )
            )
        }
        return shades.slice(1);
    };

    const shades = gatherShades(props.palette, props.colorId);

    return (
        <div className="Palette">
            <h1>Single Color Palette</h1>
            <div className="Palette-colors">
            { shades.map( color => (
                <ColorBox 
                    key={ color.id }
                    name={ color.name }
                    background={ color.hex }
                    showLink={ false } 
                />
            ))}
            </div>
        </div>
    )
};

export default SingleColorPalette;