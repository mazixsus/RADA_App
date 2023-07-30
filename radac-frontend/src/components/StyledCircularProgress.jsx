import React from "react";
import {CircularProgress} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
    root: {
        textAlign: 'center'
    },
    text: {
        fontSize: 'small'
    }
}));

export default function StyledCircularProgress() {
    const classes = useStyles();
    return (
        <div className={classes.root} >
            <CircularProgress/>
            <div className={classes.text}>Wczytywanie...</div>
        </div>
    )
}