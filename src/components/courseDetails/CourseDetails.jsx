import React from 'react'
import { Layout, Row, Col, Card, Button, Typography, Space, Rate } from 'antd';
import { useLoaderData } from 'react-router-dom';

const { Title, Paragraph, Text } = Typography;
const { Content } = Layout;

const courseDetail = {
    title: 'Course 1',
    description: 'This is a detailed description of the course. It provides an in-depth overview of the course contents, objectives, and outcomes.',
    image: 'image1.jpg',
    rating: 4.5,
    instructor: 'John Doe',
    duration: '10 hours',
    price: '$99',
    content: [
        'Introduction to the course',
        'Module 1: Basics',
        'Module 2: Intermediate Concepts',
        'Module 3: Advanced Techniques',
        'Conclusion and Summary'
    ]
};
export default function CourseDetails() {
    const data = useLoaderData([])
    console.log(data)
    return (
        <Layout style={{ minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
            <Content style={{ padding: '50px', marginTop: '64px' }}>
                <Row gutter={[16, 16]}>
                    <Col xs={24} md={12}>
                        <img alt={data?.title} src={data?.image} style={{ width: '100%', borderRadius: '8px' }} />
                    </Col>
                    <Col xs={24} md={12}>
                        <Title level={2}>{data?.title}</Title>
                        <Text type="secondary">Instructor: {data?.instructor}</Text>
                        <Paragraph style={{ marginTop: '10px' }}>{data?.description}</Paragraph>
                        <Space direction="vertical" size="middle">
                            <Rate allowHalf defaultValue={data?.rating} />
                            <Text><strong>Duration:</strong> {data?.duration}</Text>
                            <Text><strong>Price:</strong> {data?.price}</Text>
                            <Button type="primary" style={{ marginTop: '10px' }}>Enroll Now</Button>
                        </Space>
                    </Col>
                </Row>
                <Row gutter={[16, 16]} style={{ marginTop: '40px' }}>
                    <Col xs={24}>
                        <Card title="Course Content">
                            {data?.content?.map((item, index) => (
                                <Paragraph key={index}>
                                    <strong>Module {index + 1}:</strong> {item}
                                </Paragraph>
                            ))}
                        </Card>
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
}
