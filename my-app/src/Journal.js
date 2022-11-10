import { Table, Col, Button } from 'antd';
import { format } from 'date-fns';
import moment from "moment";

const Journal = () => {
    const data = [
        {
          key: '1',
          date: '11.02.2020 12:43',
          user: 'user1',
          message: 'Назначены условия работы',
        },
        {
          key: '2',
          date: '11.02.2020 12:45',
          user: 'user1',
          message: 'Назначены условия работы',
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
        title: 'Пользователь',
        align: "center",
        width: 200,
        dataIndex: 'user',
        key: 'user',
      },
      {
        title: 'Сообщение',
        align: "center",
        dataIndex: 'message',
        key: 'message',
      },
      {
        title: "",
        align: "center",
        fixed: "right",
        width: 30,
      },
  ];
   
    return (
      <>
        <Table
          style={{ width: 1400, margin: 30 }}
          dataSource={data}
          columns={columns}
          pagination
        />
      </>
    );
}
export default Journal;
