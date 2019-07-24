import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
    close: {
        width: theme.spacing(15),
        height: theme.spacing(4)
    },
    message: {
        fontSize: "3vh"
    }
});

class ToastNotification extends React.Component {
    state = {
        open: false
    }

    handleClick = () => {
        this.setState({open: true})
    }

    handleClose = (event, reason) => {
        if(this.props.onClose) {
            this.props.onClose(event, reason)
        }
    }

    render () {
        const {
            classes,
            message,
            open
        } = this.props

        return(
            <div>
                <Snackbar
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right"
                    }}
                    open={open || false}
                    autoHideDuration={7000}
                    onClose={this.handleClose}
                    ContentProps={{
                        "aria-describedby": "message-id"
                    }}
                    message={<span id="message-id" className={classes.message}>{message}</span>}
                    action={[
                        <IconButton
                          key="close"
                          aria-label="Close"
                          color="inherit"
                          className={classes.close}
                          onClick={this.handleClose}
                        >
                          <CloseIcon />
                        </IconButton>,
                      ]}
                />
            </div>
        )
    }
}

export default withStyles(styles)(ToastNotification)