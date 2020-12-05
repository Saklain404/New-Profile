
import React, { useState } from 'react';
import '../Css/Header.css';
import photo from '../Images/photo.jpeg';
import NavBar from './NavBar';
import { Divider, } from 'antd';
import { Row, Col, Drawer } from 'antd'
import { DownCircleOutlined  } from '@ant-design/icons'
import { selectScreen } from '../helpers/screenHelpers';

function Header() {
    const [visible, setVisible] = useState(false)
    return (
        <div>
            <Row className='header' justify={'space-between'} align={selectScreen('middle', 'middle', 'middle', 'top', 'top', 'top')} >
                <Col className='p-5' span={selectScreen(20, 20, 20, 4)}>
                  <a href="/"> <img className='logo' src={photo} /> </a>
                </Col>
                <Col className='NavBar' span={selectScreen(0, 0, 0, 8)}>
                    <NavBar />
                </Col>
                <Col className=' align-center' xs={4} sm={4} md={4} lg={0} xl={0}>
                    <DownCircleOutlined onClick={() => { setVisible(true) }} style={{ fontSize: 30, }} />
                </Col>
                <Drawer
                    title="Menu"
                    placement={'top'}
                    closable={true}
                    onClose={() => { setVisible(false) }}
                    visible={visible}

                    destroyOnClose={true}
                    
                    key={'ggg'}
                >
                    <NavBar />
                </Drawer>

            </Row>
            <Divider style={{ margin: 0, padding: 0 }} />
        </div>


    )
}

export default Header;
