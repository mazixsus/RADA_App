import React, {Fragment} from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
        listItem: {
            width: '50%'
        }
    })
);

const tableLabels = ['Czułość:','Precyzja:', 'TP:', 'FP:','FN:','Czas/100 punktów:'];

export default function AlgorithmStats({stats}) {
    const classes = useStyles();

    //generating statistics list
    const algorithmStats = Object.entries(stats).map((element,index) =>
        <ListItem key={element[0]}>
            <Typography className={classes.listItem} component={"h2"} variant={"h6"}>
                {tableLabels[index]}
            </Typography>
            <Typography className={classes.listItem} component={"h2"} variant={"h6"} noWrap>
                {element[1]}
                {index === 0 && '%'}
                {index === 1 && '%'}
                {index === 5 && ' ms'}
            </Typography>
        </ListItem>
    );

    return (
        <Fragment>
            <Typography component={"h2"} variant={"h6"} >Statystyki:</Typography>
            <List>
                {algorithmStats}
            </List>
        </Fragment>
    )
}