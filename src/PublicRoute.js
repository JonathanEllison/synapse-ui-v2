import React from "react";
import { Route } from 'react-router-dom';

export const PublicRoute = ({component: Component, props: childProps, ...rest}) => {
    return (
        <Route 
            {...rest} 
            render={
                props => (
                    <Component {...props} {...childProps} />
                )
            }
        />
    )
}