import React, {Fragment} from 'react'
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import CachedIcon from '@material-ui/icons/Cached';
import SurveyList from "./content/SurveyList";
import SurveyInput from "./content/SurveyInput";
import { makeStyles } from '@material-ui/core/styles';
import {selectSurvey, surveysInfoFetched} from "../../redux/actions";
import {connect} from "react-redux";

const useStyles = makeStyles(theme => ({
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
}));

function DrawerContent(props) {
    const classes = useStyles();

    const handleDrawerClose = () => {
        props.onClick();
    };

    const triggerSurveyListRefresh = () => {
        props.surveysInfoFetched([]);
    };


    return (
        <Fragment>
            <div className={classes.toolbarIcon}>
                <IconButton onClick={triggerSurveyListRefresh}>
                    <CachedIcon/>
                </IconButton>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon/>
                </IconButton>
            </div>
            <SurveyList
                surveysInfo={props.surveysInfo}
                selectedSurvey={props.selectedSurvey}
                surveysInfoFetched={props.surveysInfoFetched}
                selectSurvey={props.selectSurvey}
                closeDrawer={handleDrawerClose}
            />
            <SurveyInput
                selectedSurvey={props.selectedSurvey}
                selectSurvey={props.selectSurvey}
                closeDrawer={handleDrawerClose}
            />
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        surveysInfo: state.surveysInfo,
        selectedSurvey: state.selectedSurvey
    }
};
const mapDispatchToProps = {
    surveysInfoFetched,
    selectSurvey
};

export const DrawerContentContainer = connect(mapStateToProps, mapDispatchToProps)(DrawerContent);