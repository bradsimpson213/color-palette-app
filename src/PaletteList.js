import React from "react";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";

const styles = {
    root: {
        backgroundColor: "blue",
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
    }, 
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        color: "white"
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "5%",

    }
};

const PaletteList = (props) => {

    const { palettes, classes } = props;

    return (
        <div className={ classes.root }>
            <div className={ classes.container }>
                <nav className={ classes.nav }>
                    <h1>React Colors</h1>
                </nav>
                <div className={ classes.palettes }>
                    { palettes.map(palette => (
                            <p>
                                <MiniPalette {...palette } />
                            </p>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default withStyles(styles)(PaletteList);