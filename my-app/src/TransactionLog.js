import locale from 'antd/es/date-picker/locale/ru_RU';
import {Card, Select, DatePicker, Table, Space } from 'antd';
import { format } from 'date-fns';
import moment from "moment";

const { Option } = Select;
const { RangePicker } = DatePicker;

const TransactionLog = () => {
    const data = [
        {
          key: '1',
          date: '11.02.2020 12:43',
          amount: '5000',
          type: 'Штраф',
          category: 'Расходы',
        },
        {
          key: '2',
          date: '11.07.2020 12:45',
          amount: '2300',
          type: 'Оплата пошлины',
          category: 'Расходы',
        },
      ];
        const columns = [
            {
              title: "",
              align: "center",
              fixed: "left",
              width: 30,
            },
            {
              align: "center",
              title: 'Дата',
              width: 200,
              dataIndex: 'date',
              key: 'date',
              render: (text, record, index) => {
                const date = new Date(record.date);
                return  record.date ? format(date, "dd.MM.yyyy HH:mm") : "";
              },
              sorter: (a, b) => {
                return moment(a.date).valueOf() - moment(b.date).valueOf();
              },
            },
            {
              title: 'Баланс',
              align: "center",
              width: 200,
              dataIndex: 'amount',
              key: 'amount',
            },
            {
              title: 'Тип операции',
              align: "center",
              dataIndex: 'type',
              key: 'type',
            },
            {
              title: 'Категория операции',
              align: "center",
              dataIndex: 'category',
              key: 'category',
            },
            {
              title: "",
              align: "center",
              fixed: "right",
              width: 30,
            },
        ];
    return (
      <div style = {{width: 1500}}>
        <Card style = {{background: '#F4F4F9', paddingTop: '20px', margin: 30,  width: 1200}}>
            <Space direction={"horizontal"} wrap style={{marginBottom: 16}}>
                <Select
                    mode="multiple"
                    style={{width: "250px", textAlign: "left"}}
                    placeholder="Тип операции"
                    defaultValue={[]}
                    allowClear
                >
                    <Option value="Тип1"/>
                    <Option value="Тип2"/>
                </Select>
                <Select
                    mode="multiple"
                    style={{width: "250px", textAlign: "left"}}
                    placeholder="Категория"
                    defaultValue={[]}
                    allowClear
                >
                    <Option value="Тип1"/>
                    <Option value="Тип2"/>
                </Select>
                <Select
                    mode="multiple"
                    style={{width: "250px", textAlign: "left"}}
                    placeholder="Баланс"
                    defaultValue={[]}
                    allowClear
                >
                    <Option value="Тип1"/>
                    <Option value="Тип2"/>
                </Select>
                <RangePicker locale={locale} style={{width: "250px"}}/>
            </Space>
        </Card>
        <Table
          style={{ width: 1400, margin: 30 }}
          dataSource={data}
          columns={columns}
          pagination
        />
      </div>
    );
}
export default TransactionLog;