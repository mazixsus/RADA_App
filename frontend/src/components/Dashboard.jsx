import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import {DashboardContentContainer} from "./content/DashboardContent";
import {DrawerContentContainer} from "./drawer/DrawerContent";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from '@material-ui/icons/Info';
import Legend from "./Legend";

const drawerWidth = 500;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        // position: 'relative',
        // whiteSpace: 'nowrap',
        width: drawerWidth,
        // transition: theme.transitions.create('width', {
        //     easing: theme.transitions.easing.sharp,
        //     duration: theme.transitions.duration.enteringScreen,
        // }),
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        // justifyContent: 'center',
        flexGrow: 1,
        height: '97vh',
        // overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(0),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    }
}));

export default function Dashboard() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [showLegend, setShowLegend] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleLegendOpen = () => {
        setShowLegend(true);
    };

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="absolute" className={classes.appBar}>
                <Toolbar>
                    <Button
                        variant="outlined"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={classes.menuButton}
                    >
                        Wybierz pomiar
                    </Button>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        RADAC
                    </Typography>
                    <IconButton onClick={handleLegendOpen}>
                        <InfoIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                classes={{
                    paper: classes.drawerPaper
                }}
                open={open}
                onClose={handleDrawerClose}
            >
                <DrawerContentContainer onClick={handleDrawerClose}/>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer}/>
                    <DashboardContentContainer/>
            </main>
            <Legend
                open={showLegend}
                close={setShowLegend}
            />
        </div>
    );
}