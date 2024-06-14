import React, { useContext, useState } from 'react'
import { Form, Input, Button, Layout, Typography, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useAuth from '../../hooks/useAuth';

const { Content } = Layout;
const { Title } = Typography;

export default function Register() {

    const axiosPublic = useAxiosPublic();
    const { createUser } = useAuth();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onFinish = async (values) => {
        if (values.password !== values.confirm) {
            message.error('Passwords do not match!');
            return;
        }

        try {
            setLoading(true);
            await createUser(values.email, values.password);
            message.success('Registration successful!');

            const userInfo = {
                name: values.name,
                email: values.email
            }
            axiosPublic.post('/users', userInfo)
                .then(res => {
                    if (res.data.insertedId) {
                        message.success('User added database successful!');
                    }
                })
            navigate('/');
        } catch (error) {
            message.error('Registration failed. Please try again.');
            console.error('Registration error:', error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Content style={{ padding: '0 50px', marginTop: '64px' }}>
                <div style={{ background: '#fff', padding: 24, minHeight: 380, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ maxWidth: '400px', width: '100%' }}>
                        <Title level={2} style={{ textAlign: 'center' }}>Register for EduSphere</Title>
                        <Form
                            name="register"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="name"
                                rules={[{ required: true, message: 'Please enter your name!' }]}
                            >
                                <Input prefix={<UserOutlined />} placeholder="Name" />
                            </Form.Item>
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
                            <Form.Item
                                name="confirm"
                                rules={[{ required: true, message: 'Please confirm your password!' }]}
                            >
                                <Input prefix={<LockOutlined />} type="password" placeholder="Confirm Password" />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" loading={loading} style={{ width: '100%' }}>
                                    Register
                                </Button>
                            </Form.Item>
                        </Form>
                        <div style={{ textAlign: 'center' }}>
                            Already have an account? <Link to="/login">Login here</Link>
                        </div>
                    </div>
                </div>
            </Content>
        </Layout>
    )
}
