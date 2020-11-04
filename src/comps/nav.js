import React from 'react';
import styled from 'styled-components';

const Navwrap = styled.div`
display: flex;

@media (max-width: 768px){
    display: none;
}
`;

const NavListWrap = styled.ul`
display: flex;
`;

const NavItem = styled.li`
list-style: none;
padding: 10px;
`;

const NavAnchor = styled.a`
text-decoration: none;
color: #fff;
font-family: 'Roboto', sans-serif;

&:hover{
    text-decoration: none;
    color: #cc0;
}
`;

function Nav(props) {
    const navitems = [
        {id: "01", link: "/", name: "Home"},
        {id: "02", link: "/", name: "Schools"},
        {id: "03", link: "/", name: "Students At Work"},
        {id: "01", link: "/", name: "Admissions"}
    ];

    return(
        <Navwrap>
            <NavListWrap>
                {navitems.map(item => <NavItem key={item.id}><NavAnchor href={item.link}>{item.name}</NavAnchor></NavItem>)}
            </NavListWrap>
        </Navwrap>
    );
}

export default Nav;