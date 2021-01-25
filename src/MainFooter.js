import React from "react";
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles({
    footer: {
        position: 'sticky',
        bottom: '0',
        height: '5vh',        
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: '1.8rem',
        marginTop: '1rem'
    },
    text: {
        color: 'lightgray',
        textAlign: 'center',
    }
})

const MainFooter = () => {
    const classes = useStyles();
    return (
        <footer className={ classes.footer }>
            <span className={ classes.text }>Created by Brad Simpson ©2021</span>
        </footer>
    )
};

export default MainFooter;