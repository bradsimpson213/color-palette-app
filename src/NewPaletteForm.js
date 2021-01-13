// React imports
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
// Custom Component imports
import useToggleState from "./hooks/useToggleState";
import DraggableColorList from './DraggableColorList';
// Drag and Drop HOC imports
import arrayMove from 'array-move';
// Material Component imports
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// Other imported components
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';
// Style imports
import { makeStyles, useTheme } from '@material-ui/core/styles';


const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
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
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      height: 'calc(100vh - 64px)',
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  }));

const NewPaletteForm = (props) => {

  const { palettes } = props;
  const classes = useStyles();
  const theme = useTheme();
  let history= useHistory();
  const [currentColor, setCurrentColor] = useState('teal');
  const [colors, setColors] = useState(props.palettes[0].colors); 
  const [colorName, setColorName] = useState('');
  const [colorPaletteName, setColorPaletteName] = useState();
  const [ drawerStatus, toggleDrawer] = useToggleState(false)

// Custom form validator not working below
    // useEffect( ()=> {
      //   ValidatorForm.addValidationRule('ColorNameUnique', (value) => {
      //      colors.every( 
      //        ({name}) => name.toLowerCase() !== value.toLowerCase())
      //   });
      //   ValidatorForm.addValidationRule('ColorUnique', (value) => {
      //     colors.every( 
      //       ({color}) => color !== value )
      //  });
    //     ValidatorForm.addValidationRule('PaletteUnique', (value) => {
    //       props.palettes.every( 
    //         ({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase())
    //     });
    //     return () => ValidatorForm.removeValidationRule('PaletteUnique');
    // },[])
    
    const addNewColor = () => {
      const newColor = {
          color: currentColor,
          name: colorName
      };
      setColors([...colors, newColor]);
      setColorName('');
    };

    const handleSubmit = () => {
      const newPalette = {
        paletteName: colorPaletteName,
        id: colorPaletteName.toLowerCase().replace(/ /g, "-"),
        colors: colors
      };
      props.savePalette(newPalette);
      history.push("/");
    };

    const handleDelete = (colorName) => {
      const newColors = colors.filter( color => color.color !== colorName);
      setColors(newColors);
      alert(`${colorName} was deleted!`);
    };

    const onSortEnd = ({oldIndex, newIndex}) => {
      const newColors = arrayMove(colors, oldIndex, newIndex);
      setColors(newColors)
    };

    const clearColors = () => {
      setColors([]);
    };

    const addRandom = () => {
      const allColors = palettes.map(palette => palette.colors).flat();
      const randomNumber = Math.floor(Math.random() * allColors.length);
      const randomColor = allColors[randomNumber];
      setColors([...colors, randomColor]);
    };

  return (
    <div className={classes.root}>
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
            onSubmit={ handleSubmit } 
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
          </ValidatorForm>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={ drawerStatus }
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={ toggleDrawer }>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <Typography variant="h4">
            Design Your Palette
        </Typography>
        <div>
            <Button 
                variant="contained" 
                color="secondary"
                onClick={ clearColors }
            >
                Clear Palette
            </Button>
            <Button 
                variant="contained" 
                color="primary"
                onClick={ addRandom }
            >
                Random Color
            </Button>
        </div>
        <ChromePicker 
            color={ currentColor } 
            onChangeComplete={ newColor => setCurrentColor(newColor.hex) } 
        />
        <ValidatorForm 
          onSubmit={ addNewColor } 
          onError={ errors => console.log(errors) }
        >
            <TextValidator 
                value={ colorName }
                onChange={ e => setColorName(e.target.value)}
                validators={['required']}
                    errorMessages={['this field is required']}
            />
            <Button 
                variant="contained"
                type="submit" 
                color="primary"
                style={{ backgroundColor: currentColor }}
            >
                Add Color
            </Button>
        </ValidatorForm>
     
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: drawerStatus,
        })}
      >
        <div className={classes.drawerHeader} />
          <DraggableColorList 
            colors={ colors } 
            handleDelete={ handleDelete }
            axis="xy"
            onSortEnd={ onSortEnd } 
          />
            
      </main>
    </div>
  );
}

export default NewPaletteForm;

