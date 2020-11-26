import { Layout, Menu } from 'antd';
import React from 'react';
import songify from "../Singify.png"
import guitar from "../guitar2.png"
const { Header } = Layout;
const AppHeader = () => {
    return (
        <Header className="custom__header">
            <div className="logo" style={{display:"flex",justifyContent:"left",width:"100%",alignItems:"center"}}>

                <img src={guitar} alt="" srcset=""style={{height:"50px"}}/>
                <h1 style={{paddingTop:"10px"}}>Singify</h1>
            </div>
            <Menu  mode="horizontal" defaultSelectedKeys={['2']}>
                
            </Menu>
        </Header>
    )
}

export default AppHeader
