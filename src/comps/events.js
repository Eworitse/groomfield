import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import EventBox from './eventBox';
import orientation from '../images/orientation.jpg';
import resumption from '../images/resumption.jpg';
import trip from '../images/trip.jpg';
import graduation from '../images/graduation.jpg';

const Wrap = styled.div`
background-color: #F8E5BC;
padding: 0px;
position: relative;
`;

const EventsContainer = styled(Container)`
display: flex;
padding: 40px 0px;
justify-content: center;
flex-direction: column;
position: relative;
`;

const BoxesWrap = styled.div`
position: relative;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
`;

const Title = styled.h1`
font-size: 2em;
color: rgb(222, 4, 114);;
font-family: 'Roboto Slab', serif;
text-align: center;
`;

function Events(props){
    const eventBoxProps = [
        {id: "01", imgSource: resumption, imgTitle1: `RESUMPTION | `, imgTitle2: `5th October, 2020`, alt: "resumption",
            dTitle: "Welcome Back", dText: "It's awesome to be back again after the long break. Right?"},
        {id: "02", imgSource: orientation, imgTitle1: `ORIENTATION | `, imgTitle2: `9th October, 2020`, alt: "orientation",
            dTitle: "Our Ways", dText: "Get to know how, when and where things are done so you can maximise our resources and facilities."},
        {id: "03", imgSource: trip, imgTitle1: `FIELD TRIP | `, imgTitle2: `6th November, 2020`, alt: "field trip",
            dTitle: "Learning Is Fun", dText: "Let's hit the road for some time of fun while we learn."},
        {id: "04", imgSource: graduation, imgTitle1: `GRADUATION | `, imgTitle2: `19th December, 2020`, alt: "graduation",
            dTitle: "The Next Level", dText: "It's another time to celebrate success. Afterall, it does not come easy."}
        ]

    return(
        <Wrap>
            <EventsContainer>
                <Title>NEWS & EVENTS</Title>
                <BoxesWrap>
                    {eventBoxProps.map(item => <EventBox key={item.id} image={item.imgSource} altText={item.alt} imgTitle1={item.imgTitle1}
                    imgTitle2={item.imgTitle2} dTitle={item.dTitle} dText={item.dText}/>)}
                </BoxesWrap>
            </EventsContainer>
        </Wrap> 
    );
}

export default Events;