import React from 'react';
import styles from './Faqs.module.css';
import { Container } from 'react-bootstrap';
import CustomAccordion from './CustomAccordion/CustomAccordion';

const Faqs = (props) => {
    const questionsAndAnswers = [
        {question: 'How do I make payment?', answer: 'Every payment is made on delivery and can be made through bank transfers, your debit cards, ussd and other channels that our shoppers will make available to you on delivery.'},
        {question: 'How do I shop for groceries', answer: 'At the moment every order can be made via clicking the start shopping button to start a chat with us via whatsapp on the lists of your orders.'},
        {question: 'What is the delivery charge?', answer: 'The delivery charge is not fixed but varies based on location and weight of items purchased. But the delivery charge is included in the service charge.'},
        {question: 'What is the service charge?', answer: 'The service charge covers our operational cost of processing your order and the delivery fee.'}
    ]
    
    return (
        <div className={styles.Faqs}>
            <div className={styles.BackgroundImage}></div>
            <Container>
                <h2 className="font-weight-bold text-center">FAQs</h2>
                <p className="lead text-center">Let's answer your questions about us</p>
                <CustomAccordion questions={questionsAndAnswers}/>
            </Container>
        </div>
    );
}

export default Faqs;