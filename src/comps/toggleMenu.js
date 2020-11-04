import React, { useContext } from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import { NavContext } from './navbarContext';

const Wrapper = styled(Container)`
background-color: #4B345D;
position: relative;
display: none;

@media (max-width: 768px){
    display: ${props => !props.display ? "block" : "none"};
}
`;

const NavListWrap = styled.ul`
display: flex;
flex-direction: column;
align-items: flex-end;
`;

const NavItem = styled.li`
list-style: none;
padding: 5px;
border-top: solid 1px #9B769E;
width: 100%;
text-align: right;
position: relative;

&:hover{
    background-color: #6B669C;
}
`;

const NavAnchor = styled.a`
text-decoration: none;
color: #fff;
width: 100%;
display: block;

&:hover{
    text-decoration: none;
    color: #cc0;
}
`;

function ToggleMenu(props) {
    const {displayBurger} = useContext(NavContext);
    
    const navitems = [
        {id: "01", link: "/", name: "Home"},
        {id: "02", link: "/", name: "Schools"},
        {id: "03", link: "/", name: "Students At Work"},
        {id: "01", link: "/", name: "Admissions"}
    ];

    return(
        <Wrapper display={displayBurger}>
            <NavListWrap>
                {navitems.map(item => <NavItem key={item.id}><NavAnchor href={item.link}>{item.name}</NavAnchor></NavItem>)}
            </NavListWrap>
        </Wrapper>
    );
}

export default ToggleMenu;