// React imports
import React from "react";
// Drag and Drop HOC imports
import { SortableElement } from 'react-sortable-hoc';
// Material Component imports
import DeleteIcon from "@material-ui/icons/Delete";
// Styles imports
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        width: "20%",
        height: '25%',
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        "&:hover svg": {
            color: "white",
            transform: 'scale(1.5)'
        }
    },
    boxContent: {
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
        padding: "10px",
        color: "rgba(0, 0, 0, 0.5)",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
        display: 'flex',
        justifyContent: "space-between"
    },
    deleteIcon: {
        transition: "all 0.3s ease-in-out"
    }
})

const DraggableColorBox = (props) => {
    const classes = useStyles()
    const { color, handleDelete } = props;
    return (
        <div 
            className={ classes.root } 
            style={{ backgroundColor: color.color }}
        >
            <div className={ classes.boxContent }>
                <span>{ color.name }</span>
                <DeleteIcon 
                    className= { classes.deleteIcon }
                    onClick={ handleDelete } />
            </div>
       
        </div>
    )
};

export default SortableElement(DraggableColorBox);