import React from 'react';
import styles from './Header.module.css';
import Button from 'react-bootstrap/Button';
import logo from '../../../assets/Chowshop-logo.png';
import ReactGA from 'react-ga';

const Header = (props) => {
    const reportClickEvent = () => {
        ReactGA.event({
            category: 'Initiate Shopping from NavBar',
            action: 'Click to start shopping via whatsapp chat'
        })
    }

    return (
        <div className={styles.Header}>
            {/* <h4>freshchow</h4> */}
            <img className={styles.Logo} src={logo} alt="Chowshop logo" />
            <div>
                <Button className={styles.Button} href="https://wa.me/2349017656561?text=Hello%2C%20I'm%20interested%20in%20shopping%20with%20you" onClick={reportClickEvent} size="lg" variant="success">Start Shopping</Button>
            </div>
        </div>
    );
}

export default Header;