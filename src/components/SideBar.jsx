import { Flex, Menu } from 'antd'
import { MdCastForEducation } from "react-icons/md";
import { UserOutlined, ProfileOutlined, LogoutOutlined, OrderedListOutlined, CarryOutOutlined, SettingOutlined, FileAddOutlined ,HomeOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom';

export default function SideBar() {
    return (
        <>
            <Flex align='center' justify='center'>
                <div className="logo">
                    <MdCastForEducation />
                </div>
            </Flex>
            <Menu
                mode="inline"
                defaultSelectedKeys={[1]}
                className="menu-bar"
                items={[
                    {
                        key: '1',
                        icon: <HomeOutlined />,
                        label:<Link to="/dashboard">Home</Link>
                    },
                    {
                        key: '2',
                        icon: <CarryOutOutlined />,
                        label: <Link to="/dashboard/mycourses">My courses</Link>
                    },
                    {
                        key: '3',
                        icon: <FileAddOutlined />,
                        label: <Link to="/dashboard/addcourse">Add a course</Link>
                    },
                    {
                        key: '4',
                        icon: <ProfileOutlined />,
                        label: 'Profile'
                    },
                    {
                        key: '5',
                        icon: <SettingOutlined />,
                        label: 'Setting'
                    },
                    {
                        key: '6',
                        icon: <LogoutOutlined />,
                        label: 'Log out'
                    },
                ]}
            >
            </Menu>
        </>
    )
}
