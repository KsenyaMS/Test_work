import 'antd/dist/antd.css';
import { Table } from 'antd';

const StatementOfFines = ({data}) => {
    const columns = [
        {
          title: 'Дата',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Сумма',
          dataIndex: 'age',
          key: 'age',
          sorter: (a, b) => a.age - b.age,
        },
        {
          title: 'Описание',
          dataIndex: 'address',
          key: 'address',
        },
    ];

    return (
        <Table style={{  width: 1500, marginTop: 30, align: 'center' }} columns={columns} />
    );
}
export default StatementOfFines;
