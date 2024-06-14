import React, { useContext, useEffect, useState } from 'react';
import { Layout, Card, Row, Col, Statistic, Spin, message } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';
import { AuthContext } from '../../Authentication/AuthProvider';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import './dashboardHome.css';

const { Content, Footer } = Layout;

const DashboardHome = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axiosPublic.get("/courses");
                setCourses(response.data); // Assuming the API response is already in JSON format
            } catch (error) {
                console.error("Error fetching courses:", error);
            } finally {
                setLoading(false);
            }
        };

        if (user) {
            fetchCourses();
        }
    }, [user, axiosPublic]);

    if (loading) {
        return <Spin size="large" />;
    }

    const data = [
        { name: 'January', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'February', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'March', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'April', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
        { name: 'June', uv: 2390, pv: 3800, amt: 2500 },
        { name: 'July', uv: 3490, pv: 4300, amt: 2100 },
    ];

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Content style={{ margin: '0 16px' }}>
                <div style={{ padding: 24, minHeight: 360 }}>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card>
                                <Statistic
                                    title="Active Users"
                                    value={1128}
                                    precision={0}
                                    valueStyle={{ color: '#3f8600' }}
                                />
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card>
                                <Statistic
                                    title="Course Views"
                                    value={938}
                                    precision={0}
                                    valueStyle={{ color: '#cf1322' }}
                                />
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card>
                                <Statistic
                                    title="Total Courses"
                                    value={courses.length}
                                    precision={0}
                                    valueStyle={{ color: '#234567' }}
                                />
                            </Card>
                        </Col>
                    </Row>
                    <Row gutter={16} style={{ marginTop: 24 }}>
                        <Col span={12}>
                            <Card title="Course Enrollments">
                                <BarChart width={500} height={300} data={data}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="uv" fill="#8884d8" />
                                    <Bar dataKey="pv" fill="#82ca9d" />
                                </BarChart>
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card title="Course Progress">
                                <LineChart
                                    width={500}
                                    height={300}
                                    data={data}
                                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                </LineChart>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>EduSphere ©2023 Created by Ashikur rahman</Footer>
        </Layout>
    );
};

export default DashboardHome;
