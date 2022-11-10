import 'antd/dist/antd.css';
import { Row, Col, Avatar, PageHeader, Button, Divider, Space } from 'antd';
import { UserOutlined  } from '@ant-design/icons';
import ZoomButtons from './ZoomButtons';
import { Typography } from 'antd';
import { useState } from 'react';
const { Text } = Typography;

const PersonData = () => {
    let [balance, setBalance] = useState(0);
    let [deposit, setDeposit] = useState(0);
    let [freeBalance, setFreeBalance] = useState(0);
    
    return (
      <>
        <PageHeader title="Карточка водителя"/>
        <Divider />
        <Row >
            <Col span={2}>
                <Avatar style={{  marginLeft: 15 }} size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                icon={<UserOutlined  />}
                />
            </Col>
            <Col style={{paddingTop: 20}} span={5}>
                <Text><h4>Пашкин Сергей Николаевич</h4></Text>
            </Col>
            <Col style={{paddingTop: 20}} span={5}>
                <Text><h4>Ford Transit B722KM790</h4></Text>
            </Col>
            <Col span={3} align='center'>
                <Text>Балланс</Text>
                <div>
                <Space>
                    <ZoomButtons statusBtn="1" onClick={() => {setBalance(balance - 10)}}/>
                        <Text style={{color: balance < 0 ? "#D35858" : "#58D3A5"}}>{balance}</Text>
                    <ZoomButtons statusBtn="2" onClick={() => {setBalance(balance + 10)}} />
                </Space>
                </div>
            </Col>
            <Col span={3} align='center'>
                <Text>Депозит</Text>
                <div>
                <Space>
                    <ZoomButtons statusBtn="1" onClick={() => {setDeposit(deposit - 10)}}/>
                        <Text style={{color: balance < 0 ? "#D35858" : "#58D3A5"}}>{deposit}</Text>
                    <ZoomButtons statusBtn="2" onClick={() => {setDeposit(deposit + 10)}} />
                </Space>
                </div>
            </Col>
            <Col span={3} align='center'>
                <Text>Свободный балланс</Text>
                <div>
                <Space>
                    <ZoomButtons statusBtn="1" onClick={() => {setFreeBalance(freeBalance - 10)}}/>
                        <Text style={{color: balance < 0 ? "#D35858" : "#58D3A5"}}>{freeBalance}</Text>
                    <ZoomButtons statusBtn="2" onClick={() => {setFreeBalance(freeBalance + 10)}} />
                </Space>
                </div>
            </Col>
        </Row>
      </>
    );
}
export default PersonData;
