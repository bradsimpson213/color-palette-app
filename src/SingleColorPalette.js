import React, { useState } from "react";
import { Link } from "react-router-dom";
import ColorBox from "./ColorBox";
import Navbar from "./NavBar";
import PaletteFooter from "./PaletteFooter";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteStyles";


const SingleColorPalette = (props) => {
    const [format, setFormat] = useState("hex");
    const { paletteName, emoji, id } = props.palette;
    const { classes } = props;

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
        <div className={ classes.Palette }>
            <Navbar 
                handleChange={ changeFormat }
                multiColor={ false }
            />
            <div className={ classes.PaletteColors }>
            { shades.map( color => (
                <ColorBox 
                    key={ color.name }
                    name={ color.name }
                    background={ color[format] }
                    showFullPalette={ false } 
                />
            ))}
                <div className={ classes.goBack }> 
                    <Link to={`/palette/${id}`}>
                        GO BACK
                    </Link>
                </div>
            </div>
            <PaletteFooter 
                paletteName={ paletteName } 
                emoji={ emoji } 
            />
        </div>
    )
};

export default withStyles(styles)(SingleColorPalette);