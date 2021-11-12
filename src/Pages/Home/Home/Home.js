import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import ContactUs from '../ContactUs/ContactUs';
import Offer from '../Offer/Offer';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Servicing from '../Servicing/Servicing';

const Home = () => {

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>


            </Helmet>
            <Header />
            <Banner></Banner>
            <Products></Products>
            <Offer></Offer>
            <Servicing />
            <Blogs></Blogs>
            <Reviews></Reviews>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;