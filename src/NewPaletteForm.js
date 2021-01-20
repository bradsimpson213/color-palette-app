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
// Style imports
import { makeStyles, useTheme } from '@material-ui/core/styles';


const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      height: '100vh'
    },
    drawerPaper: {
      width: drawerWidth,
      display: 'flex',
      alignItems: 'center'
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      height: 'calc(100vh - 64px)',
      padding: '0',
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
    container: {
      width: '90%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }, 
    buttons: {
      width: '100%'
    },
    button: {
      width: '50%'
    }
  }));

const NewPaletteForm = (props) => {
  
  const { palettes } = props;
  const classes = useStyles();
  const theme = useTheme();
  let history= useHistory();
  const [colors, setColors] = useState(props.palettes[0].colors); 
  const [ drawerStatus, toggleDrawer] = useToggleState(false)
  const maxColors = 20;
  const fullPalette = colors.length >= maxColors;

  const addNewColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  const handleSubmit = (newPalette) => {
    const id = newPalette.paletteName.toLowerCase().replace(/ /g, "-");
    newPalette.id = id;
    newPalette.colors = colors;
    props.savePalette(newPalette);
    history.push("/");
  };

  const handleDelete = (colorName) => {
    const newColors = colors.filter( color => color.color !== colorName);
    setColors(newColors);
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
        <div className={ classes.container }>
          <Typography 
            variant="h4"
            gutterBottom
          >
              Design Your Palette
          </Typography>
          <div className={ classes.buttons }>
              <Button 
                  variant="contained" 
                  color="secondary"
                  className={ classes.button }
                  onClick={ clearColors }
              >
                  Clear Palette
              </Button>
              <Button 
                  variant="contained" 
                  color="primary"
                  className={ classes.button }
                  onClick={ addRandom }
                  disabled={ fullPalette }
              >
                  Random Color
              </Button>
          </div>
          <ColorPickerForm 
            fullPalette={ fullPalette }
            addNewColor={ addNewColor }
          />
        </div>     
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
            distance={ 20 } 
          />
      </main>
    </div>
  );
}

export default NewPaletteForm;

