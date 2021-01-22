// React imports
import React from 'react';
// Drag and Drop HOC imports
import { SortableElement } from 'react-sortable-hoc';
// Material Component imports
import DeleteIcon from '@material-ui/icons/Delete';
// Styles imports
import { withStyles } from '@material-ui/styles';
import styles from "./styles/DraggableColorBoxStyles";


const DraggableColorBox = (props) => {
    const { color, handleDelete, classes } = props;
    return (
        <div 
            className={ classes.root } 
            style={{ backgroundColor: color.color }}
        >
            <div className={ classes.boxContent }>
                <span>{ color.name }</span>
                <DeleteIcon 
                    className= { classes.deleteIcon }
                    onClick={ () => handleDelete(color.color) } />
            </div>
       
        </div>
    )
};

export default SortableElement(withStyles(styles)(DraggableColorBox));