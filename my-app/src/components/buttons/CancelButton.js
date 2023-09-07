import 'antd/dist/antd.css';
import { Button } from 'antd';
import { useState } from 'react';

const CanselButton = () => {
    const [state, setState] = useState({ background: "#FFFFFF", borderColor: "#DBDBDB", color: "#3F3D56", marginLeft: 10, marginTop: 30 });
    return (
        <Button
        size='large'
        onMouseEnter={() => setState({...state, background: "#3F3D56", color: "#FFFFFF", marginTop: 30 })}
        onMouseLeave={() => setState({...state, background: "#FFFFFF", borderColor: "#DBDBDB", color: "#3F3D56", marginTop: 30 })}
        style={state}
        >
        Отмена
        </Button>
    );
}
export default CanselButton;
