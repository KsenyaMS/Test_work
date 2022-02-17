import 'antd/dist/antd.css';
// import { useState } from 'react';
import MenuButtons from './MenuButtons';
import StatementOfFines from './StatementOfFines';
import { Divider } from 'antd';

const PageMenu = () => {
  // const [state, setState] = useState({tableOne: false, tableTwo: false, tableThree: false, tableFour: false});
    return (
      <>
      <MenuButtons value = "Ведомость штрафов" />
      <MenuButtons value = "Журнал транзакций" />
      <MenuButtons value = "Условия работы" />
      <MenuButtons value = "Журнал" />
      <StatementOfFines />
      </>
    );
}
export default PageMenu;