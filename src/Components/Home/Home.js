import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HeaderMain from '../HeaderMain/HeaderMain';
import MiddleContent from '../MiddleContent/MiddleContent';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HeaderMain></HeaderMain>
            <MiddleContent></MiddleContent>
            <Footer></Footer>
        </div>
    );
};

export default Home;