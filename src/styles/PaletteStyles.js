
import sizes from "./MediaSizes";

const styles = {
    Palette: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "black"
    },
    PaletteColors: {
        height: "90%"
    },
    goBack: {
        width: "20%",
        height: "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        opacity: "1",
        backgroundColor: "black",
        "& a":{
            width: "100px",
            height: "30px",
            position: "absolute",
            display: "inline-block",
            top: "50%",
            left: "50%",
            marginLeft: "-50px",
            marginTop: "-15px",
            textAlign: "center",
            outline: "none",
            background: "rgba(255, 255, 255, 0.3)",
            fontSize: "1rem",
            lineHeight: "30px",
            color: "white",
            textTransform: "uppercase",
            textDecoration: "none",
            border: "none"
        },
        [sizes.down("lg")]: {
            width: "25%",
            height: "33.3333%"
        },
        [sizes.down("md")]: {
            width: "50%",
            height: "20%"
        },
        [sizes.down("xs")]: {
            width: "100%",
            height: "10%"
        }
    }
    
};

export default styles;