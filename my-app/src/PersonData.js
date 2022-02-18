import 'antd/dist/antd.css';
import { Row, Col, Avatar, PageHeader } from 'antd';
import { Divider } from 'antd';
import { UserOutlined  } from '@ant-design/icons';
import ZoomButtons from './ZoomButtons';
import { Typography } from 'antd';
const { Text } = Typography;

const PersonData = () => {
    
    return (
      <>
        <PageHeader title="Карточка водителя">
        </PageHeader>
        <Divider />
        <Row >
            <Col span={2}>
                <Avatar style={{  marginLeft: 15 }} size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                icon={<UserOutlined  />}
                />
            </Col>
            <Col  span={5}>
                <Text><h4>Пашкин Сергей Николаевич</h4></Text>
            </Col>
            <Col  span={5}>
                <Text><h4>Ford Transit B722KM790</h4></Text>
            </Col>
            <Col span={3} align='center'>
                <Text>Балланс</Text>
                <ZoomButtons value={-70000}/>
            </Col>
            <Col span={3} align='center'>
                <Text>Депозит</Text>
                <ZoomButtons value={70000}  />
            </Col>
            <Col span={3} align='center'>
                <Text>Свободный балланс</Text>
                <ZoomButtons value={70000}/>
            </Col>
        </Row>
      </>
    );
}
export default PersonData;
