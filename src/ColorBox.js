import React, { useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import useToggleState from "./hooks/useToggleState";
import "./ColorBox.css"

const ColorBox = (props) => {
    const { name, background } = props;
    const [ copy, toggleCopy ] = useToggleState(false)

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
                    <p>{ background }</p>
                </div>
                <div className="copy-container">
                    <div className="box-content">
                        <span>{ name }</span>
                    </div>
                    <button className="copy-button">Copy</button>
                </div>
                <span className="see-more">More</span>
            </div>
        </CopyToClipboard>
    )
};

export default ColorBox;