import React from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import useToggleState from "./hooks/useToggleState";
import chroma from "chroma-js";
import "./ColorBox.css"

const ColorBox = (props) => {
    const { name, background, paletteId, id, showLink } = props;
    const [ copy, toggleCopy ] = useToggleState(false)
    const isDarkColor = chroma(background).luminance() <= 0.08;
    const isLightColor = chroma(background).luminance() >= 0.6

    const changeCopyState = () => {
        toggleCopy(); 
        setTimeout(() => toggleCopy, 1500);
        // refactor at some point for callback
    };

    return (
        <CopyToClipboard text={ background } onCopy={ changeCopyState }>
            <div style={{ background }} className="ColorBox">
                <div 
                    style={{ background }} 
                    className={ `copy-overlay ${copy && "show"}` } 
                />
                <div className={ `copy-message ${copy && "show"}` }>
                    <h1>copied!</h1>
                    <p className={ isLightColor && "dark-text" }>{ background }</p>
                </div>
                <div className="copy-container">
                    <div className="box-content">
                        <span className={ isDarkColor && "light-text" }>{ name }</span>
                    </div>
                    <button className={ `copy-button ${ isLightColor && "dark-text" }`}>Copy</button>
                </div>
                { showLink && (
                <Link to={ `/palette/${paletteId}/${id}` } onClick={ (e) => e.stopPropagation() }>
                    <span className={ `see-more ${ isLightColor && "dark-text" }` }>More</span>    
                </Link>
                )}
            </div>
        </CopyToClipboard>
    )
};

export default ColorBox;