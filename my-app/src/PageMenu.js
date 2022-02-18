import 'antd/dist/antd.css';
import MenuButtons from './MenuButtons';
import {Row, Button, Col } from 'antd';
import { useState } from 'react';
import { SyncOutlined  } from '@ant-design/icons';

const PageMenu = () => {
  const number = 2;
  const [state, setState] = useState({background: "#FFFFFF", borderColor: "#3F3D56", color: "#3F3D56" });
    return (
      <>
      <Row>
      <MenuButtons value = "Ведомость штрафов" />
      <MenuButtons value = "Журнал транзакций"/>
      <MenuButtons value = "Условия работы"/>
      <MenuButtons value = "Журнал"/>
      {number != 1 && (
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