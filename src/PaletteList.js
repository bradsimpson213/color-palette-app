// React imports
import React from "react";
import { useHistory, Link } from "react-router-dom";
// Custom Component imports
import MiniPalette from "./MiniPalette";
// Style imports
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteListStyles";


const PaletteList = (props) => {
    let history = useHistory();
    const { palettes, classes } = props;

    const navToPalette = (id) => {
        history.push(`/palette/${id}`);
    };

    return (
        <div className={ classes.root }>
            <div className={ classes.container }>
                <nav className={ classes.nav }>
                    <h1>React Colors</h1>
                    <Link to="/palette/new">Create Palette</Link>
                </nav>
                <div className={ classes.palettes }>
                    { palettes.map(palette => (
                            <p>
                                <MiniPalette 
                                    {...palette }
                                    handleClick={ navToPalette }
                                />
                            </p>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default withStyles(styles)(PaletteList);