import 'antd/dist/antd.css';
import { Button } from 'antd';
import { useState } from 'react';

const MenuButtons = ({value, statusBtn, onClick}) => {
    const state = statusBtn === true ? {background: "#3F3D56", color: "#FFFFFF", margin: 8} : {background: "#F4F4F9", borderColor: "#F4F4F9", color: "#3F3D56", margin: 8}
    return (
        <Button
            onClick={onClick}
            style={state}
        >
        {value}
        </Button>
    );
}
export default MenuButtons;
