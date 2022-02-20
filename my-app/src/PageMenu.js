import MenuButtons from './MenuButtons';
import {Row, Button, Col } from 'antd';
import { useState } from 'react';
import { SyncOutlined  } from '@ant-design/icons';
import StatementOfFines from './StatementOfFines';
import Journal from './Journal';
import TransactionLog from './TransactionLog';

const PageMenu = () => {
  const [state, setState] = useState('0');
  const [stateType, setStateType] = useState({background: "#FFFFFF", borderColor: "#3F3D56", color: "#3F3D56" });
    return (
      <>
        <Row>
          <MenuButtons value = "Ведомость штрафов" onClick={() => setState('1')}/>
          <MenuButtons value = "Журнал транзакций" onClick={() => setState('2')}/>
          <MenuButtons value = "Условия работы" onClick={() => setState('3')}/>
          <MenuButtons value = "Журнал" onClick={() => setState('4')}/>
          {state !== '1' && (
            <Col offset={11}>
              <Button
                type="primary"
                shape="round"
                size='large'
                style={stateType}
                onClick={() => setStateType({ ...stateType, background: "#3F3D56", borderColor: "#3F3D56", color: "#FFFFFF" })}
                onBlur={() => setStateType({ ...stateType, background: "#FFFFFF", borderColor: "#3F3D56", color: "#3F3D56" })}
              >
                  Обновить
                  <SyncOutlined />
              </Button>
            </Col>
          )}
          {state === '1' && (
            <Row align='center'>
              <StatementOfFines/>
            </Row>
          )}
          {state === '2' && (
            <Row>
              <TransactionLog/>
            </Row>
          )}
          {state === '4' && (
            <Row align='center'>
              <Journal/>
            </Row>
          )}
        </Row>
      </>
    );
}
export default PageMenu;