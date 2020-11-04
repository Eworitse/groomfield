import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NavContextProvider from './navbarContext';
import Brand from './navbarBrand';
import Nav from './nav';
import Hamburger from './hamburger';
import ToggleMenu from './toggleMenu';
import NavContactBox from './contactBox';

const NavbarWrap = styled.div`
position: relative;
background-color: #4B345D;
`;

const NavbarContainer = styled(Container)`
background-color: ${props => props.bg || "transparent"};
position: relative;
padding: 10px 0px;
display: flex;
justify-content: space-between;
align-items: center;
`;

function Navbar(props) {
    return(
        // Add a bg prop with a value of background color to the NavbarWrap
        // component. Otherwise, the Navbar will be transparent
        // <NavbarWrap bg="#ff0000">

        <NavContextProvider>
            <NavbarWrap>
                <NavContactBox />
                <NavbarContainer>
                    <Brand />
                    <Nav />
                    <Hamburger />
                </NavbarContainer>
                <ToggleMenu />
            </NavbarWrap>
        </NavContextProvider>
        
    );
}

export default Navbar;