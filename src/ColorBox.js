// Reac imports
import React from 'react';
import { Link } from 'react-router-dom';
import useToggleState from './hooks/useToggleState';
import useTimeout from './hooks/useTimeout';
// Util import
import { CopyToClipboard } from 'react-copy-to-clipboard';
// Style imports
import { withStyles } from  '@material-ui/styles';
import styles from './styles/ColorBoxStyles';
import clsx from 'clsx';


const ColorBox = (props) => {
    const { name, background, paletteId, id, showingFullPalette, classes } = props;
    const [ copy, toggleCopy ] = useToggleState(false)
   
    useTimeout(() => toggleCopy, 1500);
 
    return (
        <CopyToClipboard text={ background } onCopy={ toggleCopy }>
            <div style={{ background }} className={ classes.ColorBox }>
                <div 
                    style={{ background }} 
                    className={ clsx(classes.copyOverlay, {
                        [classes.showOverlay] : copy
                    }) } 
                />
                <div className={ clsx(classes.copyMessage, {
                    [classes.showCopyMessage] : copy 
                    }) }
                >
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