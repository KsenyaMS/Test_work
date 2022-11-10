import MenuButtons from './MenuButtons';
import {Row, Button, Col } from 'antd';
import { useState } from 'react';
import { SyncOutlined  } from '@ant-design/icons';
import StatementOfFines from './StatementOfFines';
import Journal from './Journal';
import TransactionLog from './TransactionLog';
import UpdateButton from './UpdateButton';

const PageMenu = () => {
  let [state, setState] = useState({activeTabKey: "1", update: 0});
    return (
      <>
        <Row>
          <MenuButtons value = "Ведомость штрафов" statusBtn={state.activeTabKey === "1"} onClick={() => setState({...state, activeTabKey: "1", update: state.update + 1})}/>
          <MenuButtons value = "Журнал транзакций" statusBtn={state.activeTabKey === "2"} onClick={() => setState({...state, activeTabKey: "2", update: state.update + 1})}/>
          <MenuButtons value = "Условия работы" statusBtn={state.activeTabKey === "3"} onClick={() => setState({...state, activeTabKey: "3", update: state.update + 1})}/>
          <MenuButtons value = "Журнал" statusBtn={state.activeTabKey === "4"} onClick={() => setState({...state, activeTabKey: "4", update: state.update + 1})}/>
          {state.activeTabKey !== '1' && (
            <Col offset={11}>
              <UpdateButton/>
            </Col>
          )}
          {state.activeTabKey === '1' && (
            <Row align='center'>
              <StatementOfFines/>
            </Row>
          )}
          {state.activeTabKey === '2' && (
            <Row>
              <TransactionLog/>
            </Row>
          )}
          {state.activeTabKey === '4' && (
            <Row align='center'>
              <Journal/>
            </Row>
          )}
        </Row>
      </>
    );
}
export default PageMenu;