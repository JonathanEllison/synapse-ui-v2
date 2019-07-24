import React from "react";
import {withStyles} from '@material-ui/core/styles';
import enums from "../../configurations/enums";
import {Link} from "react-router-dom";

const styles = theme => ({
    root: {
        padding: "60px 0"
    },
    lander: {
        padding: "80px 0",
        textAlign: "center"
        
    },
    h1: {
        fontWeight: "600",
        fontFamily: "Open Sans sans-serif"
    },
    p: {
        color: "#999"
    }
});

class NotAuthorized extends React.Component {
    render() {
        const {classes} = this.props;
        return (
        <div className={classes.root}> 
            <div className={classes.lander}>
                <h1 className={classes.h1}>You're not Authorized to View this Page</h1>
                <p className={classes.p}> Your Session May Have Reset </p>
                <Link to={enums.landingPath}> Return to Login </Link>
            </div>
        </div>)
    }
}

export default withStyles(styles)(NotAuthorized)