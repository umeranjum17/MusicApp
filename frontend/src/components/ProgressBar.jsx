import React from 'react'
import { Progress } from 'antd';

const ProgressBar = () => {
    return (
      <Progress percent={50} showInfo={false} status="active" trailColor="#ccc" style={{padding:"40px"}} strokeColor={"#00adb5"} />

    )
}
export default ProgressBar
