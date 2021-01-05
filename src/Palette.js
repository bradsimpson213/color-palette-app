import React, { useState } from "react"
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";
import PaletteFooter from "./PaletteFooter";
import { withStyles } from  "@material-ui/styles";
import "./Palette.css";

const styles = {
    Palette: {
        height: "100vh",
        display: "flex",
        flexDirection: "column"
    },
    PaletteColors: {
        height: "90%"
    }
};

const Palette = (props) => {
    const [level, setLevel] = useState(500);
    const [format, setFormat] = useState("hex");
    const { colors, paletteName, emoji, id } = props.palette;
    const { classes } = props;

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
            showingFullPalette={ true } />
    });

    return (
        <div className={ classes.Palette }>
            <NavBar 
                level={ level } 
                setLevel= { setLevel }
                handleChange= { changeFormat }
                multiColor={ true }
            />
            <div className={ classes.PaletteColors }>
            { colorBoxes }
            </div>
            <PaletteFooter 
                paletteName={ paletteName } 
                emoji={ emoji } 
            />
        </div>
    )
};

export default withStyles(styles)(Palette);