// import { useSelector } from 'react-redux';
// import {Navigate} from 'react-router'

// const PrivateRoute=({child})=>{
//     const {token}=useSelector(state=>state.authreducer)
//     return token===null? child:<Navigate to='/'/>

// }
// export default PrivateRoute;

import { useSelector } from "react-redux";
import { Navigate } from "react-router";


const PrivateRoute = ({ child }) => {
    const { token } = useSelector(state => state.auth)
    return token === null ? child : <Navigate to='/' />
}

export default PrivateRoute;