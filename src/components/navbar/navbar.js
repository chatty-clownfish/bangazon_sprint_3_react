import React from "react"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"


export default class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

clearSessionStorage(){
    sessionStorage.clear()
}
render() {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light navbar">
    <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                <h2>Death Star 711 API</h2>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                 <Link className="nav-link" to="/departments"> Departments </Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                  <Link className="nav-link" to="/employees"> Employees </Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                  <Link className="nav-link" to="/producttypes"> Product Types </Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                  <Link className="nav-link" to="/paymenttypes"> Payment Types </Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                  <Link className="nav-link" to="/customers"> Customers </Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                  <Link className="nav-link" to="/products"> Products </Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                  <Link className="nav-link" to="/orders"> Orders </Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                  <Link className="nav-link" to="/trainings"> Training  </Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                  <Link className="nav-link" to="/computers"> Computer </Link>
                  </DropdownItem>
                  <DropdownItem divider />
                </DropdownMenu>
              </UncontrolledDropdown>
  {/* </div> */}
</nav>
    )}}