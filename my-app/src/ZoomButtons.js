import 'antd/dist/antd.css';
import { Button, Table } from 'antd';
import { Typography } from 'antd';
import { useState } from 'react';
const { Text } = Typography;

const ZoomButtons = ({statusBtn, onClick}) => {
    const style = statusBtn === "1"
      ? { margin: '8px', background: "#D35858", borderColor: "#D35858", color: "#FFFFFF" }
      : { margin: '8px', background: "#58D3A5", borderColor: "#58D3A5", color: "#FFFFFF" };
    return (
      <div key={statusBtn} >
        <Button onClick={onClick} style={style} shape="circle" size="small" >
          {statusBtn === "1" ? "-" : "+"}
        </Button>
      </div>
    );
}
export default ZoomButtons;
