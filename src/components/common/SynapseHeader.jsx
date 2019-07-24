import React from "react";
import { Paper, Grid, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import SynapseLogo from "../../images/synapse-logo.png";

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(0),
        // marginBottom: 20,
        backgroundColor: "rgb(66, 85, 169)",
    },
    gridContainer: {
        flexGrow: 1,
    },
    image: {
        width: "3.5vw",
        height: "7vh",
    },
    button: {

    }
}))

export default function SynapseHeader() {
    const classes = useStyles();

    return(<Paper className={classes.paper}>
        <Grid container spacing={4} direction='row' className={classes.gridContainer}>
            <Grid item xs={1}>
                <img className={classes.image} src={SynapseLogo} />
            </Grid>
            <Grid item xs={4}>
                <Button> Synapse </Button>
            </Grid>
        </Grid>
    </Paper>)
}

