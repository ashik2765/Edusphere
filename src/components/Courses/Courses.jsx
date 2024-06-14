import { Card, Col, Row, Typography, Layout, Button } from 'antd';
import './courses.css';
import { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Authentication/AuthProvider';
import Swal from 'sweetalert2';

const { Title } = Typography;
const { Content } = Layout;

export default function Courses() {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:3000/courses")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
    const hadleAddToCart = () => {
        if (user) {

        }
        else {
            Swal.fire({
                title: "Your are not logged in",
                text: "You won't be able to add this course on cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Please login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { form: location } })
                }
            });
        }
        console.log('clicked')
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Content style={{ padding: '50px', marginTop: '64px' }}>
                <Title level={2} style={{ textAlign: 'center' }}>Available Courses</Title>
                <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
                    {products.map((course, index) => (
                        <Col key={index} xs={24} sm={12} md={8} lg={6}>
                            <Card
                                hoverable
                                cover={<img alt={course.title} src={course.image} />}
                                className='ant-card'
                            >
                                <Card.Meta title={course.title} description={course.description} />
                                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                                    <Button type="primary" style={{ marginRight: '10px' }}><Link to={`/courseDetails/${course._id}`}>View Details</Link></Button>
                                    <Button onClick={hadleAddToCart}>Add to Cart</Button>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Content>
        </Layout>
    )
}
