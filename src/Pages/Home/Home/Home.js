import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import ContactUs from '../ContactUs/ContactUs';
import Offer from '../Offer/Offer';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {

    return (
        <div>
            <Header />
            <Banner></Banner>
            <Products></Products>
            <Offer></Offer>
            <Blogs></Blogs>
            <Reviews></Reviews>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;