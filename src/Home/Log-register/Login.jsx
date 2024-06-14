import React, { useState } from 'react'
import { Form, Input, Button, Checkbox, Layout, Typography, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Content } from 'antd/es/layout/layout';
import Title from 'antd/es/skeleton/Title';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import useAuth from '../../hooks/useAuth';

export default function Login() {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { logIn } = useAuth();
    const from = location.state?.from?.pathname || "/";

    const onFinish = async (values) => {
        try {
            setLoading(true);
            const userCredential = await logIn(values.email, values.password);
            message.success('Login successful!');
            console.log('Logged in user:', userCredential.user);
            navigate(from, { replace: true });
        } catch (error) {
            message.error('Login failed. Please check your credentials and try again.');
            console.error('Login error:', error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Content style={{ padding: '0 50px', marginTop: '64px' }}>
                <div style={{ background: '#fff', padding: 24, minHeight: 380, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ maxWidth: '400px', width: '100%' }}>
                        <Title level={2} style={{ textAlign: 'center' }}>Login to EduSphere</Title>
                        <Form
                            name="login"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="email"
                                rules={[{ required: true, message: 'Please enter your email!' }]}
                            >
                                <Input prefix={<UserOutlined />} placeholder="Email" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please enter your password!' }]}
                            >
                                <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
                            </Form.Item>
                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <Link to="/forgot-password" style={{ float: 'right' }}>Forgot password</Link>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" loading={loading} style={{ width: '100%' }}>
                                    Log in
                                </Button>
                            </Form.Item>
                        </Form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </Content>
        </Layout>
    )
}
