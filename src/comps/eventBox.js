import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
width: 350px;
display: flex;
flex-direction: column;
background-color: white;
margin: 10px;
box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.25);

@media (max-width: 990px){
    width: 300px;
}

@media (max-width: 765px){
    width: 240px;
}

@media (max-width: 547px){
    width: 350px;
}
`;

const Image = styled.img`
width: 350px;
height: 230px;

@media (max-width: 990px){
    width: 300px;
    height: 197px;
}

@media (max-width: 765px){
    width: 240px;
    height: 158px;
}

@media (max-width: 547px){
    width: 350px;
    height: 230px;
}
`;

const Title = styled.div`
display: flex;
`;

const TitleText = styled.p`
margin: 10px 20px;
color: #999;
font-family: 'Abel', sans-serif;
font-size: 0.9em;
font-weight: 600;
`;

const DarkSpan = styled.span`
color: black;
`;

const DescriptionBox = styled.div`
width: 100%;
height: 125px;
position: relative;
display: flex;
flex-direction: column;
margin: 0px;
padding: 0px;

@media (max-width: 765px){
    height: 160px;
}
`;

const DescriptionTitle = styled.div`
font-family: 'Roboto Slab', serif;
font-size: 1em;
color: #DE0472;
border-bottom: solid 2px #999;
max-width: 150px;
margin-left: 20px;
margin-bottom: 10px;
padding: 0px;
`;

const DescTitleText = styled.p`
padding: 0px;
margin: 0px;
`;

const DescriptionText = styled.p`
text-align: justify;
font-size: 0.9em;
padding-left: 20px;
padding-right: 20px;
font-family: 'Roboto Slab', serif;
`;

function EventBox(props){
    return(
        <Wrap>
            <Image src={props.image} alt={props.altText} />
            <Title>
                <TitleText>{props.imgTitle1}
                    <DarkSpan>{props.imgTitle2}</DarkSpan>
                </TitleText>
            </Title>
            <DescriptionBox>
                <DescriptionTitle><DescTitleText>{props.dTitle}</DescTitleText></DescriptionTitle>
                <DescriptionText>{props.dText}</DescriptionText>
            </DescriptionBox>
        </Wrap>
    );
}

export default EventBox;