import React from 'react';
import styles from './Faqs.module.css';
import { Container } from 'react-bootstrap';
import CustomAccordion from './CustomAccordion/CustomAccordion';

const Faqs = (props) => {
    const questionsAndAnswers = [
        {question: 'How do I make payment?', answer: 'Every payment is made on delivery and can be made through bank transfers, your debit cards, ussd and other channels that our shoppers will make available to you on delivery.'},
        {question: 'How do I shop for groceries', answer: 'Simply click on the "Start Shopping", the button will redirect you to a whatsapp chat with us where you can tell us your shopping list and we will respond to them instantly'},
        {question: 'What is the delivery charge?', answer: 'We currently operate with a flat delivery fee of N700 except we are dealing with very far locations which we will notify you of when dealing with your orders'},
        {question: 'What is the service charge?', answer: 'The service charge covers our operational cost of processing your orders, the service charge for orders below N10,000 are pegged at N1,000. For orders above N10,000, service charges will be charged at 10% of the value of the order'},
        {question: 'How long does it take you to deliver?', answer: 'Our uncompromising promise to our users is that all orders will be fulfilled in 6 hours or less of their request'},
        {question: 'What locations do you deliver to?', answer: 'At the moment we are delivering to major urban centres in Ibadan, Lagos Island (Lekki, Ajah, Victoria Island Environs) & Lagos Mainland (Surulere, Yaba)'}
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