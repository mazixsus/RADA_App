import React, {useState, useEffect, Fragment} from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import StyledCircularProgress from "../../StyledCircularProgress";
import Information from "../../content/Information";


const useStyles = makeStyles(() => ({
        root: {
            position: 'relative',
            overflow: 'auto',
            maxHeight: '55vh',
        }
    })
);

const StyledListItem = withStyles({
    root: {
        '&$selected': {
            backgroundColor: 'rgb(126,125,129)'
        }
    },
    selected: {}
})(ListItem);

export default function SurveyList(props) {
    const classes = useStyles();
    const [isSurveysInfoLoaded, setIsSurveysInfoLoaded] = useState(false);
    const [isSurveysInfoLoading, setIsSurveysInfoLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (props.surveysInfo.length > 0) {
            setIsSurveysInfoLoaded(true);
            setIsError(false)
        } else {
            setIsSurveysInfoLoaded(false);
            setIsError(false);
        }
    }, [props]);

    //fetching surveys
    useEffect(() => {
            if (!isSurveysInfoLoaded && !isSurveysInfoLoading && !isError) {
                setIsSurveysInfoLoading(true);
                fetch("/survey/names")
                    .then(res => {
                            if (!res.ok) {
                                throw Error(res.statusText)
                            }
                            return res.json()
                        }
                    )
                    .then(json => {
                        props.surveysInfoFetched(json);
                    })
                    .then(() => {
                        setIsError(false);
                        setIsSurveysInfoLoaded(true);
                        setIsSurveysInfoLoading(false);
                    })
                    .catch(() => {
                        setIsSurveysInfoLoading(false);
                        setIsError(true)
                    });
            }

        }, [props, isSurveysInfoLoaded, isSurveysInfoLoading, isError]
    );

    const handleListItemClick = (event, item) => {
        props.selectSurvey(item);
        props.closeDrawer();
    };

    const surveyNames =
        props.surveysInfo.map((element) =>
            <StyledListItem
                key={element.surveyId}
                button
                selected={props.selectedSurvey === element.surveyId}
                onClick={event => handleListItemClick(event, element.surveyId)}
            >
                <Typography component={"h2"} variant={"h6"} noWrap>
                    {element.fileName}
                </Typography>
            </StyledListItem>
        );


    return (
        <Fragment>
            {isError
                ? <Information text={'Wystąpił błąd z połączeniem'}/>
                : <List
                    className={classes.root}
                >
                    {isSurveysInfoLoaded
                        ? surveyNames
                        : <StyledCircularProgress/>
                    }
                </List>
            }
        </Fragment>
    );
}