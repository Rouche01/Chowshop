import React from 'react';
import styles from './Footer.module.css';
import Newsletter from './Newsletter/Newsletter';
import SocialIcons from './SocialIcons/SocialIcons';
import Subfooter from './Subfooter/Subfooter';

const Footer = (props) => (
        <div className={styles.Footer}>
            <Newsletter />
            <SocialIcons />
            <Subfooter />
        </div>
);

export default Footer;