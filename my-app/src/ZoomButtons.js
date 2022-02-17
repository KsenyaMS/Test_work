import 'antd/dist/antd.css';
import { Button, Table } from 'antd';
import { Typography } from 'antd';
const { Text } = Typography;

const ZoomButtons = ({value, key}) => {
    let state = "#D35858";
        if (value > 0) state = "#58D3A5"
    return (
      <div key={key}>
        <Button style={{ margin: '8px', background: "#D35858", borderColor: "#D35858", color: "#FFFFFF" }} shape="circle" size="small" >
          -
        </Button>
        <Text style={{ color: state }}>{value}.00 руб.</Text>
        <Button style={{ margin: '8px', background: "#58D3A5", borderColor: "#58D3A5", color: "#FFFFFF" }} shape="circle" size="small">
          +
        </Button>
      </div>
    );
}
export default ZoomButtons;
