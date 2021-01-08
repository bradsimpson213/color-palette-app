// React imports
import React from "react";
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
    }
})

const DraggableColorBox = (props) => {
    const classes = useStyles()
    return (
        <div 
            className={ classes.root } 
            style={{ backgroundColor: props.color }}
        >
            {props.color}
        </div>
    )
};

export default DraggableColorBox;