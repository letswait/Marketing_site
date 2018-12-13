import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav
} from 'reactstrap';
import logo from '../assets/images/horizlogo.png'

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
        {/* '#714F91' */}
        <Navbar className="fixed-top" light  expand="sm" style={{backgroundColor: 'transparent'}}>
          <NavbarBrand href="/"><img alt="hamburger icon" src={logo} className="App-logo" height="50px" style={{paddingLeft: '7vw'}}/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}