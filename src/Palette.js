import React from "react"
import ColorBox from "./ColorBox";
import "./Palette.css";

const Palette = (props) => {
    const colorBoxes = props.colors.map(color => {
        return <ColorBox background={ color.color } name={ color.name } />
    })
    return (
        <div className="Palette">
            {/* Navbar goes here */}
            <div className="Palette-colors">
            { colorBoxes }
            </div>
            {/* footer goes here */}
        </div>
    )
}

export default Palette;