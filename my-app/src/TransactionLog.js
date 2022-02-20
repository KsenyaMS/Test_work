import locale from 'antd/es/date-picker/locale/ru_RU';
import {Card, Select, Form, DatePicker, Col, Button } from 'antd';
import CanselButton from './CancelButton';
import ConsentButton from './ConsentButton';
const { Option } = Select;
const { RangePicker } = DatePicker;

const TransactionLog = () => {
    return (
      <div style = {{width: 1500}}>
        <Card style = {{background: '#F4F4F9', padding: '10px', marginLeft: 10, marginTop: 30,  width: 1000}}>
            <Form layout="inline">
                <Form.Item>
                    <Select className='select' size='large' placeholder="Тип операции">
                        <Option value="Тип1"/>
                        <Option value="Тип2"/>
                    </Select>
                </Form.Item>    
                <Form.Item>
                    <Select size='large' placeholder="Категория">
                        <Option value="Тип1"/>
                        <Option value="Тип2"/>
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Select size='large' placeholder="Баланс">
                        <Option value="Тип1"/>
                        <Option value="Тип2"/>
                    </Select>
                </Form.Item>
                <RangePicker locale={locale} />
            </Form>
        </Card>
        <Col span={3} offset={21}>
          <CanselButton/>
          <ConsentButton/>
        </Col>
      </div>
    );
}
export default TransactionLog;