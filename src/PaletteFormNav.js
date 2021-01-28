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
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
// Style imports
import { makeStyles } from '@material-ui/core/styles';
import sizes from "./styles/MediaSizes";


const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        backgroundColor: "black"
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '64px',
        backgroundColor: "black",
        color: "white"
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
        marginLeft: 12,
        marginRight: 20,
        color: "white"
    },
    navButtons: {
        marginRight: '1rem',
        [sizes.down("xs")]: {
            marginRight: "0.5rem"
        }
    },
    button: {
        margin: '0 0.5rem',
        fontFamily: 'IndieFlower',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '1rem',
        [sizes.down("xs")]: {
            margin: '0 0.2rem',
            padding: '0.3rem'
        }
    },
    link: {
        textDecoration: 'none'
    },
    navText: {
        fontFamily: 'IndieFlower',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '1.6rem'
    },
    hide: {
        display: 'none',
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
                        aria-label="open drawer"
                        onClick={ toggleDrawer }
                        edge="start"
                        className={clsx(classes.menuButton, { 
                        [classes.hide]: drawerStatus,
                    })}
                    >
                        <AddToPhotosIcon />
                    </IconButton>
                    <Typography 
                        className={ classes.navText }
                        variant="h6" 
                        noWrap
                    >
                        Create A Palette
                    </Typography>
                    </Toolbar>
                    <div className={ classes.navButtons }>
                        <Button 
                            className={ classes.button }
                            variant="contained" 
                            color="primary" 
                            onClick={ toggleFormShowing }
                        >
                            Save
                        </Button>
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
                    </div>
                </AppBar>
                { formShowing && (<PaletteMetaForm 
                    handleSubmit={ handleSubmit }
                    palettes={ palettes } 
                    toggleForm={ toggleFormShowing }
                />) }
        </div>
    )
};

export default PaletteFormNav;