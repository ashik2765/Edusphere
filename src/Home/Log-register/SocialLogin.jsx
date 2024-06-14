import { Button, message } from 'antd'
import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Authentication/AuthProvider'
import useAxiosPublic from '../../hooks/useAxiosPublic'

export default function SocialLogin() {

    const axiosPublic = useAxiosPublic();
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/"

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(data => {
                const userInfo = {
                    name: data?.user?.displayName,
                    email: data?.user?.email
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        message.success('User Added to the database');
                        navigate(from, { replace: true });
                    })
            })
    };

    const handleFacebookLogin = () => {
        console.log('connected')
    };

    return (
        <div>
            <div style={{ textAlign: 'center', margin: '10px 0' }}>Or log in with:</div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button onClick={handleGoogleLogin} style={{ width: '48%' }}>
                    Google
                </Button>
                <Button onClick={handleFacebookLogin} style={{ width: '48%' }}>
                    Facebook
                </Button>
            </div>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                Or <Link to="/register">register now!</Link>
            </div>
        </div>


    )
}
