// React imports
import React from "react";
import { useHistory, Link } from "react-router-dom";
// Custom Component imports
import MiniPalette from "./MiniPalette";
// Style imports
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteListStyles";
import { v4 as uuid } from 'uuid';


const PaletteList = (props) => {
    let history = useHistory();
    const { palettes, classes, removePalette } = props;

    const navToPalette = (id) => {
        history.push(`/palette/${id}`);
    };

    return (
        <div className={ classes.root }>
            <div className={ classes.container }>
                <nav className={ classes.nav }>
                    <h1 className={ classes.mainTitle }>React Colors</h1>
                    <Link to="/palette/new">Create Palette</Link>
                </nav>
                <div className={ classes.palettes }>
                    { palettes.map(palette => (
                            <div>
                                <MiniPalette 
                                    { ...palette }
                                    key={ uuid() }
                                    handleClick={ navToPalette }
                                    removePalette={ removePalette }
                                />
                            </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default withStyles(styles)(PaletteList);