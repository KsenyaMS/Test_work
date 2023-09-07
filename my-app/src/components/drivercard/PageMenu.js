import MenuButtons from '../buttons/MenuButtons';
import {Row, Button, Col } from 'antd';
import { useState } from 'react';
import { SyncOutlined  } from '@ant-design/icons';
import StatementOfFines from './components/StatementOfFines';
import Journal from './components/Journal';
import TransactionLog from './components/TransactionLog';
import UpdateButton from '../buttons/UpdateButton';
import "./PageMenu.css";

const PageMenu = () => {
  let [state, setState] = useState({activeTabKey: "1", update: 0});
    return (
      <>
        <div className='menu-flexbox-container'>
          <div className='scrolling-wrapper-flexbox'>
            <MenuButtons className='card' value = "Ведомость штрафов" statusBtn={state.activeTabKey === "1"} onClick={() => setState({...state, activeTabKey: "1", update: state.update + 1})}/>
            <MenuButtons className='card' value = "Журнал транзакций" statusBtn={state.activeTabKey === "2"} onClick={() => setState({...state, activeTabKey: "2", update: state.update + 1})}/>
            <MenuButtons className='card' value = "Условия работы" statusBtn={state.activeTabKey === "3"} onClick={() => setState({...state, activeTabKey: "3", update: state.update + 1})}/>
            <MenuButtons className='card' value = "Журнал" statusBtn={state.activeTabKey === "4"} onClick={() => setState({...state, activeTabKey: "4", update: state.update + 1})}/>
          </div>
          <div className='button-div-style'>
            {state.activeTabKey !== '1' && (
              <UpdateButton/>
            )}
          </div>
        </div>
          {state.activeTabKey === '1' && (
              <StatementOfFines/>
          )}
          {state.activeTabKey === '2' && (
              <TransactionLog/>
          )}
          {state.activeTabKey === '4' && (
              <Journal/>
          )}
      </>
    );
}
export default PageMenu;