import React, { useContext } from 'react'
import UserContext from '../../context/UserContext'
import { Navigate, Outlet } from 'react-router-dom';

const AdminRoutes = () => {
    const { user } = useContext(UserContext);
    return user && user.role === "admin" ? <Outlet /> : <Navigate to="/" replace />
}


export default AdminRoutes
