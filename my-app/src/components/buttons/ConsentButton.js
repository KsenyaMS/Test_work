import 'antd/dist/antd.css';
import { Button } from 'antd';
import { useState } from 'react';

const ConsentButton = () => {
    const [state, setState] = useState({ background: "#58D3A5", borderColor: "#58D3A5", color: "#FFFFFF", marginTop: 30 });
    return (
        <Button
            size='large'
            onMouseEnter={() => setState({...state, background: "#98E3C7", color: "#FFFFFF", marginTop: 30 })}
            onMouseLeave={() => setState({...state, background: "#58D3A5", borderColor: "#58D3A5", color: "#FFFFFF", marginTop: 30 })}
            style={state}
        >
            Ок
        </Button>
    );
}
export default ConsentButton;
