import React from "react"
import {withStyles, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import SynapseHeader from "../components/common/SynapseHeader";

const styles = theme => ({

});

class Relay extends React.Component {
    constructor(props) {
        super(props)
        this.getRelayData()
    }
    getRelayData = () => {
        let url = `${process.env.REACT_APP_RELAY_URL}/api/activity`
        console.log(url)
        fetch(url)
            .then(resp => {
                console.log(resp)
            })
    }

    render() {
        return(<div>
            <SynapseHeader />
            <h3> Relay POC</h3>
            <Table>
                <TableHead>
                    <TableCell>ID</TableCell>
                    <TableCell>Job ID</TableCell>
                    <TableCell>Airing ID</TableCell>
                    <TableCell>Action</TableCell>
                    <TableCell>Media ID</TableCell>
                    <TableCell>Status</TableCell>
                </TableHead>
                {
                    this.state
                }
            </Table>
        </div>)
    }
}

export default withStyles(styles)(Relay);