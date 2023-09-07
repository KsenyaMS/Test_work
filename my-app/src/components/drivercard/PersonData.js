import 'antd/dist/antd.css';
import { Row, Col, Avatar, PageHeader, Button, Divider, Space } from 'antd';
import { UserOutlined  } from '@ant-design/icons';
import ZoomButtons from '../buttons/ZoomButtons';
import { Typography } from 'antd';
import { useState } from 'react';
import "./PersonData.css"
const { Text } = Typography;

const PersonData = () => {
    let [balance, setBalance] = useState(0);
    let [deposit, setDeposit] = useState(0);
    let [freeBalance, setFreeBalance] = useState(0);
    
    return (
      <>
        <div className='flexbox-container'>
            <div>
                <Avatar style={{  marginLeft: 15 }} size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                icon={<UserOutlined  />}
                />
            </div>
            <div>
                <Text><h4>Пашкин Сергей Николаевич</h4>  <h5>Ford Transit B722KM790</h5></Text>
            </div>
            <div className='buttons-content-div'>
                <div>
                    <Text><h5>Балланс</h5></Text>
                    <div>
                    <Space>
                        <ZoomButtons statusBtn="1" onClick={() => {setBalance(balance - 10)}}/>
                            <Text style={{color: balance < 0 ? "#D35858" : "#58D3A5"}}>{balance}</Text>
                        <ZoomButtons statusBtn="2" onClick={() => {setBalance(balance + 10)}} />
                    </Space>
                    </div>
                </div>
                <div>
                    <Text><h5>Депозит</h5></Text>
                    <div>
                    <Space>
                        <ZoomButtons statusBtn="1" onClick={() => {setDeposit(deposit - 10)}}/>
                            <Text style={{color: deposit < 0 ? "#D35858" : "#58D3A5"}}>{deposit}</Text>
                        <ZoomButtons statusBtn="2" onClick={() => {setDeposit(deposit + 10)}} />
                    </Space>
                    </div>
                </div>
                <div>
                    <Text style={{whiteSpace: "nowrap"}}><h5>Свободный балланс</h5></Text>
                    <div>
                    <Space>
                        <ZoomButtons statusBtn="1" onClick={() => {setFreeBalance(freeBalance - 10)}}/>
                            <Text style={{color: freeBalance < 0 ? "#D35858" : "#58D3A5"}}>{freeBalance}</Text>
                        <ZoomButtons statusBtn="2" onClick={() => {setFreeBalance(freeBalance + 10)}} />
                    </Space>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
}
export default PersonData;
