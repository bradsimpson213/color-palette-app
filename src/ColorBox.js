import React from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import useToggleState from "./hooks/useToggleState";
import { withStyles } from  "@material-ui/styles";
import styles from "./styles/ColorBoxStyles";


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
                    className={ `${ classes.copyOverlay} ${copy && classes.showOverlay}` } 
                />
                <div className={ `${classes.copyMessage} ${copy && classes.showCopyMessage}` }>
                    <h1>copied!</h1>
                    <p className={ classes.copyText}>
                        { background }
                    </p>
                </div>
                <div>
                    <div className={ classes.boxContent }>
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