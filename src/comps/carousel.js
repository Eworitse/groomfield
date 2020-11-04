import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
import classroom from '../images/classroom.jpg';
import exterior from '../images/exterior.jpg';
import theatre from '../images/theatre.jpg';
import lib from '../images/lib.jpg';

const CarouselWrap = styled.div`
position: relative;
width: 100vw;
margin: 0px;
padding: 0px;
`;

const MessageBox = styled.div`
position: absolute;
width: 30%;
min-width: 250px;
top: 5%;
left: 5%;
background-color: rgba(75, 35, 95, 0.7);
color: white;
font-size: 1.1em;
padding: 10px;
z-index: 2;
text-align: justify;
font-family: 'Roboto', sans-serif;
font-weight: 300;

@media (max-width: 547px){
    font-size: 0.9em;
}
`;

const ContactButton = styled.div`
margin: 5px;
padding: 0px;
font-weight: 500;
`;

const ContactLink = styled.a`
color: white;
vertical-align: middle;
padding: 10px;
background-color: rgb(222, 4, 114);
padding: 10px;
font-family: 'Roboto Slab', serif;

&:hover{
    text-decoration: none;
    background-color: rgb(246, 28, 140);
    color: white;
    cursor: pointer;
}
`;

const Image = styled.img`
width: 100vw;
`;

function AppCarousel(params) {
    return(
        <CarouselWrap>
            <Carousel>
                <Carousel.Item>
                    <Image src={classroom} alt="one of our conducive classrooms" />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={lib} alt="The right environment breeds the right mind" />  
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={exterior} alt="One of our buildings" />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={theatre} alt="Preparing for all walks of life" />
                </Carousel.Item>
            </Carousel>
            <MessageBox>
                <p>Groomfield is just the right place to groom your child for the future they desire.</p>
                <ContactButton>
                    <ContactLink>Contact Us</ContactLink>
                </ContactButton>
            </MessageBox>
        </CarouselWrap>
    );
}

export default AppCarousel;