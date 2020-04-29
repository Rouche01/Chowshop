import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Layout from './components/Layout/Layout';
import Hero from './components/Hero/Hero';
import MoreInfo from './components/MoreInfo/MoreInfo';
import OrderPlans from './OrderPlans/OrderPlans';
import Faqs from './components/Faqs/Faqs';

library.add(fab);

function App() {
  return (
    <Layout>
        <Hero />
        <MoreInfo />
        <OrderPlans />
        <Faqs />
    </Layout>
  );
}

export default App;
