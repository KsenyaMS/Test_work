import 'antd/dist/antd.css';
import { Table, Col, Button } from 'antd';

const StatementOfFines = () => {
    const columns = [
        {
          title: 'Дата',
          dataIndex: 'date',
          key: 'date',
          sorter: (a, b) => a.date - b.date,
          background: "#3F3D56"
        },
        {
          title: 'Сумма',
          dataIndex: 'amount',
          key: 'amount',
        },
        {
          title: 'Описание',
          dataIndex: 'description',
          key: 'description',
        },
    ];

    return (
      <>
        <Table style={{ width: 1500, marginTop: 30 }} columns={columns} />
        <Col span={3} offset={21}>
          <Button size = "large" style={{ background: "white", borderColor: "#DBDBDB", color: "#3F3D56", marginTop: 30 }} shape="round">Отмена</Button>
          <Button size = "large" style={{ background: "#58D3A5", borderColor: "#58D3A5", color: "#FFFFFF", marginTop: 30 }} shape="round">Ок</Button>
        </Col>
      </>
    );
}
export default StatementOfFines;
