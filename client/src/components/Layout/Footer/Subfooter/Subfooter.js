import React from 'react';
import styles from './Subfooter.module.css';
import Container from 'react-bootstrap/Container';

const Subfooter = (props) => (
    <div className={styles.Subfooter}>
        <Container>
            <div className={styles.Inner}>
                <div>
                    <small>Made with 🤍 at chowshop. Copyright &copy; 2020</small>
                </div>
                <div>
                    <small><a href="https://freshchow.com/terms">Terms & Conditions</a></small>
                    <small><a href="https://freshchow.com/terms">Delivery Policy</a></small>
                    <small>Problems? Idea? <a href="https://freshchow.com/terms">hello@chowshop.ng</a></small>
                </div>
            </div>
        </Container>
    </div>
);

export default Subfooter;