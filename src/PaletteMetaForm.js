// React imports
import React, { useState } from 'react';
// Custom Hook import
import useToggleState from "./hooks/useToggleState";
// Material UI imports
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// Other imported components
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
// Style imports
// import { makeStyles } from '@material-ui/core/styles';


const PaletteMetaForm = (props) => {
  const { handleSubmit } = props;  // palettes is available from props but not used
  const [open, toggleOpen] = useToggleState(true);
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
   
        <Dialog 
            open={ open } 
            onClose={ toggleOpen } 
            aria-labelledby="form-dialog-title"
        >
        <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
            <ValidatorForm
                onSubmit={ () => handleSubmit(colorPaletteName) } 
                onError={ errors => console.log(errors) }
            >
            <DialogContent>
            <DialogContentText>
                Please enter a name for your new palette.  Make sure it is unique!
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
                    onClick={ toggleOpen } 
                    color="primary"
                >
                Cancel
                </Button>
                {/* <Button 
                    onClick={ toggleOpen } 
                    color="primary"
                >
                Subscribe
                </Button> */}
                <Button 
                    variant="contained" 
                    color="primary"
                    onClick={ toggleOpen }
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