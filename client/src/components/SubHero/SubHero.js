import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './SubHero.module.css';

const SubHero = (props) => (
    <div className={styles.SubHero}>
        <Container>
            <Row>
                <Col>
                    <p>We are taking great care and measures to ensure that you are safe and consistently nourished in this period of crisis without stress and risk of exposure. We make it our business to ease your stress by shopping your orders for you at the market and delivering it safely at your doorstep in less than 6 hours. Our personal shoppers are experienced to make the perfect pick of product for you and deliver them to you with safety in mind.</p>
                </Col>
            </Row>
        </Container>
    </div>
);

export default SubHero;