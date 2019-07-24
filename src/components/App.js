import React, {Component} from 'react';
import {PublicRoute} from '../PublicRoute'
import {S2sRoute} from '../S2sRoutes'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "../views/Home";
import Relay from "../views/Relay";
import NotAuthorized from '../views/errors/NotAuthorized';
import NotFound from '../views/errors/NotFound';
import enums from "../configurations/enums";
import ToastNotification from './common/ToastNotification';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      isLoggedIn: sessionStorage.getItem("isLoggedIn") || false,
      permissions: [],
      toggleSidebar: false,
    }
    this.getUserStatus()  
  }
  
  getUserStatus = (callback) => {
    fetch(`${process.env.REACT_APP_SYNAPSE_CORE_URL}/userStatus`, {
      credentials: 'include',
    }).then(resp => {
            resp.json()
              .then(json =>{
                console.log(json)
                sessionStorage.setItem("isLoggedIn", json.isLoggedIn)

                if(callback)
                  callback(json);
                else{
                  this.setState({
                    isLoggedIn: json.isLoggedIn,
                    permissions: json.authz
                  })
                }
                  
              })
              .catch(error => {
                this.openNotification(error.toString())
              })
        })
  };

  logout = () => {

  };

  openAuthWindow = (path) => {
    let url = `${process.env.REACT_APP_SYNAPSE_CORE_URL}${path}`
    let userWindow = window.open(url);

    if(userWindow === null) {
      this.openNotification("Popup window blocked. Check popup settings!")
    } else {
      userWindow.onbeforeunload = () => {
        this.getUserStatus()
      }
    }
  };

  setAuthentication = (isLoggedIn, callback) => {
    this.setState({
      isLoggedIn: isLoggedIn
    }, () => {
      if(typeof callback === "function") {
        callback()
      }
    })
  };

  openNotification = (message, callback, open=true,) => {
    this.setState({
      toastMessage: message,
      toastNotificationOpen: open
    }, () => {
      if(typeof callback === "function")
        callback()
    })
  };

  handleToastNotificationClose = (event, reason) => {
    if(reason === "clickaway") {
      return;
    }

    this.setState({
      toastNotificationOpen: false
    })
  };


  render() {
  
  const childProps = {
    isLoggedIn: this.state.isLoggedIn,
    setAuthentication: this.setAuthentication,
    getUserStatus: this.getUserStatus,
    openAuthWindow: this.openAuthWindow,
    logout: this.logout,
    openNotification: this.openNotification
  };

    return(
      <div className="container">
        <BrowserRouter>
          <Switch>
            <PublicRoute component={Home} path={enums.rootPath} exact props={childProps} />
            <S2sRoute component={Relay} path={enums.relayPath} exact props={childProps} />
            <Route component={NotAuthorized} path={enums.notAuthPath}/>
            <Route component={NotFound} path={enums.notFoundPath}/>
          </Switch>
        </BrowserRouter>
        <ToastNotification
          message={this.state.toastMessage}
          open={this.state.toastNotificationOpen}
          onClose={this.handleToastNotificationClose} />
      </div>
    )
  }
}
