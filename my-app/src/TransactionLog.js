import locale from 'antd/es/date-picker/locale/ru_RU';
import {Col, Select, Form, DatePicker, Input } from 'antd';
const { Option } = Select;
const { RangePicker } = DatePicker;

const TransactionLog = () => {
    return (
      <>
        <div style = {{background: 'black', padding: '10px', margin: 30}}>
        <Form style={{ width: 1000 }} layout="inline">
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
        </div>
      </>
    );
}
export default TransactionLog;