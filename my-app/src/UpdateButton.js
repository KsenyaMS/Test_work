import { Button } from 'antd';
import { useState } from 'react';
import {SyncOutlined} from "@ant-design/icons";

const UpdateButton = ({onClick}) => {
    const [state, setState] = useState({ background: "#FFFFFF", borderColor: "#3F3D56", color: "#3F3D56" });
    return (
        <Button
            onMouseEnter={() => setState({...state, background: "#3F3D56", borderColor: "#3F3D56", color: "#FFFFFF" })}
            onMouseLeave={() => setState({...state, background: "#FFFFFF", borderColor: "#3F3D56", color: "#3F3D56" })}
            onClick={onClick}
            style={state}
            icon={<SyncOutlined />}
        >
        Обновить
        </Button>
    );
}
export default UpdateButton;