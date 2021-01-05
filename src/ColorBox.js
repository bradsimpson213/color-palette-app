import React from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import useToggleState from "./hooks/useToggleState";
import chroma from "chroma-js";
import { withStyles } from  "@material-ui/styles";
import "./ColorBox.css"

const styles = {
    ColorBox: {
        width: "20%",
        height: props =>
            props.showingFullPalette ? "25%" : "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        "&:hover button": {
            opacity: "1",
            transition: "0.7s",
        }
    },
    copyText: {
        color: props => 
            chroma(props.background).luminance() >= 0.6 ? "black" : "white"
    },
    colorName: {
        color: props =>
            chroma(props.background).luminance() <= 0.08 ? "white" : "black"
    },
    seeMore: {
        background: "rgba(255, 255, 255, 0.3)",
        position: "absolute",
        border: "none",
        right: "0px",
        bottom: "0px",
        color: props => 
            chroma(props.background).luminance() >= 0.6 ? "black" : "white",
        width: "60px",
        height: "30px",
        textAlign: "center",
        lineHeight: "30px",
        textTransform: "uppercase" 
    },
    copyButton: {
        width: "100px",
        height: "30px",
        position: "absolute",
        display: "inline-block",
        top: "50%",
        left: "50%",
        marginLeft: "-50px",
        marginTop: "-15px",
        textAlign: "center",
        outline: "none",
        background: "rgba(255, 255, 255, 0.3)",
        fontSize: "1rem",
        lineHeight: "30px",
        color: props =>
            chroma(props.background).luminance() >= 0.6 ? "black" : "white",
        textTransform: "uppercase",
        textDecoration: "none",
        border: "none",
        opacity: "0"
    }
}


const ColorBox = (props) => {
    const { name, background, paletteId, id, showingFullPalette, classes } = props;
    const [ copy, toggleCopy ] = useToggleState(false)
   
    const changeCopyState = () => {
        toggleCopy(); 
        setTimeout(() => toggleCopy, 1500);
        // refactor at some point for callback
    };

    return (
        <CopyToClipboard text={ background } onCopy={ changeCopyState }>
            <div style={{ background }} className={ classes.ColorBox }>
                <div 
                    style={{ background }} 
                    className={ `copy-overlay ${copy && "show"}` } 
                />
                <div className={ `copy-message ${copy && "show"}` }>
                    <h1>copied!</h1>
                    <p className={ classes.copyText}>
                        { background }
                    </p>
                </div>
                <div className="copy-container">
                    <div className="box-content">
                        <span className={ classes.colorName }>{ name }</span>
                    </div>
                    <button className={ classes.copyButton }>Copy</button>
                </div>
                { showingFullPalette && (
                <Link to={ `/palette/${paletteId}/${id}` } onClick={ (e) => e.stopPropagation() }>
                    <span className={ classes.seeMore }>More</span>    
                </Link>
                )}
            </div>
        </CopyToClipboard>
    )
};

export default withStyles(styles)(ColorBox);