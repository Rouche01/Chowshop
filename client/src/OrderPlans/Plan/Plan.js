import React from 'react';
import styles from './Plan.module.css';
// import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ReactGA from 'react-ga';


const Plan = (props) => {

    const cardImage = {
        backgroundImage: 'url(' + props.backgroundUrl + ')'
    }

    const cardOverlay = {
        backgroundColor: props.overlayColor
    };

    const reportClickEvent = () => {
        ReactGA.event({
            category: 'Initiate Shopping from Whatsapp Plan',
            action: 'Click to start shopping via whatsapp chat'
        })
    }

    return (
        <div className={['mb-3', styles.Plan].join(' ')} style={cardImage}>
            <div className={[styles.PlanOverlay]} style={cardOverlay}>
                <div className={styles.InnerContent}>
                    <h4>{props.title}</h4>
                    <p>{props.children}</p>
                    {props.button ? <Button className={styles.Button} href="https://wa.me/2349017656561?text=Hello%2C%20I'm%20interested%20in%20shopping%20with%20you" onClick={reportClickEvent}>{props.action}</Button> : null}
                </div>
            </div>
        </div>
    );
}

export default Plan;