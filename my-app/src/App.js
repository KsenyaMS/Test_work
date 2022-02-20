
import PersonData from './PersonData';
import PageMenu from './PageMenu';
import {Divider } from 'antd';
import './App.less';

const App = () => (
  <div className="App">
    <PersonData />
    <Divider />
    <PageMenu />
  </div>
);

export default App;
