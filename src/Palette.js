import React, { useState } from "react"
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";
import "./Palette.css";


const Palette = (props) => {
    const [level, setLevel] = useState(500);
    const [format, setFormat] = useState("hex");
    const { colors, paletteName, emoji } = props.palette;

    const changeFormat = (value) => {
        setFormat(value);
    };
   
    const colorBoxes = colors[level].map(color => {
        return <ColorBox 
            background={ color[format] } 
            name={ color.name } 
            key={ color.id }/>
    });

    return (
        <div className="Palette">
            <NavBar 
                level={ level } 
                setLevel= { setLevel }
                handleChange= { changeFormat }
            />
            <div className="Palette-colors">
            { colorBoxes }
            </div>
            <footer className="Palette-footer">
                { paletteName }
                <span className="Palette-emoji">{ emoji }</span>
            </footer>
        </div>
    )
};

export default Palette;