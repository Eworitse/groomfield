import React from 'react';
import styled from 'styled-components';
import logo from '../images/groomfield.svg';

const Wrap = styled.div`
display: flex;
position: relative;
`;

const LogoWrap = styled.div`
width: 70px;
height: 70px;
`;

const Logo = styled.img`
width: 70px;
height: 70px;
`;

const BrandName = styled.div`
margin-left: 10px;
padding-left: 10px;
border-left: solid 1px #EEEDE9;
display: flex;
flex-direction: column;
align-items: flex-start;

&:hover{
    color: #cc0;
}
`;

const TextWrap = styled.span`
font-size: 1em;
font-weight: ${props => props.weight};
font-style: ${props => props.italicise ? "italic" : "normal"};
font-family: 'Roboto', sans-serif;
color: #EEEDE9;
display: block;
`;

const BrandAnchor = styled.a`
text-decoration: none;
display: flex;
align-items: center;
justify-content: flex-start;

&:hover{
    text-decoration: none;
}
`;

function Brand(props) {
    return(
        <Wrap>
            <BrandAnchor href="/">
                <LogoWrap>
                    <Logo src={logo} />
                </LogoWrap>
                
                    <BrandName>
                        <TextWrap weight="500">GROOMFIELD SCHOOLS</TextWrap>
                        <TextWrap weight="300" italicise="true">The excellent generation</TextWrap>
                    </BrandName>
            </BrandAnchor>
        </Wrap>
    );
}

export default Brand;