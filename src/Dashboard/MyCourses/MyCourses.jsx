import React, { useContext, useEffect, useState } from 'react';
import { Table, Button, Spin, message } from 'antd';
import { AuthContext } from '../../Authentication/AuthProvider';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import './mycourses.css';




const MyCourses = () => {

    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axiosPublic.get("/courses");
                setCourses(response.data);
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


    const handleEdit = (courseId) => {
        console.log(`Edit course ${courseId}`);
        // Implement edit functionality
    };

    const handleDelete = async (courseId) => {
        try {
            await axiosPublic.delete(`/courses/${courseId}`);
            setCourses(prevCourses => prevCourses.filter(course => course.id !== courseId));
            message.success('Course deleted successfully');
        } catch (error) {
            console.error('Error deleting course:', error);
            message.error('Failed to delete course');
        }
    };
    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Instructor',
            dataIndex: 'instructor',
            key: 'instructor',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            render: (text) => {
                const words = text.split(' ');
                return words.length > 10 ? words.slice(0, 10).join(' ') + '...' : text;
            }
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, record) => (
                <span>
                    <Button onClick={() => handleEdit(record.id)} style={{ marginRight: 8 }}>
                        Edit
                    </Button>
                    <Button onClick={() => handleDelete(record.id)} type="primary" danger>
                        Delete
                    </Button>
                </span>
            ),
        },
    ];
    if (loading) {
        return <Spin size="large" />;
    }

    return (
        <div className="dashboard-container">
            <h1>{user?.displayName}'s Courses</h1>
            <Table
                columns={columns}
                dataSource={courses.map(course => ({ ...course, key: course.id }))}
            />
        </div>
    );
};

export default MyCourses;
