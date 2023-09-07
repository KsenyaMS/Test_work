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
        title: 'Пользователь',
        align: "center",
        width: 200,
        dataIndex: 'user',
        sorter: (a, b) => {
          return a.user.localeCompare(b.user);
        },
      },
      {
        title: 'Сообщение',
        align: "center",
        dataIndex: 'message',
      },
      {
        title: "",
        align: "center",
        fixed: "right",
        width: 30,
      },
  ];
   
    return (
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
    );
}
export default Journal;
