import { BackwardFilled, FastForwardFilled, PlayCircleOutlined } from '@ant-design/icons';
import { Col, Layout, Row } from 'antd';
import React from 'react';
import Disk from './Disk';
import ProgressBar from './ProgressBar';
import design from "../design.png"
import bigDesign from "../bigdesign.svg"

const { Content } = Layout;

const MainContent = () => {
    return (
        <>
<img src={design} alt="" style={{height:"52px",position:"absolute",left:"300px",bottom:"0"}}/>
<img src={design} alt="" style={{height:"52px",position:"absolute",left:"300px",top:"80px"}}/>
<img src={design} alt="" style={{height:"52px",position:"absolute",right:"0",top:"100px"}}/>
<img src={bigDesign} alt="" style={{height:"252px",position:"absolute",right:"10px ",bottom:"60px"}}/>
        <Content style={{ padding: '0 50px',display:"flex",flexDirection:"column" }}>

                <Row className="gutter-box">
                    <Col span={24}>
                            <Disk />
                            <ProgressBar />
                    </Col>
                </Row>
                <Row className="gutter-box" style={{fontSize:"100px",margin:"0 auto"}}>
                    <Col span={24} style={{textAlign:"center"}}>
                            <BackwardFilled />
                            <PlayCircleOutlined />
                            <FastForwardFilled />
                    </Col>
                </Row>
        </Content>
        </>
    )
}

export default MainContent
