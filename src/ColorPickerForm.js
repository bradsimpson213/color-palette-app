// React imports
import React, { useState } from "react";
// Material Component imports
import Button from '@material-ui/core/Button';
// Other imported components
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';
// Style imports
import { makeStyles, useTheme } from '@material-ui/core/styles';

const ColorPickerForm = (props) => {
    const { fullPalette, addNewColor } = props;
    const [currentColor, setCurrentColor] = useState('teal');
    const [colorName, setColorName] = useState('');

    //Custom form validator not working below (and need update to colorName/color)
    // useEffect( ()=> {
    //     ValidatorForm.addValidationRule('PaletteUnique', (value) => {
    //       props.palettes.every( 
    //         ({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase())
    //     });
    //     return () => ValidatorForm.removeValidationRule('PaletteUnique');
    // },[])

    const makeNewColor = () => {
        const newColor = {
            color: currentColor,
            name: colorName
        }
        addNewColor(newColor)
        setColorName("");
    }
    return (
        <div>
            <ChromePicker 
            color={ currentColor } 
            onChangeComplete={ newColor => setCurrentColor(newColor.hex) } 
            />
            <ValidatorForm 
            onSubmit={ makeNewColor } 
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