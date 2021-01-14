// React imports
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// Custom Component imports
import useToggleState from "./hooks/useToggleState";
import DraggableColorList from "./DraggableColorList";
import PaletteFormNav from "./PaletteFormNav";
import ColorPickerForm from "./ColorPickerForm";
// Drag and Drop HOC imports
import arrayMove from 'array-move';
// Material Component imports
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
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
  const [ drawerStatus, toggleDrawer] = useToggleState(false)
  const maxColors = 20;
  const fullPalette = colors.length >= maxColors;

//
    
    const addNewColor = () => {
      const newColor = {
          color: currentColor,
          name: colorName
      };
      setColors([...colors, newColor]);
      setColorName('');
    };

    const handleSubmit = (newPaletteName) => {
      const newPalette = {
        paletteName: newPaletteName,
        id: newPaletteName.toLowerCase().replace(/ /g, "-"),
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
     <PaletteFormNav
      classes={ classes }
      palettes={ palettes }
      handleSubmit={ handleSubmit }
      drawerStatus={ drawerStatus }
      toggleDrawer={ toggleDrawer }
      />
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
                disabled={ fullPalette }
            >
                Random Color
            </Button>
        </div>
        <ColorPickerForm fullPalette={ fullPalette } />     
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

