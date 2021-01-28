// React imports
import React, { useState, memo } from 'react';
import { useHistory } from 'react-router-dom';
import useToggleState from './hooks/useToggleState';
// Custom Component imports
import MiniPalette from './MiniPalette';
import MainFooter from './MainFooter';
// Material imports
import Avatar from '@material-ui/core/Avatar';
import Dialog from '@material-ui/core/Dialog';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import PaletteIcon from '@material-ui/icons/Palette';
import Switch from '@material-ui/core/Switch';
import DialogTitle from '@material-ui/core/DialogTitle';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
// Util imports
import { v4 as uuid } from 'uuid';
// Style imports
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { makeStyles } from '@material-ui/styles';
import styles from './styles/PaletteListStyles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';


const useStyles = makeStyles(styles);

const PaletteList = memo((props) => {
    let history = useHistory();
    const classes = useStyles()
    const { palettes, removePalette, paletteReset } = props;
    const [deleteOpen, toggleDeleteOpen] = useToggleState(false)
    const [deleteId, setDeleteId] = useState('');
    const [darkmode, toggleDarkMode] = useToggleState(true)

    const navToPalette = (id) => {
        history.push(`/palette/${id}`);
    };

    const navToNew = () => {
        history.push("/palette/new")
    }

    const openDeleteDialog = (id) => {
        setDeleteId(id);
        toggleDeleteOpen();
    };

    const deletePalette = () => {
        removePalette(deleteId);
        toggleDeleteOpen();
        setDeleteId('');
    }

    return (
        <div className={ classes.root }>
            <div className={ classes.utils }>
                <IconButton
                    onClick={ paletteReset } 
                    aria-label="delete"
                >
                    <PaletteIcon 
                        fontSize="large"
                        style={{ color: "white" }} 
                    />  
                </IconButton>
                <FormControlLabel
                    label={ darkmode ? "Dark Theme" : "Light Theme" }
                    control={
                        <Switch
                            defaultChecked
                            color="default"
                            checked={ darkmode }
                            onChange={ toggleDarkMode }
                        />
                    }
                />
            </div>
            <div className={ classes.container }>
                <nav className={ classes.nav }>
                    <h1 className={ classes.mainTitle }>React Colors</h1>
                </nav>
                <TransitionGroup className={ classes.palettes }>
                    { palettes.map(palette => (
                        <CSSTransition
                            key={ palette.id }
                            classNames="fade"
                            timeout={1000}
                        >
                                <MiniPalette 
                                    { ...palette }
                                    key={ uuid() }
                                    handleClick={ navToPalette }
                                    openDeleteDialog ={ openDeleteDialog }
                                />
                        </CSSTransition>
                    ))}
                    <div 
                        className={ classes.newPaletteBox }
                        onClick={ navToNew }
                    >
                        <span className={ classes.newPaletteBoxTitle }> Create New </span> 
                            <AddBoxOutlinedIcon className={ classes.newPaletteBoxIcon } />
                        <span className={ classes.newPaletteBoxTitle }> Palette </span> 
                    </div>
                </TransitionGroup>
                <MainFooter />
            </div>
            <Dialog
                open={ deleteOpen }
                onClose={ toggleDeleteOpen }
                aria-labelledby="delete-dialog-title"
            >
                <DialogTitle id="delete-dialog-title">
                    Delete this palette
                </DialogTitle>
                <List>
                    <ListItem 
                        button
                        onClick={ deletePalette } 
                        >
                        <ListItemAvatar>
                            <Avatar style={{ backgroundColor: blue[100], color: blue[600] }}>
                                <CheckIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Delete" />
                    </ListItem>
                    <ListItem 
                        button
                        onClick={ toggleDeleteOpen }
                    >
                        <ListItemAvatar>
                        <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                                <CloseIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Cancel" />
                    </ListItem>
                </List>
            </Dialog>
        </div>
    )
});

export default PaletteList;