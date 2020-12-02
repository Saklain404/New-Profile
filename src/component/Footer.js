import React from 'react';
import '../Css/Footer.css';
import { Ionicons } from 'react-web-vector-icons';
import NavBar from './NavBar';
import { selectScreen } from '../helpers/screenHelpers';
import { Row, Col } from 'antd';


function Footer() {
    return (
        <div className='footer'>
            <div className='icons'>
                <a href="https://www.linkedin.com/in/saklain-8295b2195/">
                <Ionicons
                    name='logo-twitter'
                    color='black'
                    size={30}
                    style={{ margin: ["10px , 10px , 0px, 10px"] }}
                    />
                </a>

                <a href="https://www.instagram.com/mr.khalid_aziz/">
                    <Ionicons
                        name='logo-instagram'
                        color='black'
                        size={30}
                        style={{ margin: '10px', }}
                    />
                </a>
                <a href="https://www.linkedin.com/in/saklain-8295b2195/" >
                    <Ionicons
                        name='logo-linkedin'
                        color='black'
                        size={30}
                        style={{ margin: '10px', }}
                    />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100009059254949">
                <Ionicons
                    name='logo-facebook'
                    color='black'
                    size={30}
                    style={{ margin: '10px' }}
                    />
                </a>
            </div>
            <div className='footer_link' style={{ display: selectScreen('none', 'none', 'none', 'flex', 'flex', 'flex') }}>
                <NavBar />
            </div>

        </div>
    )
}

export default Footer;
