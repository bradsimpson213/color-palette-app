// React imports
import React from 'react';
import { Link } from "react-router-dom";
// Custom Hook imports
import useToggleState from "./hooks/useToggleState";
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
        alignItems: 'center',
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
        marginRight: '1rem'
    },
    button: {
        margin: '0 0.5rem',
    },
    link: {
        textDecoration: 'none'
    }
}));

const PaletteFormNav = (props) => {
    const classes = useStyles();
    const { palettes, drawerStatus, toggleDrawer, handleSubmit } = props;
    const [formShowing, toggleFormShowing] = useToggleState(false)

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
         
                        
                        <Link 
                            className={ classes.link }
                            to="/"
                        >
                            <Button 
                                className={ classes.button }
                                variant="contained"
                                color="secondary"
                            >
                                Go Back
                            </Button>
                        </Link>
                        <Button 
                            className={ classes.button }
                            variant="contained" 
                            color="primary" 
                            onClick={ toggleFormShowing }
                        >
                            Save
                        </Button>
                    </div>
                </AppBar>
                { formShowing && (<PaletteMetaForm 
                    handleSubmit={ handleSubmit }
                    palettes={ palettes } 
                />) }
        </div>
    )
};

export default PaletteFormNav;