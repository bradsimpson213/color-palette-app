import React, { useState } from "react"
import ColorBox from "./ColorBox";
import "./Palette.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Palette = (props) => {
    const [level, setLevel] = useState(500);
    const { colors } = props.palette;
    const colorBoxes = colors[level].map(color => {
        return <ColorBox background={ color.hex } name={ color.name } />
    })
    return (
        <div className="Palette">
            <Slider default={ level } min={ 100 } max={ 900 } step= { 100 } onAfterChange={ setLevel } />
            {/* Navbar goes here */}
            <div className="Palette-colors">
            { colorBoxes }
            </div>
            {/* footer goes here */}
        </div>
    )
};

export default Palette;