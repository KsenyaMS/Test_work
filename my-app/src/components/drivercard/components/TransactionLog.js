import locale from 'antd/es/date-picker/locale/ru_RU';
import {Card, Select, DatePicker, Table, Space } from 'antd';
import { format } from 'date-fns';
import moment from "moment";
import { useState } from 'react';

const { Option } = Select;
const { RangePicker } = DatePicker;

const initialData = [
  {
    key: '1',
    date: '11.02.2020 12:43',
    amount: '5000',
    type: 'fine',
    category: 'expenses',
  },
  {
    key: '2',
    date: '11.07.2023 12:45',
    amount: '2300',
    type: 'payment',
    category: 'expenses',
  },
];

const TransactionLog = () => {
  let [data, setData] = useState(initialData);
  let [period, setPeriod] = useState([]);

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
      defaultSortOrder: "descend",
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
    },
    {
      title: 'Тип операции',
      align: "center",
      dataIndex: 'type',
      render: (text, record, index) => {
        return record.type === 'fine' ? "Штраф" : "Оплата пошлины";
      },
      sorter: (a, b) => {
        return a.type.localeCompare(b.type);
      },
    },
    {
      title: 'Категория операции',
      align: "center",
      dataIndex: 'category',
      render: (text, record, index) => {
        return record.category === 'expenses' ? "Расходы" : "Прибыль";
      },
      sorter: (a, b) => {
        return a.category.localeCompare(b.category);
      },
    },
    {
      title: "",
      align: "center",
      fixed: "right",
      width: 30,
    },
  ];

  const handleOperationTypeChange = (value) => {
    if (value !== undefined && value.length !== 0) {
      let dataArray = initialData;
      let items = dataArray.filter((s) => s.type === value[0] || s.type === value[1]);
      setData(items);
    } else setData(initialData);
  };

  const handleOperationCategoryChange = (value) => {
    if (value !== undefined) {
      let dataArray = initialData;
      let items = dataArray.filter((s) => s.category === value);
      setData(items);
    } else setData(initialData);
  };

  const handlePeriodChange = (value) => {
    
    if (value !== null) {
      let dateFrom = new Date(value[0]);
      let dateTo = new Date(value[1]);
      let dataArray = initialData;
      let items = [];
      // let items = dataArray.filter((s) => s.date.getTime() > dateFrom.getTime() && s.date.getTime() < dateTo.getTime());
      for (let i = 0; i < dataArray.length; i++) {
        let element = new Date(dataArray[i].date);
        if (element.getTime() > dateFrom.getTime() && element.getTime() < dateTo.getTime()) {
          items = [...items, dataArray[i]];
        }
      }
      setData(items);
    } else setData(initialData);
  };
    
  return (
    <div>
      <div style = {{background: '#F4F4F9', padding: '20px', margin: 20, borderRadius: 35, width: "70vw"}}>
        <Space direction={"horizontal"} wrap>
          <Select
            mode="multiple"
            style={{width: "250px", textAlign: "left"}}
            placeholder="Тип операции"
            defaultValue={[]}
            allowClear
            onChange={handleOperationTypeChange}
          >
            <Option key="payment" value="payment">Оплата пошлины</Option>
            <Option key="fine" value="fine">Штраф</Option>
          </Select>
          <Select
            style={{width: "250px", textAlign: "left"}}
            placeholder="Категория"
            defaultValue={[]}
            allowClear
            onChange={handleOperationCategoryChange}
          >
            <Option key="expenses" value="expenses">Расходы</Option>
            <Option key="profit" value="profit">Прибыль</Option>
          </Select>
          <RangePicker
            locale={locale}
            style={{width: "300px"}}
            onChange={handlePeriodChange}
          />
        </Space>
      </div>
      <div style={{margin: 20}}>
        <Table
          rowKey="id"
          sticky
          // rowSelection={{selectedDtp, onChange: onSelectChange}}
          size='small'
          dataSource={data}
          columns={columns}
          pagination={{position: 'topRight', defaultPageSize: 50, pageSizeOptions: [50, 100, 200]}}
        />
      </div>
    </div>
  );
}
export default TransactionLog;