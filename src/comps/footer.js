import React from 'react';
import styled from 'styled-components';
import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';
import twitter from '../images/twitter.svg';

const Wrap = styled.footer`
background-color: #1F0A2F;
color: #DDDADE;
margin: 0px;
padding: 20px 0px;
position: relative;
display: flex;
justify-content: space-evenly;
font-family: 'Abel', sans-serif;

@media (max-width: 547px){
    flex-direction: column;
}
`;

const Col = styled.div`
padding: 20px;
margin: 0px;
position: relative;
display: flex;
width: 28%;
flex-direction: column;

@media (max-width: 547px){
    width: 100%;
}
`;

const Title = styled.p`
padding: 20px 0px;
margin: 0px;
font-size: 1.6em;
`;

const Anchor = styled.a`
text-decoration: none;
padding: 20px 0px;
color: #DDDADE;

&:hover{
    text-decoration: none;
    color: #cc0;
}
`;

const ListBox = styled.ul`
margin: 0px;
padding: 0px;
`;

const ListItem = styled.li`
margin: 0px;
padding: 0px;
list-style: none;
`;

const SocialIcon = styled.div`
display: flex;
flex-wrap: wrap;
`;

const Icon = styled.div`
background-color: #DDDADE;
width: 45px;
height: 45px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1em;
border-radius: 50%;
color: red;
margin: 10px;
`;

const IcLogo = styled.img`
margin: 0px;
width: ${props => props.dim || "30px"};
height: ${props => props.dim || "30px"};
`;

function Footer(props) {
    const schoolsList = [
        {id: "01", school: "Nursery", link: "/"},
        {id: "02", school: "Primary", link: "/"},
        {id: "03", school: "Secondary", link: "/"},
    ];

    const clubsList = [
        {id: "01", club: "Taekwondo", link: "/"},
        {id: "02", club: "Football", link: "/"},
        {id: "03", club: "Literary", link: "/"},
        {id: "04", club: "Young Coders", link: "/"},
        {id: "05", club: "Young Engineers", link: "/"},
    ];

    return(
        <Wrap>
            <Col>
                <Title>SCHOOLS</Title>
                <ListBox>
                {schoolsList.map(item => <ListItem key={item.id}><Anchor href={item.link}>{item.school}</Anchor></ListItem>)}
                </ListBox>
            </Col>
            <Col>
                <Title>CLUBS</Title>
                <ListBox>
                    {clubsList.map(item => <ListItem key={item.id}><Anchor href={item.link}>{item.club}</Anchor></ListItem>)}
                </ListBox>
            </Col>
            <Col>
                <Title>CONNECT WITH US</Title>
                <SocialIcon>
                    <Icon><a href="/"><IcLogo src={facebook} alt="facebook" dim="25px" /></a></Icon>
                    <Icon><a href="/"><IcLogo src={twitter} alt="twitter" /></a></Icon>
                    <Icon><a href="/"><IcLogo src={instagram} alt="instagram" /></a></Icon>
                </SocialIcon>
            </Col>
        </Wrap>
    );
}

export default Footer;