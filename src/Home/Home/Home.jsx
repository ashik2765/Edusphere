import React from 'react'
import { Layout, Row, Col, Button, Typography } from 'antd';
import { Link } from 'react-router-dom';
import Banner from '../../assets/e-learnig.png'
const { Content } = Layout;
const { Title, Paragraph } = Typography;


export default function Home() {
    return (
        <Content style={{ padding: '0 50px', marginTop: '64px' }}>
            <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                <Row gutter={[16, 16]} style={{ textAlign: 'center' }}>
                    <Col span={24}>
                        <Title level={1}>Welcome to EduSphere</Title>
                        <Paragraph>
                            Empowering Knowledge, One Course at a Time.
                        </Paragraph>
                    </Col>
                    <Col span={24}>
                        <img
                            src={Banner}
                            alt="Hero"
                            style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
                        />
                    </Col>
                </Row>
                <Row gutter={[16, 16]} style={{ textAlign: 'center', marginTop: '40px' }}>
                    <Col span={8}>
                        <Title level={3}>Learn at Your Pace</Title>
                        <Paragraph>
                            Access a wide variety of courses designed to help you learn at your own pace.
                        </Paragraph>
                    </Col>
                    <Col span={8}>
                        <Title level={3}>Expert Instructors</Title>
                        <Paragraph>
                            Learn from industry experts who are passionate about teaching.
                        </Paragraph>
                    </Col>
                    <Col span={8}>
                        <Title level={3}>Join Our Community</Title>
                        <Paragraph>
                            Connect with fellow learners and instructors to grow together.
                        </Paragraph>
                    </Col>
                </Row>
                <Row gutter={[16, 16]} style={{ textAlign: 'center', marginTop: '40px' }}>
                    <Col span={12}>
                        <Button type="primary" size="large">
                            <Link to="/courses" style={{ color: 'white' }}>Explore Courses</Link>
                        </Button>
                    </Col>
                    <Col span={12}>
                        <Button size="large">
                            <Link to="/register">Get Started</Link>
                        </Button>
                    </Col>
                </Row>
            </div>
        </Content>
    )
}
