import React from 'react';
import { FaGithub, FaAngellist, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { makeStyles } from '@material-ui/styles';
import { profileLinks } from './Config';

const useStyles = makeStyles({
    footer: {
        height: '6vh', 
        width: '100%',       
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: '1.8rem',
        marginTop: '1rem'
    },
    text: {
        color: 'lightgray',
        textAlign: 'center',
        margin: '0 15px 0 15px',
    },
    icons: {
        color: 'lightgray',
        margin: '7px 10px 0 10px',
       
    }
})

const MainFooter = () => {
    const classes = useStyles();
    const { angel, linkedin, github, email } = profileLinks;
    return (
        <footer className={ classes.footer }>
            <a href={github} >
                <FaGithub className={ classes.icons } />
            </a>
            <a href={linkedin} >
                <FaLinkedin className={ classes.icons } />
            </a>
            <span className={ classes.text }>Created by Brad Simpson ©2021</span>
            <a href={angel} >
                <FaAngellist className={ classes.icons } />
            </a> 
            <a href={`mailto:${email}`}>
                <FaEnvelope className={ classes.icons } />
            </a> 
        </footer>
    )
};

export default MainFooter;