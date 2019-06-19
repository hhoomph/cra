import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from './../../logo.svg';
export default () => (
  <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to={"/"}>
        <Logo style={{width:"3rem"}} />
      </Navbar.Brand>
      <Nav className="mr-auto">
        {/* <Nav.Link as={Link} to={{ pathname: '/#home' }}>#Home</Nav.Link> */}
        {/* <Nav.Link href="/param/123">Parameter</Nav.Link>
        <Nav.Link href="/counter-cart">Counter Cart</Nav.Link>
        <Nav.Link href="/todo">Todos</Nav.Link> */}
        <NavLink className="nav-link" exact to={{ pathname: '/#home' }}>#Home</NavLink>
        <NavLink className="nav-link" exact to={"/param/123"}>Parameter</NavLink>
        <NavLink className="nav-link" exact to={"/counter-cart"}>Counter Cart</NavLink>
        <NavLink className="nav-link" exact to={"/todo"}>Todos</NavLink>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  </>
);