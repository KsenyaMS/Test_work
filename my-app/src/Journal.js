import { Table, Col, Button } from 'antd';

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
          title: 'Дата',
          dataIndex: 'date',
          key: 'date',
          sorter: (a, b) => a.date - b.date,
          background: "#3F3D56"
        },
        {
          title: 'Пользователь',
          dataIndex: 'user',
          key: 'user',
        },
        {
          title:'Сообщение',
          dataIndex: 'message',
          key: 'message',
        },
    ];
   
    return (
      <>
        <Table style={{ width: 1500, marginTop: 30 }} columns={columns} dataSource={data} />
        <Col span={3} offset={21}>
          <Button size = "large" style={{ background: "white", borderColor: "#DBDBDB", color: "#3F3D56", marginTop: 30 }}>Отмена</Button>
          <Button size = "large" style={{ background: "#58D3A5", borderColor: "#58D3A5", color: "#FFFFFF", marginTop: 30 }}>Ок</Button>
        </Col>
    </>
    );
}
export default Journal;
