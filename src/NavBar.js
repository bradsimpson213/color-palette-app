import React, { useState } from "react";
import { Link } from "react-router-dom";
import useToggleState from "./hooks/useToggleState";
import Slider from "rc-slider";
import { withStyles } from "@material-ui/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import "rc-slider/assets/index.css";
// import "./NavBar.css";


const styles= {
    Navbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '6vh'
    },
    logo: {
        marginRight: '15px',
        padding: '0 13px',
        fontSize: '22px',
        backgroundColor: '#eceff1',
        fontFamily: 'Roboto',
        textDecoration: 'none',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        "& a": {
            textDecoration: 'none',
            color: 'black'
        }
    },
    slider: {
        width: '340px',
        margin: '0 10px',
        display: 'inline-block',
        "& .rc-slider-rail": {
            height: '8px'
        },
        "& .rc-slider-track": {
            backgroundColor: 'transparent'
        },
        " & .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover": {
            backgroundColor: 'green',
            outline: 'none',
            border: '2px solid black',
            boxShadow: 'none',
            width: '13px',
            height: '13px',
            marginLeft: '-7px',
            marginTop: '-3px'
        }
    },
    selectContainer: {
        marginLeft: 'auto',
        marginRight: '1rem'
    }
};

const Navbar = (props) => {
    const { level, setLevel, multiColor, classes } = props;
    const [format, setFormat] = useState("hex");
    const [open, toggleOpen] = useToggleState(false);

    const changeFormat = (e) => {
        setFormat(e.target.value );
        props.handleChange(e.target.value);
        toggleOpen()
    };

    return (
        <header className={ classes.Navbar }>
            <div className={ classes.logo }>
                <Link to="/">colorpickerapp🎨</Link>
            </div>
                { multiColor && (
                    <div>
                        <span>Level: { level }</span>
                        <div className={ classes.slider }>
                            <Slider 
                                default={ level } 
                                min={ 100 } 
                                max={ 900 } 
                                step= { 100 } 
                                onAfterChange={ setLevel }
                            />
                        </div>
                    </div>
                )}
            <div className={ classes.selectContainer }>
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

export default withStyles(styles)(Navbar);
