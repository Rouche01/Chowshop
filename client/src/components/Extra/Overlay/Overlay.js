import React from 'react';
import styles from './Overlay.module.css';


const Overlay = (props) => (
    <div className={styles.Overlay}>
        <div className={styles.BgOverlay}>
            {props.children}
        </div>
    </div>
);

export default Overlay;