import 'antd/dist/antd.css';
import { Button } from 'antd';
import { useState } from 'react';

const MenuButtons = ({value, onClick}) => {
    const [stateType, setStateType] = useState("default");
    return (
        <Button
        size='large'
        type={stateType}
        onFocus={() => setStateType("primary")}
        onBlur={() => setStateType("default")}
        onClick={onClick}
        style = {{marginLeft: 10}}
        >
        {value}
        </Button>
    );
}
export default MenuButtons;
