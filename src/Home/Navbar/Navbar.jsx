import React, { useContext, useState } from 'react';
import { Layout, Menu, Button, Drawer } from 'antd';
import { Link } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';
import './navbar.css';
import { AntDesignOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { AuthContext } from '../../Authentication/AuthProvider';

const { Header } = Layout;
export default function Navbar() {
    const [open, setOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const menuItems = [
        { key: '1', label: <Link to="/">Home</Link> },
        { key: '2', label: <Link to="/courses">Courses</Link> },
        { key: '3', label: <Link to="/dashboard">Dashboard</Link> },
    ];

    const showDrawer = () => {
        setOpen(true);
    };

    const closeDrawer = () => {
        setOpen(false);
    };
    const handleLogOut = async () => {
        try {
            await logOut();
            // Add any additional logic if needed, such as redirecting to the login page
        } catch (error) {
            console.error("Failed to log out:", error);
        }
    };

    return (
        <Layout>
            <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="logo" style={{ color: 'white', fontSize: '20px' }}>
                    <Link to="/" style={{ color: 'white' }}>EduSphere</Link>
                </div>
                <div className="desktop-menu" style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                    <Menu theme="dark" mode="horizontal" items={menuItems} />
                </div>
                <div className="desktop-buttons">

                    {user ? <>
                        <Avatar
                            style={{ marginRight: "10px" }}
                            size={{ xs: 24, sm: 32, md: 34, lg: 60, xl: 60, xxl: 100 }}
                            src={user?.photoURL}
                        />
                        <Button type="primary" style={{ marginRight: '10px' }} onClick={handleLogOut}>
                            LogOut
                        </Button>
                    </> : <>
                        <Button type="primary" style={{ marginRight: '10px' }}>
                            <Link to="/login" style={{ color: 'white' }}>Login</Link>
                        </Button>
                    </>}
                </div>
                <div className="mobile-menu">
                    <Button type="text" icon={<MenuOutlined />} onClick={showDrawer} style={{ color: 'white' }} />
                    <Drawer
                        title="Menu"
                        placement="right"
                        onClose={closeDrawer}
                        open={open}
                        closable={true}
                    >
                        <Menu mode="vertical" items={menuItems} />
                        {user ? <>
                            <Avatar
                                style={{ marginRight: "10px" }}
                                size={{ xs: 24, sm: 32, md: 34, lg: 64, xl: 60, xxl: 100 }}
                                src={user?.photoURL}
                            />
                            <Button onClick={handleLogOut} type="primary" style={{ marginRight: '10px', marginTop: '10px' }}>
                                <Link to="/login" style={{ color: 'white' }}>LogOut</Link>
                            </Button>
                        </> : <>
                            <Button type="primary" style={{ marginRight: '10px', marginTop: '10px' }}>
                                <Link to="/login" style={{ color: 'white' }}>Login</Link>
                            </Button>
                        </>}
                    </Drawer>
                </div>
            </Header>
        </Layout>
    )
}
