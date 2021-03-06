// React imports
import React from "react";
// Material imports
import DeleteIcon from '@material-ui/icons/Delete';
// Style imports
import { withStyles } from "@material-ui/styles";
import styles from "./styles/MiniPaletteStyles";


const MiniPalette = (props) => {
    const { classes, paletteName, emoji, colors, handleClick, id, openDeleteDialog } = props;

    const deletePalette = (event) => {
        event.stopPropagation();
        openDeleteDialog(id)
    }


    return (
        <div 
            className={ classes.root }
            onClick={ () => handleClick(id) }>    
                <DeleteIcon 
                    className={ classes.deleteIcon } 
                    style={{ transition: 'all 0.3s ease-in-out' }}
                    onClick={ deletePalette }
                />
            <div className={ classes.colors }>
                { colors.map( color =>(
                    <div 
                        className={ classes.miniColor } 
                        style={{ backgroundColor: color.color }}
                        key={ color.name }
                    />
                ))}
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