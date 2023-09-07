
import PersonData from './components/drivercard/PersonData';
import PageMenu from './components/drivercard/PageMenu';
import {Divider, Switch } from 'antd';
import './App.less';
import DriverCard from './components/drivercard/DriverCard';
import React from 'react';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <DriverCard/>
      </React.Fragment>
    </div>
  )
}

export default App;
