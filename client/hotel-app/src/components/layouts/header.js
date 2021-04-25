import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
  } from 'reactstrap';

import SignedInLinks from './signedInLinks';
import SignedOutLinks from './signedOutLinks';
 
class header extends Component {

    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
        isOpen: !this.state.isOpen
    });
    }

    render(){
    return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">Hotel Sandaliyan</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/gallery">Gallery</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/facilities">Facilities</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/about">About Us</NavLink>
                                    </NavItem>
                                    <SignedInLinks />
                                    <SignedOutLinks />   
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>                 
            </div>
    )}
}

export default header;