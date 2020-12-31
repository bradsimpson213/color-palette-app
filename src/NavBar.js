import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./NavBar.css";


const Navbar = (props) => {
    const { level, setLevel } = props;

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
        </header>
    )
}

export default Navbar;
