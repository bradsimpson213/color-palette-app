// React imports
import React, { useState } from 'react';
import { Link } from "react-router-dom";
// Material Component imports
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// Other imported components
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';



const PaletteFormNav = (props) => {
    const { classes, drawerStatus, toggleDrawer, handleSubmit } = props;
    // const [ drawerStatus, toggleDrawer] = useToggleState(false)
    const [colorPaletteName, setColorPaletteName] = useState();

    //Custom form validator not working below
    // useEffect( ()=> {
    //     ValidatorForm.addValidationRule('PaletteUnique', (value) => {
    //       props.palettes.every( 
    //         ({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase())
    //     });
    //     return () => ValidatorForm.removeValidationRule('PaletteUnique');
    // },[])

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
                        Persistent drawer
                    </Typography>
                    <ValidatorForm 
                        onSubmit={ () => handleSubmit(colorPaletteName) } 
                        onError={ errors => console.log(errors) }
                    >
                        <TextValidator 
                            value={ colorPaletteName }
                            label="Palette Name"
                            onChange={ e => setColorPaletteName(e.target.value)}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        <Button 
                        variant="contained" 
                        color="primary"
                        type="submit"
                        >
                        Save Palette
                        </Button>
                        <Link to="/">
                            <Button 
                                variant="contained" 
                                color="secondary"
                            >
                                Go Back
                            </Button>
                        </Link>
                    </ValidatorForm>
                    </Toolbar>
                </AppBar>
        </div>
    )
};

export default PaletteFormNav;