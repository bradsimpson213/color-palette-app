import React, { useState } from "react"
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";
import PaletteFooter from "./PaletteFooter";
import { withStyles } from  "@material-ui/styles";
import styles from "./styles/PaletteStyles";


const Palette = (props) => {
    const [level, setLevel] = useState(500);
    const [format, setFormat] = useState("hex");
    const { colors, paletteName, emoji, id } = props.palette;
    const { classes } = props;

    const changeFormat = (value) => {
        setFormat(value);
    };

    return (
        <div className={ classes.Palette }>
            <NavBar 
                level={ level } 
                setLevel= { setLevel }
                handleChange= { changeFormat }
                multiColor={ true }
            />
            <div className={ classes.PaletteColors }>
                {colors[level].map(color => {
                    return <ColorBox 
                                background={ color[format] } 
                                name={ color.name } 
                                key={ color.id }
                                id={ color.id }
                                paletteId={ id }
                                showingFullPalette={ true } 
                            />
                })}
            </div>
            <PaletteFooter 
                paletteName={ paletteName } 
                emoji={ emoji } 
            />
        </div>
    )
};

export default withStyles(styles)(Palette);