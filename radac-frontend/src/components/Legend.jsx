import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles(() => ({
        image: {
            width: '30px',
            height: '50px'
        }
    })
);

export default function Legend({open, close}) {
    const classes = useStyles();

    const handleClose = () => {
        close(false);
    };

    const redMarker = require('../resources/redMarker.jpg');
    const blueMarker = require('../resources/blueMarker.jpg');
    const greenMarker = require('../resources/greenMarker.jpg');

    return (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogTitle>{"Legenda"}</DialogTitle>
            <DialogContent>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item xs={2}>
                        <img className={classes.image} src={greenMarker} alt={'Zielony znacznik'}/>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography component={"h2"} variant={"h6"}>
                            Wyboje wykryte przez algorytm prawidłowo.
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <img className={classes.image} src={redMarker} alt={'Czerwony znacznik'}/>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography component={"h2"} variant={"h6"}>
                            Wyboje wykryte przez algorytm nieprawidłowo.
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <img className={classes.image} src={blueMarker} alt={'Niebieski znacznik'}/>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography component={"h2"} variant={"h6"}>
                            Wyboje nie wykryte przez algorytm.
                        </Typography>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>
                    OK
                </Button>
            </DialogActions>
        </Dialog>
    )
}