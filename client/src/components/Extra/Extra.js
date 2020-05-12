import React, { Component } from 'react';
import styles from './Extra.module.css';
import Overlay from './Overlay/Overlay';


class Extra extends Component {

  afterSubmit = () => {
    this.props.closePop();
    document.querySelector('#mc-embedded-subscribe-form').submit()
  }
  
  render () {
    return (
      <div className={styles.Extra}>
        <Overlay>
          <div className={styles.Inner}>
            <h2>Get <strong>Free Delivery</strong> + <strong>Zero Service Charge</strong> Coupon</h2>
            <p>Sign up to get your Coupon & join our mailing list to recieve latest deals and offers from us</p>
            <div id="mc_embed_signup" className={styles.MailChimpForm}>
              <form action="https://chowshop.us8.list-manage.com/subscribe/post?u=882d748f331dde60f898a5d8a&amp;id=15ef0f071d" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                <div id="mc_embed_signup_scroll">
                  <div>
                    <input type="email" name="EMAIL" defaultValue="" className={styles.EmailInput} id="mce-EMAIL" placeholder="Your email" required />
                    <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_3be27dfff3aec7f30f54c5c32_3c94ab2088" tabIndex="-1" defaultValue="" /></div>
                  </div>
                  <div>
                    <div className="clear">
                      <input type="button" onClick={this.afterSubmit} value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className={styles.SubscribeBtn} />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <p onClick={this.props.closePop} className={styles.Exit}>No thanks, I don't like free gifts</p>
          </div>
        </Overlay>
      </div>
    );
  }
}

export default Extra;