// React imports
import React from "react";
import { useHistory, Link } from "react-router-dom";
// Custom Component imports
import MiniPalette from "./MiniPalette";
// Util imports
import { v4 as uuid } from 'uuid';
// Style imports
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteListStyles";



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
                <TransitionGroup className={ classes.palettes }>
                { palettes.map(palette => (
                    <CSSTransition
                        key={ palette.id }
                        classNames="fade"
                        timeout={1000}
                    >
                            <MiniPalette 
                                { ...palette }
                                key={ uuid() }
                                handleClick={ navToPalette }
                                removePalette={ removePalette }
                            />
                    </CSSTransition>
                ))}
                </TransitionGroup>
            </div>
        </div>
    )
};

export default withStyles(styles)(PaletteList);