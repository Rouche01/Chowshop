import React, { Component } from 'react';
import Wrapper from '../../hoc/Wrapper';
import Extra from '../../components/Extra/Extra';
import Layout from '../../components/Layout/Layout';
import Hero from '../../components/Hero/Hero';
import MoreInfo from '../../components/MoreInfo/MoreInfo';
import OrderPlans from '../../OrderPlans/OrderPlans';
import Faqs from '../../components/Faqs/Faqs';


class Manager extends Component {
  state = {
    popped: false
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({
        popped: true
      });
    }, 20000);
  }


  closePopUp = () => {
    this.setState({
      popped: false
    });
  }


  render () {
    return (
      <Wrapper>
        {this.state.popped ? <Extra closePop={this.closePopUp} /> : null}
        <Layout>
          <Hero />
          <MoreInfo />
          <OrderPlans />
          <Faqs />
        </Layout>
      </Wrapper>
    );
  }
}

export default Manager;