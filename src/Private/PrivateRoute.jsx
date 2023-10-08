import React, { useContext } from 'react';
import { ContextAuth } from '../Context/ContextData';
import { Navigate } from 'react-router-dom';
import Loading from '../Pages/Loading/Loading';

const PrivateRoute = ({children}) => {
    const {user, shortLoading} = useContext(ContextAuth)

    if(shortLoading){
        return (
            <>
            <Loading></Loading>
            </>
        )
    }
    
    if(user){
        return children
    }
    else{
        return <Navigate to='/signin'></Navigate>
    }
};

export default PrivateRoute;