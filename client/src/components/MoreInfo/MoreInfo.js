import React from 'react';
import styles from './MoreInfo.module.css';
import { Container } from 'react-bootstrap';
import Steps from './Steps/Steps';
import SubHero from '../SubHero/SubHero';


const MoreInfo = (props) => (
    <div id="next" className={styles.MoreInfo}>
        <SubHero />
        <Container className="mt-5">
            <h2>Make your order in 3 quick and easy steps</h2>
            <Steps />
        </Container>
    </div>
)

export default MoreInfo;