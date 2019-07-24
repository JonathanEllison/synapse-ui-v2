import React from "react";
import {withStyles} from '@material-ui/core/styles';

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

class NotFound extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}> 
                <div className={classes.lander}>
                    <h1 className={classes.h1}>Page Not Found</h1>
                </div>
            </div>)
    }
}

export default withStyles(styles)(NotFound)