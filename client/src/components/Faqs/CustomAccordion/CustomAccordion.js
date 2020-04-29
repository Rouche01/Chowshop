import React, { Component } from 'react';
import styles from './CustomAccordion.module.css';
import { Card, Accordion } from 'react-bootstrap';

class CustomAccordion extends Component {
    state = {
        accordionToggle: false,
    }

    key;

    onAccordionToggle = (eventKey) => {
        if ( eventKey.currentTarget === this.key || !this.key ) {
            eventKey.currentTarget.classList.toggle(styles.ToggleClass);
            this.key = eventKey.currentTarget;
        } else {
            this.key.classList.remove(styles.ToggleClass)
            eventKey.currentTarget.classList.toggle(styles.ToggleClass);
            this.key = eventKey.currentTarget;
        }
    }

    render () {
        const accordionList = this.props.questions.map((accordion, idx) => {
            return <Card className={styles.Card} key={idx}>
                <Accordion.Toggle onClick={this.onAccordionToggle} className={styles.Question} as={Card.Header}
                eventKey = {idx}>
                    {accordion.question}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey = {idx}>
                    <Card.Body>{accordion.answer}</Card.Body>
                </Accordion.Collapse>
            </Card>
        })

        return (
            <Accordion className={styles.Accordion}>
                {accordionList}
            </Accordion>
        );
    }
} 

export default CustomAccordion;