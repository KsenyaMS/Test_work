import PersonData from './PersonData';
import PageMenu from './PageMenu';
import Journal from './Journal';
import StatementOfFines from './StatementOfFines';
import TransactionLog from './TransactionLog';
import { Button, Divider, Col, Row } from 'antd';
const App = (number) => (
  <div>
    <PersonData />
    <Divider />
    <PageMenu />
      {/* <Row align='center' >
        <StatementOfFines/>
      </Row>
      <Row align='center' >
        <Journal />
      </Row> */}
    
    <Row >
          <TransactionLog />
    </Row>
  </div>
);

export default App;
