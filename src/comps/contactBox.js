import React from 'react';
import styled from 'styled-components';
import tel from '../images/tel.svg';

const ContactBox = styled.div`
margin: 0 auto;
position: relative;
display: flex;
width: 300px;
background-color: rgb(222, 4, 114);
justify-content: center;
`;

const TelImage = styled.img`
width: 20px;
height: 20px;
margin-top: 5px;
padding: 5px 0px 0px 0px;
background-color: rgb(222, 4, 114);
`;

const Link = styled.a`
padding: 5px 10px;
text-decoration: none;
font-size: 0.9em;
background-color: rgb(222, 4, 114);
color: white;
border-left-style: ${props => props.border==="true" ? "solid" : "none"};
border-left-color: ${props => props.border==="true" ? "#BBB" : "#DE0472"};
border-left-width: ${props => props.border==="true" ? "1px" : "0px"};
margin-top: 5px;

&:hover{
    text-decoration: none;
    background-color: rgb(246, 28, 140);
    color: white;
}
`;


function NavContactBox(props) {
    return(
        <ContactBox>
            <TelImage src={tel} alt="telephone icon" />
            <Link href="tel:07032486087">07032486087</Link>
            <Link href="mailto:info@groomfield.com" border="true">info@groomfield.com</Link>
        </ContactBox>
    );
}

export default NavContactBox;