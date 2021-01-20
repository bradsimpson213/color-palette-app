// React imports
import React from "react";
import { useHistory, Link } from "react-router-dom";
// Custom Component imports
import MiniPalette from "./MiniPalette";
// Material imports
import Avatar from '@material-ui/core/Avatar';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close'
// Util imports
import { v4 as uuid } from 'uuid';
// Style imports
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteListStyles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';



const PaletteList = (props) => {
    let history = useHistory();
    const { palettes, classes, removePalette } = props;

    const navToPalette = (id) => {
        history.push(`/palette/${id}`);
    };

    return (
        <div className={ classes.root }>
            <div className={ classes.container }>
                <nav className={ classes.nav }>
                    <h1 className={ classes.mainTitle }>React Colors</h1>
                    <Link to="/palette/new">Create Palette</Link>
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
                                removePalette={ removePalette }
                            />
                    </CSSTransition>
                ))}
                </TransitionGroup>
            </div>
            <Dialog
                open={ true }
            >
                <DialogTitle>
                    Delete this palette
                </DialogTitle>
                <List>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <CheckIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Delete" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                        <Avatar>
                                <CloseIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Cancel" />
                    </ListItem>
                </List>
            </Dialog>
        </div>
    )
};

export default withStyles(styles)(PaletteList);