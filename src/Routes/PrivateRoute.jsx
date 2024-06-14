import React, { useContext } from 'react'
import { Spin } from 'antd';
import { AuthContext } from '../Authentication/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';

export default function PrivateRoute({ children }) {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Spin size="large" />
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ form: location }} replace></Navigate>
}
