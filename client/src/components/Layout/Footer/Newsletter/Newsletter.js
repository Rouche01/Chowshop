import React from 'react';
import styles from './Newsletter.module.css';
import { Container, Row } from 'react-bootstrap';

const Newsletter = (props) => (
    <div className={styles.Newsletter}>
        <Container>
            <h5>Don't miss out on our great offers & latest deals. Join our mailing list. No spam, no ads.
            </h5>
            <div id="mc_embed_signup">
                <form action="https://ideanotions.us15.list-manage.com/subscribe/post?u=3be27dfff3aec7f30f54c5c32&amp;id=3c94ab2088" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                    <div id="mc_embed_signup_scroll">
                        <Row>
                            <div class="col-md-5 ml-auto mb-2">
                                <input type="email" value="" name="EMAIL" className={['email', 'form-control', styles.EmailInput].join(' ')} id="mce-EMAIL" placeholder="Your email" required />
                                <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_3be27dfff3aec7f30f54c5c32_3c94ab2088" tabindex="-1" value="" /></div>
                            </div>
                            <div class="col-md-2 mr-auto">
                                <div className="clear">
                                    <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className={['font-weight-bold', 'button', 'btn', 'btn-block', styles.Button].join(' ')} />
                                </div>
                            </div>
                        </Row>
                    </div>
                </form>
            </div>
        </Container>
    </div>
);

export default Newsletter;