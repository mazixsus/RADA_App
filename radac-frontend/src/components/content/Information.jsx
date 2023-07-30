import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
    root: {
        width: '50%',
        margin: '25% auto',
        textAlign: 'center'
    }
}));

export default function Information({text}) {
    const  classes = useStyles();
    return (
        <Paper elevation={1} className={classes.root}>
            <Typography component={"h2"} variant={"h6"}>
                {text}
            </Typography>
        </Paper>
    )

}