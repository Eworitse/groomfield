import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';

const CarouselWrap = styled(Container)`
padding: 0px;
position: relative;
margin-top: 60px;
display: flex;
justify-content: space-between;

@media (max-width: 547px){
    flex-direction: column;
}
`;

const CarouselItemBox = styled.div`
width: 60vw;

@media (max-width: 547px){
    width: 100vw;
}
`;

const Col1 = styled.div`
width: 34vw;
font-size: 1.7em;
font-family: Arial, Helvetica, sans-serif;
font-style: italic;
height: 100px;
color: #999;
margin: 0px;

@media (max-width: 765px){
height: 160px;
}

@media (max-width: 547px){
width: 100%;
height: 40px;
padding: 0px 10px;

}
`;

const Col1Text = styled.span`
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
font-weight: bold;
font-style: normal;
vertical-align: bottom;
`;

const Col2 = styled.div`
height: 100px;

@media (max-width: 765px){
height: 160px;
}

@media (max-width: 547px){
height: 160px;
width: 100%;
padding: 10px;
}
`;

const Col2Text = styled.span`
text-align: justify;
font-size: 1.1em;
font-family: 'Roboto', sans-serif;
`;

function CarouselItem(props) {
    return(
            <Col2>
                <Col2Text>{props.detail}</Col2Text>
            </Col2>
    )
}
export default function Testimonial(props){
    const testimonies = ["Our son is excited every morning about going to school. He’s becoming more social and smarter each day.",
        "The atmosphere and learning environment is optimal for all young children. All of the students receive individual attention. The children’s needs are addressed and the staff take special interest in Michael and the other students.",
        "This school is perfect for my son. He has improved dramatically not only in his studies, but also in his overall health. He is more outgoing, likes to do his classwork, and is more motivated to do his classwork."];
    
        return(
            <CarouselWrap>
                <Col1>
                    <Col1Text>From</Col1Text>{` our `}<Col1Text>parents</Col1Text>
                </Col1>
                <CarouselItemBox>
                    <Carousel>
                        {testimonies.map((item, id) => <Carousel.Item key={id}><CarouselItem detail={item} /></Carousel.Item>)}
                    </Carousel>
                </CarouselItemBox>
            </CarouselWrap>
    );
}