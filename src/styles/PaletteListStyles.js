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
        overflow: "scroll",
        paddingRight: '30px'

    },
    utils: {
        position: 'absolute',
        top: 0,
        right: 0,
        display: 'flex',
        flexDirection: 'rows',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginRight: '20px',
        width: '250px',
        color: 'white'
        
    },
    container: {
        width: "65%",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        alignItems: "flex-end",
        justifyContent: 'center',
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
        gridTemplateColumns: "repeat(4, 25%)",
        gridGap: "2.3rem",
        [sizes.down('xl')]: {
            gridTemplateColumns: "repeat(3, 30%)",
        },
        [sizes.down("md")]:{
            gridTemplateColumns: "repeat(2, 50%)",
        },
        [sizes.down("xs")]:{
            gridTemplateColumns: "repeat(1, 100%)",
            gridGap: '1.4rem'
        }
    },
    mainTitle: {
        fontSize: '4.5rem',
        fontWeight: 'bold',
        textShadow: "-3px 3px 0 #000, 3px 3px 0 #000, 3px -3px 0 #000, -3px -3px 0 #000",
        margin: '30px 30px',
        [sizes.down("xs")]:{
            fontSize: '3.5rem',
            margin: '10px 1px',

        }
    },
    newLink: {
        fontsize: '3.0rem',
        fontWeight: "bold",
        marginRight: '1.5rem',
        [sizes.down("xs")]:{
           margin: '0 0 0 10px'
        }
    },
    newPaletteBox: {
        backgroundColor: "black",
        border: "1px solid black",
        borderRadius: "15px",
        height: '250px',
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        opacity: 0.5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'       
    },
    newPaletteBoxTitle: {
        color: 'white',
        fontFamily: 'IndieFlower',
        fontWeight: 'bold',
        fontSize: '2rem'
    },
    newPaletteBoxIcon: {
        color: 'white',
        fontSize: '3rem',
        margin: '10px 0 10px 0'
    }
};

export default styles;