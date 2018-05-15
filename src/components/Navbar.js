import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import logo from '../assets/images/horizlogo.png'
import email from '../assets/images/email.svg'

export default class Navbarr extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="fixed-top" light  expand="md" style={{backgroundColor: '#714F91'}}>
          <NavbarBrand href="/"><img src={logo} height="50px" style={{paddingLeft: '7vw'}}/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
            <img src={email} height="50px" style={{marginTop:"5px"}}/>
              </NavItem>
              <NavItem>
              
                <NavLink style={{color: '#B76CA4', textAlign: 'left', fontWeight: '700', marginRight: '12vw'}} href="/components/">SIGN UP FOR <br /> EMAIL UPDATES</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}