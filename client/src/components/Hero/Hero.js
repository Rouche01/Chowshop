import React from 'react';
import styles from './Hero.module.css';
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Hero = (props) => (
    <div className={styles.Hero}>
        <div className={styles.BackgroundImage}></div>
        <Container>
            <h1>Stay safe and order all your groceries online.</h1>
            <p className="lead">We've got you covered for all things kitchen, we will buy and deliver fresh foodstuff from the market to your doorstep and we will keep your eggs safe too.</p>
            <a href="#next" className={styles.BounceIcon}><FontAwesomeIcon icon={faArrowDown} /></a>
        </Container>
    </div>
);

export default Hero;