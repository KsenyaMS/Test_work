import 'antd/dist/antd.css';
import { Button } from 'antd';
import { useState } from 'react';

const MenuButtons = ({value}) => {
    const [state, setState] = useState({background: "#F4F4F9", borderColor: "#F4F4F9", color: "#3F3D56" });
    return (
        <Button
        type="primary"
        style={state}
        shape="round"
        size='large'
        onClick={() => setState({ ...state, background: "#3F3D56", borderColor: "#3F3D56", color: "#FFFFFF" })}
        onBlur={() => setState({ ...state, background: "#F4F4F9", borderColor: "#F4F4F9", color: "#3F3D56" })}
        >
        {value}
        </Button>
    );
}
export default MenuButtons;
