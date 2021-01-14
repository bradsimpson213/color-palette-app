// React imports
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// Custom Component imports
import useToggleState from "./hooks/useToggleState";
import DraggableColorList from "./DraggableColorList";
import PaletteFormNav from "./PaletteFormNav";
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

const ColorPickerForm = (props) => {
    const { fullPalette } = props;
    const [currentColor, setCurrentColor] = useState('teal');

    return (
        <div>
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
                    style={{ backgroundColor: fullPalette ? "gray" : currentColor }}
                    disabled={ fullPalette }
                >
                    { fullPalette ? "Palette Full" : "Add Color" }
                </Button>
            </ValidatorForm>
        </div>
    )
};

export default ColorPickerForm;