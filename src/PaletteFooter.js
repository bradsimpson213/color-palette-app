import React from "react";
import { makeStyles } from "@material-ui/styles";
import styles from "./styles/PaletteFooterStyles";
import { FaGithub, FaAngellist, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { profileLinks } from './Config';

const useStyles = makeStyles(styles)

const PaletteFooter = (props) => {
    const classes = useStyles();
    const { angel, linkedin, github, email } = profileLinks;
    const { paletteName, emoji } = props;
    return (
        <footer className={ classes.footer }>
            <div>
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
            </div>
            <div>
                <span>{ paletteName }</span>
                <span className={ classes.emoji }>{ emoji }</span>
            </div> 
            
        </footer>
    )
};

export default PaletteFooter;