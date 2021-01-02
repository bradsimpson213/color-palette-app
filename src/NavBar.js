import React, { useState } from "react";
import useToggleState from "./hooks/useToggleState";
import Slider from "rc-slider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import "rc-slider/assets/index.css";
import "./NavBar.css";


const Navbar = (props) => {
    const { level, setLevel } = props;
    const [format, setFormat] = useState("hex");
    const [open, toggleOpen] = useToggleState(false);

    const changeFormat = (e) => {
        setFormat(e.target.value );
        props.handleChange(e.target.value);
        toggleOpen()
    };

    return (
        <header className="Navbar">
            <div className="logo">
                <a href="/">colorpickerapp</a>
            </div>
            <div className="slider-container">
                <span>Level: { level }</span>
                <div className="slider">
                    <Slider 
                            default={ level } 
                            min={ 100 } 
                            max={ 900 } 
                            step= { 100 } 
                            onAfterChange={ setLevel }
                    />
                </div>
            </div>
            <div className="select-container">
                <Select value={ format } onChange={ changeFormat }>
                    <MenuItem value="hex">HEX - #ffffff</MenuItem>
                    <MenuItem value="rgb">RGB - rbg(255,255,255)</MenuItem>
                    <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
                </Select>
            </div>
            <Snackbar 
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                open={ open }
                autoHideDuration={3000}
                message={ <span id="message-id">Format Changed to { format.toUpperCase() }!</span>}
                ContentProps={{ "aria-describedby": "message-id"}}
                onClose={ toggleOpen }
                action={ [
                    <IconButton 
                        onClick= { toggleOpen }
                        color="inherit"
                        key="close"
                        aria-label="close-snackbar"
                    >
                        <CloseIcon />
                    </IconButton>
                ]}
            />
        </header>
    )
}

export default Navbar;
