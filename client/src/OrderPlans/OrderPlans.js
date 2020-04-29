import React from 'react';
import styles from './OrderPlans.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import Plan from './Plan/Plan';
import marketBg from '../assets/market-bg.jpg';
import foodstuff from '../assets/foodstuff.jpg';

const OrderPlans = (props) => (
    <div className={styles.OrderPlans}>
        <Container>
            <Row>
                <Col>
                    <Plan title="Order via Chat" backgroundUrl={marketBg} action="Start Shopping" button="true"
                    overlayColor="rgba(0, 0, 0, 0.8)">
                        Send us your order via whatsapp chat and let’s help you shop fresh foodstuffs/groceries from the market or at your favorite supermarket
                    </Plan>
                </Col>
                <Col>
                    <Plan title="In-App Purchase" backgroundUrl={foodstuff} overlayColor="rgba(94, 160, 0, 0.9)">
                        We are working on bringing a better shopping experience for our customers that will enable them to shop for products within the app easily and quickly.
                    </Plan>
                </Col>
            </Row>
        </Container>
    </div>
);

export default OrderPlans;