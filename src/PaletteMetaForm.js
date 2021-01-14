// React imports
import React, { useState } from 'react';
// Custom Hook import
import useToggleState from "./hooks/useToggleState";
// Material UI imports
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// Other imported components
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
// Style imports
import { makeStyles } from '@material-ui/core/styles';


const PaletteMetaForm = (props) => {
  const { handleSubmit, palettes } = props;  
  const [open, toggleOpen] = useToggleState(false);
  const [colorPaletteName, setColorPaletteName] = useState();
    //Custom form validator not working below
    // useEffect( ()=> {
    //     ValidatorForm.addValidationRule('PaletteUnique', (value) => {
    //       props.palettes.every( 
    //         ({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase())
    //     });
    //     return () => ValidatorForm.removeValidationRule('PaletteUnique');
    // },[])

  return (
    <div>
        <Button 
            variant="outlined" 
            color="primary" 
            onClick={ toggleOpen }
        >
        Open form dialog
        </Button>
        <Dialog 
            open={ open } 
            onClose={ toggleOpen } 
            aria-labelledby="form-dialog-title"
        >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText> */}
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
            </ValidatorForm>
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={ toggleOpen } 
            color="primary"
        >
            Cancel
          </Button>
          <Button 
            onClick={ toggleOpen } 
            color="primary"
        >
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default PaletteMetaForm;