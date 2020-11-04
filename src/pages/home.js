import React from 'react';
import styled from 'styled-components';
import Navbar from '../comps/navigation';
import AppCarousel from '../comps/carousel';
import Testimonial from '../comps/testimonyCarousel';
import Reasons from '../comps/reasons';
import Events from '../comps/events';
import Footer from '../comps/footer';

const MainWrap = styled.div`
position: relative;
margin: 0px;
padding: 0px;
font-family: 'Didact Gothic', sans-serif;
`;

function Home(props){
    return(
        <MainWrap>
            <Navbar />
            <AppCarousel />
            <Testimonial />
            <Reasons />
            <Events />
            <Footer />
        </MainWrap>
    );
}

export default Home;