// React imports
import React, { useState } from 'react';
// Material UI imports
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// Other imported components
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Picker } from "emoji-mart";
// Style imports
import "emoji-mart/css/emoji-mart.css"
// import { makeStyles } from '@material-ui/core/styles';


const PaletteMetaForm = (props) => {
  const { handleSubmit, toggleForm } = props;  // palettes is available from props but not used
  const [colorPaletteName, setColorPaletteName] = useState();
  const [formStage, setFormStage] =useState("name")

    //Custom form validator not working below
    // useEffect( ()=> {
    //     ValidatorForm.addValidationRule('PaletteUnique', (value) => {
    //       props.palettes.every( 
    //         ({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase())
    //     });
    //     return () => ValidatorForm.removeValidationRule('PaletteUnique');
    // },[])
//() => handleSubmit(colorPaletteName)
    const finalFormSubmit = (selectedEmoji) => {
        const newPalette = {
            paletteName: colorPaletteName,
            emoji: selectedEmoji.native
        }
        console.log(colorPaletteName)
        console.log(newPalette);

        handleSubmit(newPalette)
    };

  return (
    <div>
        <Dialog 
            open={ formStage === "emoji" }
            onClose={ () => setFormStage("name") } 
        >
            <DialogTitle id="emoji-form-dialog-title">Choose a Palette Emoji</DialogTitle>
            <Picker
                onSelect={ finalFormSubmit }
                title="Pick a Palette Emoji" 
            />
        </Dialog>
        <Dialog 
            open={ formStage === "name" } 
            onClose={ () => setFormStage("emoji") } 
            aria-labelledby="form-dialog-title"
        >
        <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
            <ValidatorForm
                onSubmit={ () => setFormStage("emoji") } 
                onError={ errors => console.log(errors) }
            >
            <DialogContent>
            <DialogContentText>
                Please enter a name for your new palette.  Please make sure it is unique!
            </DialogContentText>
                <TextValidator 
                    value={ colorPaletteName }
                    label="Palette Name"
                    fullWidth
                    margin="normal"
                    onChange={ e => setColorPaletteName(e.target.value)}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
            </DialogContent>
            <DialogActions>
                <Button 
                    onClick={ toggleForm } 
                    color="primary"
                >
                Cancel
                </Button>
                <Button 
                    variant="contained" 
                    color="primary"
                    onClick={ () => setFormStage("emoji") }
                    type="submit"
                >
                    Save Palette
                </Button>
            </DialogActions>
        </ValidatorForm>
      </Dialog>
    </div>
  );
}

export default PaletteMetaForm;