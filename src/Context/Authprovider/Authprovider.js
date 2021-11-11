import React,{createContext} from 'react'
import Usefirebase from './../../Hooks/Usefirebase';
export const AuthContext=createContext(null);
const Authprovider = ({children}) => {
    const allContexts=Usefirebase();
    return (
        <AuthContext.Provider value={allContexts}>
            {children}

        </AuthContext.Provider>
    )
}

export default Authprovider
