import 'antd/dist/antd.css';
import { Button } from 'antd';
import { useState } from 'react';

const MenuButtons = ({value, type, onClick}) => {
    const [state, setState] = useState({background: "#F4F4F9", borderColor: "#F4F4F9", color: "#3F3D56" });
    return (
        <Button
        type={type}
        onClick={onClick}
        >
        {value}
        </Button>
    );
}
export default MenuButtons;
