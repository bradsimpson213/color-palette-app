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
import styles from "./styles/NavbarStyles";


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
                <Link to="/">React Colors 🎨</Link>
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
                                startPoint={ 500 }
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
