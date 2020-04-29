import React from 'react';
import styles from './Steps.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import Step from './Step/Step';

import callIcon from '../../../assets/call-illustration.png';
import deliveryIcon from '../../../assets/delivery-Illustration.png';
import paymentIcon from '../../../assets/payment-illustration.png';

const Steps = (prop) => (
    <div className={styles.Steps}>
        <Container>
            <Row>
                <Col>
                    <Step title="Chat with us" source={callIcon}>
                    Click on the "Start Shopping" button to send us a list of your orders via whatsapp and we will send you a quote instantly.
                    </Step>
                </Col>
                <Col>
                    <Step title="We Shop & Deliver" source={deliveryIcon}>
                    An experienced shopper will do the shopping for perfect product picks and deliver it to you quickly and fresh.
                    </Step>
                </Col>
                <Col>
                    <Step title="You Make Payment" source={paymentIcon}>
                    On delivery you make your payment via transfer, your debit card or our other payment channels.
                    </Step>
                </Col>
            </Row>
        </Container>
    </div>
);

export default Steps;