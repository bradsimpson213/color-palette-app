import React, { useState } from "react"
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";
import "./Palette.css";


const Palette = (props) => {
    const [level, setLevel] = useState(500);
    const [format, setFormat] = useState("hex");
   
    const changeFormat = (value) => {
        setFormat(value);
    };


    const { colors } = props.palette;
    const colorBoxes = colors[level].map(color => {
        return <ColorBox background={ color[format] } name={ color.name } />
    })
    return (
        <div className="Palette">
            <NavBar 
                level={ level } 
                setLevel= { setLevel }
                handleChange= { changeFormat }
            />
            {/* Navbar goes here */}
            <div className="Palette-colors">
            { colorBoxes }
            </div>
            {/* footer goes here */}
        </div>
    )
};

export default Palette;