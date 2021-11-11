import { useContext } from 'react'
import { AuthContext } from '../Context/Authprovider/Authprovider'

const Useauth = () => {
    const auth=useContext(AuthContext)
    return auth;
}

export default Useauth
