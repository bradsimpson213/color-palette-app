// React imports
import React, { useState } from 'react';
import { Link } from "react-router-dom";
// Custom Component imports
import PaletteMetaForm from "./PaletteMetaForm";
// Material Component imports
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// Style imports
import { makeStyles } from '@material-ui/core/styles';


const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex'
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '64px'
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    navButtons: {

    }
}));

const PaletteFormNav = (props) => {
    const classes = useStyles();
    const { drawerStatus, toggleDrawer, handleSubmit } = props;
    // const [ drawerStatus, toggleDrawer] = useToggleState(false)

    return(
        <div>
            <CssBaseline />
                <AppBar
                    position="fixed"
                    color="default"
                    className={clsx(classes.appBar, {
                    [classes.appBarShift]: drawerStatus,
                    })}
                >
                    <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={ toggleDrawer }
                        edge="start"
                        className={clsx(classes.menuButton, drawerStatus && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Create A Palette
                    </Typography>
                    </Toolbar>
                    <div className={ classes.navButtons }>
         
                        <PaletteMetaForm handleSubmit={ handleSubmit } />
                        <Link to="/">
                                <Button 
                                    variant="contained" 
                                    color="secondary"
                                >
                                    Go Back
                                </Button>
                        </Link>
                    </div>
                </AppBar>
        </div>
    )
};

export default PaletteFormNav;