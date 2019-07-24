import React from "react"
import {withStyles, List, ListItem} from '@material-ui/core';
import {Link} from "react-router-dom";
import SynapseHeader from "../components/common/SynapseHeader";
import enums from "../configurations/enums";

const styles = theme => ({
    root:  {},
    header: {},
})

class Home extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        this.props.getUserStatus((authResp) => {
            console.log(authResp)
            if(authResp.isLoggedIn) {
                this.props.setAuthentication(authResp.isLoggedIn)
            } else {
                this.props.openAuthWindow(authResp.url)
            }
        })
    }

    render() {
        return (
            <div>
                <SynapseHeader />
                <h1> Synapse Console </h1>
                <div>
                    <List>
                        <ListItem><Link to={{pathname: enums.adConfigPath}}> {enums.adConfig} </Link></ListItem>
                        <ListItem><Link to={{pathname: enums.adIngesterPath}}> {enums.adIngester} </Link></ListItem>
                        <ListItem><Link to={{pathname: enums.araPath}}> {enums.ara} </Link></ListItem>
                        <ListItem><Link to={{pathname: enums.errorReportPath}}> {enums.errorReport} </Link></ListItem>
                        <ListItem><Link to={{pathname: enums.libraryPath}}> {enums.library} </Link></ListItem>
                        <ListItem><Link to={{pathname: enums.relayPath}}> {enums.relay} </Link></ListItem>
                        <ListItem><Link to={{pathname: enums.cdnMapperPath}}> {enums.cdnMapper} </Link></ListItem>
                        <ListItem><Link to={{pathname: enums.smpPath}}> {enums.smp} </Link></ListItem>
                    </List>
                </div>
            </div>
                
        )
    }
}

export default withStyles(styles)(Home)