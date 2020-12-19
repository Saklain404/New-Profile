import React, { useState } from 'react'
import { Link, Router } from 'react-router-dom';
import '../Css/NavBar.css';
import { Menu } from 'antd';
import { selectScreen } from '../helpers/screenHelpers';
const { Item } = Menu;
function NavBar() {
    const [visible, setVisible] = useState(false)
    return (
        <Menu onClick={ () => {setVisible(false)}}  mode={selectScreen('vertical', 'vertical', 'vertical', 'horizontal')} style={{ backgroundColor: "transparent", textDecoration: "none" }}>

            <Item><Link to={"/New-Profile"}>Home</Link> </Item>
            <Item><Link to={"/tutorials"} >Tutorials</Link> </Item>
            <Item><Link to={"/services/1"} exact >Services</Link> </Item>
            <Item><Link to={"/contact"} >Contact</Link> </Item>
            <Item><Link to={"/about"} >About</Link> </Item>
        
        </Menu>
    )
}

export default NavBar;
