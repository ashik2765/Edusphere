import { Button, Layout } from 'antd'
import React, { useState } from 'react'
import SideBar from '../components/SideBar';
import './DashboardLayout.css'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { Outlet } from 'react-router-dom';

const { Sider} = Layout;
export default function DashBoardLayout() {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <Layout>
            <Sider
                theme='light'
                trigger={null}
                collapsible
                collapsed={collapsed}
                className='sider'>
                <SideBar />
                <Button
                    type='text'
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => setCollapsed(!collapsed)}
                    className="tigger-btn"
                >
                </Button>
            </Sider>
            <Outlet></Outlet>
            
        </Layout >
    )
}
