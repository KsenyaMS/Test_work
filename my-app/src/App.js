
import PersonData from './PersonData';
import PageMenu from './PageMenu';
import Journal from './Journal';
import StatementOfFines from './StatementOfFines';
import TransactionLog from './TransactionLog';
import { Button, Divider, Col, Row } from 'antd';
import './App.less';

const App = (number) => (
  <div className="App">
    <Button type="default">Button</Button>
    <Button type="primary">Button</Button>
    <Button type="text">Button</Button>
    <PersonData />
    <Divider />
    <PageMenu />
      <Row align='center' >
        <StatementOfFines/>
      </Row>
      <Row align='center' >
        <Journal />
      </Row>
    
    <Row >
          <TransactionLog />
    </Row>
  </div>
);

export default App;
