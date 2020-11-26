import { Layout, Menu } from 'antd';
import React from 'react';

import {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    RiseOutlined,
    QuestionCircleFilled,
    LoadingOutlined,
    PlayCircleFilled,
    FastForwardFilled
  } from '@ant-design/icons';
  
const { Sider } = Layout;
const Sidebar = () => {
    return (
        <Sider className="site-layout-background" width={300} >
            <Menu

                style={{ height: '100%',fontSize:"18px" }}
            >
                <Menu.Item key="1" >
                 <PlayCircleFilled />         Songs
            </Menu.Item>
                <Menu.Item key="2" >
                <RiseOutlined />  Trending
            </Menu.Item>

                <Menu.Item key="3" >
                <QuestionCircleFilled />    About
            </Menu.Item>
            </Menu>
        </Sider>

    )
}

export default Sidebar
