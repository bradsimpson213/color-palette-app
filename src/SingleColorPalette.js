import React, { useState } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./NavBar";
import PaletteFooter from "./PaletteFooter";


const SingleColorPalette = (props) => {
    const [format, setFormat] = useState("hex");
    const { paletteName, emoji } = props.palette;

    const changeFormat = (value) => {
        setFormat(value);
    };

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
            <Navbar 
                handleChange={ changeFormat }
                multiColor={ false }
            />
            <h1>Single Color Palette</h1>
            <div className="Palette-colors">
            { shades.map( color => (
                <ColorBox 
                    key={ color.id }
                    name={ color.name }
                    background={ color[format] }
                    showLink={ false } 
                />
            ))}
            </div>
            <PaletteFooter 
                paletteName={ paletteName } 
                emoji={ emoji } 
            />
        </div>
    )
};

export default SingleColorPalette;