import MenuButtons from './MenuButtons';
import {Row, Button, Col } from 'antd';
import { useState } from 'react';
import { SyncOutlined  } from '@ant-design/icons';

const PageMenu = () => {
  const number = 2;
  const [stateType, setStateType] = useState({type: "default", key: '0'});
  const [state, setState] = useState({background: "#FFFFFF", borderColor: "#3F3D56", color: "#3F3D56" });
    return (
      <>
      <Row>
        <Button
        type={stateType.type}
        onFocus={() => setStateType({...stateType, type: "primary", key: '1' })}
        >
          Ведомость штрафов
        </Button>
      <MenuButtons value = "Ведомость штрафов" type={stateType.type} onClick={() => setStateType({...stateType, type: "primary", key: '1' })}/>
      <MenuButtons value = "Журнал транзакций"/>
      <MenuButtons value = "Условия работы"/>
      <MenuButtons value = "Журнал"/>
      {stateType.key === '1' && (
      <Col offset={11}>
        <Button
          type="primary"
          shape="round"
          size='large'
          style={state}
          onClick={() => setState({ ...state, background: "#3F3D56", borderColor: "#3F3D56", color: "#FFFFFF" })}
          onBlur={() => setState({ ...state, background: "#FFFFFF", borderColor: "#3F3D56", color: "#3F3D56" })}
        >
            Обновить
            <SyncOutlined />
        </Button>
      </Col>
      )}
      </Row>
      </>
    );
}
export default PageMenu;