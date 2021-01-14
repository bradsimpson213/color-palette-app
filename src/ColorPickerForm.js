// React imports
import React, { useState } from "react";
// Material Component imports
import Button from '@material-ui/core/Button';
// Other imported components
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';
// Style imports
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        width: '100%'
    },
    picker: {
        width: '100% !important',
        marginTop: '2rem'
    },
    addColor: {
        width: '100%',
        padding: '1rem',
        marginTop: '1rem',
        fontSize: '2rem'
    },
    colorNameInput: {
        width: '100%',
        height: '70px',

    }
});

const ColorPickerForm = (props) => {
    const classes = useStyles();
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
        <div className={ classes.root }>
            <ChromePicker 
                color={ currentColor } 
                onChangeComplete={ newColor => setCurrentColor(newColor.hex) }
                className={ classes.picker } 
            />
            <ValidatorForm 
                onSubmit={ makeNewColor } 
                onError={ errors => console.log(errors) }
            >
                <TextValidator 
                    value={ colorName }
                    placeholder="Color Name"
                    className={ classes.colorNameInput }
                    variant="filled"
                    margin="normal"
                    onChange={ e => setColorName(e.target.value)}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <Button
                    className={ classes.addColor } 
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