import React, { useState } from "react"
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";
import PaletteFooter from "./PaletteFooter";
import "./Palette.css";


const Palette = (props) => {
    const [level, setLevel] = useState(500);
    const [format, setFormat] = useState("hex");
    const { colors, paletteName, emoji, id } = props.palette;

    const changeFormat = (value) => {
        setFormat(value);
    };
   
    const colorBoxes = colors[level].map(color => {
        return <ColorBox 
            background={ color[format] } 
            name={ color.name } 
            key={ color.id }
            id={ color.id }
            paletteId={ id }
            showLink={ true } />
    });

    return (
        <div className="Palette">
            <NavBar 
                level={ level } 
                setLevel= { setLevel }
                handleChange= { changeFormat }
                multiColor={ true }
            />
            <div className="Palette-colors">
            { colorBoxes }
            </div>
            <PaletteFooter 
                paletteName={ paletteName } 
                emoji={ emoji } 
            />
        </div>
    )
};

export default Palette;