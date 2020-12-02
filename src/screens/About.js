import React from 'react'
<<<<<<< HEAD
import { Row, Col, Divider } from 'antd';


function About() {
    const style = { background: '#0092ff', padding: '8px 0' };
    return (
        <div>
            <Divider orientation="left">Responsive</Divider>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
            </Row>
=======

function About() {
    return (
        <div>
            <h1>This is About</h1>
>>>>>>> 2f2e6adceb13a9998452df8e5ff65400daace06e
        </div>
    )
}

export default About;
