import React from "react";
import { Route, Redirect } from 'react-router-dom';
import enums from "./configurations/enums";

export const S2sRoute = ({component: Component, props: childProps, ...rest}) => {
    return (
        <Route 
            {...rest} 
            render={
                props => (
                    childProps.isLoggedIn ? <Component {...props} {...childProps} /> : <Redirect to={enums.notAuthorized} />
                )
            }
        />
    )
}
