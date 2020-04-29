import React from 'react';
import Wrapper from '../../hoc/Wrapper';
import Header from '../Layout/Header/Header';
import Footer from './Footer/Footer';

const Layout = (props) => (
    <Wrapper>
        <Header />
            <main>
                {props.children}
            </main>
        <Footer />
    </Wrapper>
);

export default Layout;