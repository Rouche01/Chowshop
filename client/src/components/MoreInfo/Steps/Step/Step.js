import React from 'react';
import styles from './Step.module.css';

const Step = (props) => (
    <div className={['mb-4', styles.Step].join(' ')}>
        <img src={props.source} alt="Step One" />
        <h4>{props.title}</h4>
        <p>{props.children}</p>
    </div>
);

export default Step;