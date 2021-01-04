import React from "react";

const PaletteFooter = (props) => {
    const { paletteName, emoji } = props;
    return (
        <footer className="Palette-footer">
            { paletteName }
            <span className="Palette-emoji">{ emoji }</span>
        </footer>
    )
};

export default PaletteFooter;