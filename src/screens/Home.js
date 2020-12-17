import React from 'react'
import { ServicesCard } from '../component/ServicesCard';
import { Row, Col } from 'antd';
import '../App.css';
import '../Css/Home.css';

function Home() {
    const cardDetails = [

        {
            title: 'Services',
            details: "Our approach to website design is to create a website that strengthens your company’s brand while ensuring ease of use and simplicity for your audience",
            path: '/services/1'
        },
        {
            title: 'Services',
            details: "Wordpress CMS is a user-friendly administrative area allowing you to easily edit your website's content.",
            path: '/services/2'
        },

        {
            title: 'Services',
            details: "We offer customised WordPress training to ensure you are confident in updating and maintaining your WordPress website.",
            path: '/contact/3'
        },]

    return (
        <div className='card-container'>
            
            <Row>
                {cardDetails.map((item, index) => (
                    <Col {...{ lg: 8, }} style={{ backgroudColor: '#000' }}>
                        <ServicesCard  {...item} key={index.toString()} />
                    </Col>))
                }
            </Row>
        </div>
    )
}

export default Home;
