import sizes from "./MediaSizes";
import BackgroundSvg from "../assets/Gray-Background.svg";

const styles = {
    "@global": {
        ".fade-exit": {
            opacity: 1
        },
        ".fade-exit-active": {
            opacity: 0,
            transition: "opacity 1000ms ease-out"
        },
        fontFamily: 'IndieFlower'
    },
    root: {
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundColor: "#1f29ee",
        /* background by SVGBackgrounds.com */
        backgroundImage: `url(${BackgroundSvg})`,
        backgroundSize: "cover",
        overflow: "scroll"

    },
    container: {
        width: "60%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        [sizes.down("xl")]:{
            width: '80%'
        },
        [sizes.down("xs")]:{
            width: '75%'
        }       
    }, 
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        "& a": {
            color: "white"
        }
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "2.5rem",
        [sizes.down("md")]:{
            gridTemplateColumns: "repeat(2, 50%)",
        },
        [sizes.down("xs")]:{
            gridTemplateColumns: "repeat(1, 100%)",
            gridGap: '1.4rem'
        }
    },
    mainTitle: {
        fontSize: "3.7rem",
        fontWeight: 'bold',
        textShadow: "-2px 2px 0 #000, 2px 2px 0 #000, 2px -2px 0 #000, -2px -2px 0 #000"
    },
    newLink: {
        fontsize: '3.0rem',
        fontWeight: "bold",
        marginRight: '1.5rem',
        [sizes.down("xs")]:{
           margin: '0 0 0 10px'
        }
    }
};

export default styles;