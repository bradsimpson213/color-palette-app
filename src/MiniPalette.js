import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
    root: {
       backgroundColor: "white",
       borderRadius: "5px",
       padding: "0.5rem",
       position: "relative",
       overflow: "hidden",
       "&hover": {
           cursor: "pointer"
       }
    },
    colors: {
        backgroundColor: "gray"
    },
    title: {
        display: "flex"
    },
    emoji: {

    }
}

const MiniPalette = (props) => {
    const { classes, paletteName, emoji } = props;
    return (
        <div className={ classes.root }>
            <div className={ classes.colors }>

            </div>
            <h5 className={ classes.title }>
                { paletteName } 
                <span className={ classes.emoji }>
                    { emoji }
                </span>
            </h5>
        </div>
    )
    
};

export default withStyles(styles)(MiniPalette);