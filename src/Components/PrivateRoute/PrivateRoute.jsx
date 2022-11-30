import React from 'react'
import {
    Navigate,
} from "react-router-dom";
import { useSelector } from 'react-redux'

const PrivateRoute = ({ children }) => {
    const isAuthenticated = useSelector(state => state.login.isAuthenticated)
    // const isAuthenticated = localStorage.getItem('isAuthenticated');
    console.log(isAuthenticated);
    if (!isAuthenticated) {
        // not logged in so redirect to login page with the return url
        return <Navigate to="/" />
    }

    // authorized so return child components
    return children;
}

export default PrivateRoute