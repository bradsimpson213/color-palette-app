import React from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";

const PaletteList = (props) => {

    const { palettes } = props;

    return (
        <div>
            
            <h1>React Colors</h1>
            { palettes.map(palette => (
                <p>
                    <MiniPalette {...palette } />
                    {/* <Link to={`/palette/${palette.id}`}>{ palette.paletteName }</Link> */}
                </p>
            ))}
        </div>
    )
};

export default PaletteList;