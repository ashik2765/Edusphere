import React from 'react'
import { Layout } from 'antd';


export default function eduFooter() {
    const { Footer } = Layout;
    return (
        <Footer style={{ textAlign: 'center', padding: '10px 50px', background: '#001529', color: 'white' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <h4>EduSphere</h4>
                    <p>Empowering Knowledge, One Course at a Time.</p>
                </div>
                <div>
                    <h4>Links</h4>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li><a href="/" style={{ color: 'white' }}>Home</a></li>
                        <li><a href="/courses" style={{ color: 'white' }}>Courses</a></li>
                        <li><a href="/dashboard" style={{ color: 'white' }}>Dashboard</a></li>
                        <li><a href="/contact" style={{ color: 'white' }}>Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Follow Us</h4>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li><a href="#" style={{ color: 'white' }}>Facebook</a></li>
                        <li><a href="#" style={{ color: 'white' }}>Twitter</a></li>
                        <li><a href="#" style={{ color: 'white' }}>Instagram</a></li>
                        <li><a href="#" style={{ color: 'white' }}>LinkedIn</a></li>
                    </ul>
                </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                EduSphere ©2024 Created by Ashikur Rahman
            </div>
        </Footer>
    )
}
