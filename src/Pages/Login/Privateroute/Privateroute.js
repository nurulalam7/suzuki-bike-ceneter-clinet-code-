import { CircularProgress } from '@mui/material';
import React from 'react'
import { Route,Redirect } from 'react-router-dom';
import Useauth from '../../../Hooks/Useauth';

const Privateroute = ({children,...rest}) => {
    const {user,loading}=Useauth();
    if(loading){return <CircularProgress />}
    
    return (
        <Route
      {...rest}
      render={({ location }) =>
        user.email? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
}

export default Privateroute
