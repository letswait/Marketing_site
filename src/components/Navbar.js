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
      isOpen: false,
      isTop: true
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 50;
      if (isTop !== this.state.isTop) {
          console.log(isTop, window.scrollY )
          this.setState({ isTop })
      }
    });
  }
  
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const navstyle = this.state.isTop ? 'transparent': '#724d93'
    const logoSize = this.state.isTop ? "50px": "25px"
    return (
      <div>
        <Navbar className='fixed-top' expand="sm" style={{backgroundColor: navstyle}}>
          <NavbarBrand href="/"><img alt="hamburger icon" src={logo} className="App-logo" height={logoSize} style={{paddingLeft: '7vw'}}/></NavbarBrand>
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
