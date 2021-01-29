import sizes from "./MediaSizes";

const styles= {
    Navbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '6vh',
        backgroundColor: 'black'
    },
    logo: {
        marginRight: '15px',
        padding: '0 13px',
        fontSize: '28px',
        fontWeight: 'bold',
        backgroundColor: 'black',
        fontFamily: 'IndieFlower',
        textDecoration: 'none',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        "& a": {
            textDecoration: 'none',
            color: 'white'
        },
        [sizes.down("xs")]: {
            display: "none"
        }
    },
    slider: {
        width: '340px',
        margin: '0 10px 0 25px',
        display: 'inline-block',
        "& .rc-slider-rail": {
            height: '8px'
        },
        "& .rc-slider-track": {
            backgroundColor: 'transparent'
        },
        " & .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover": {
            backgroundColor: 'blue',
            outline: 'gray',
            border: '2px solid white',
            boxShadow: 'none',
            width: '13px',
            height: '13px',
            marginLeft: '-3px',
            marginTop: '-3px'
        },
        [sizes.down("sm")]: {
            width: "150px"
        }
    },
    sliderLabel: {
        color: 'white',
        fontWeight: "bold",
        fontSize: "18px"
    },
    selectContainer: {
        marginLeft: 'auto',
        marginRight: '1rem',
        backgroundColor: '#eceff1'
    },
    selectInput: {
        textAlign: 'center',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        backgroundColor: '#eceff1',
        fontFamily: 'IndieFlower',
        marginLeft: '1rem'
    },
    button: {
        margin: '0 1rem',
        fontFamily: 'IndieFlower',
        fontSize: '1rem',
        fontWeight: 'bold',
        border: '1px solid white',
        [sizes.down("xs")]: {
            margin: '0 0.2rem',
            padding: '0.3rem'
        }
    },
    link: {
        textDecoration: 'none'
    }
};

export default styles;