import React, { useState } from 'react'
import { Layout, Form, Input, Button, Typography, message } from 'antd';

const { Title } = Typography;
const { Content } = Layout;
const { TextArea } = Input;

export default function AddCourses() {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const onFinish = (values) => {
        setLoading(true);
        fetch('http://localhost:3000/courses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        })
            .then((res) => res.json())
            .then((data) => {
                message.success('Course added successfully!');
                form.resetFields();
            })
            .catch((error) => {
                console.error('Error adding course:', error);
                message.error('Failed to add course. Please try again.');
            })
            .finally(() => {
                setLoading(false);
            });
    };
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Content style={{ padding: '50px', marginTop: '64px' }}>
                <Title level={2} style={{ textAlign: 'center' }}>Add New Course</Title>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    style={{ maxWidth: '600px', margin: '0 auto' }}
                >
                    <Form.Item
                        name="title"
                        label="Course Title"
                        rules={[{ required: true, message: 'Please input the course title!' }]}
                    >
                        <Input placeholder="Enter course title" />
                    </Form.Item>
                    <Form.Item
                        name="description"
                        label="Course Description"
                        rules={[{ required: true, message: 'Please input the course description!' }]}
                    >
                        <TextArea rows={4} placeholder="Enter course description" />
                    </Form.Item>
                    <Form.Item
                        name="image"
                        label="Course Image URL"
                        rules={[{ required: true, message: 'Please input the course image URL!' }]}
                    >
                        <Input placeholder="Enter image URL" />
                    </Form.Item>
                    <Form.Item
                        name="instructor"
                        label="Instructor"
                        rules={[{ required: true, message: 'Please input the instructor name!' }]}
                    >
                        <Input placeholder="Enter instructor name" />
                    </Form.Item>
                    <Form.Item
                        name="duration"
                        label="Duration"
                        rules={[{ required: true, message: 'Please input the course duration!' }]}
                    >
                        <Input placeholder="Enter course duration" />
                    </Form.Item>
                    <Form.Item
                        name="price"
                        label="Price"
                        rules={[{ required: true, message: 'Please input the course price!' }]}
                    >
                        <Input placeholder="Enter course price" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" loading={loading}>
                            Add Course
                        </Button>
                    </Form.Item>
                </Form>
            </Content>
        </Layout>
    )
}
