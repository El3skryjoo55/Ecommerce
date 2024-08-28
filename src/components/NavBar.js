import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'
const NavBar = () => {
    const {openCart, cartQuantity} = useShoppingCart();

  return (
    <Navbar sticky='top' className='bg-white shadow-sm mb-4'>
        <Container>
            <Nav className='me-auto'>
                <Nav.Link to={'/'} as = {NavLink}>Home</Nav.Link>
                <Nav.Link to={'/Store'} as = {NavLink}>Store</Nav.Link>
                <Nav.Link to={'/About'} as = {NavLink}>About</Nav.Link>
            </Nav>
            <Button variant='outline-primary' className='rounded-circle' style={{width: '3rem', height: '3rem', position: 'relative'}} onClick={() => openCart()}>
                
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none">
                    <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center' style={{position: 'absolute', width: '1.5rem', height: '1.5rem', color: 'white', bottom: 0, right: 0, transform: 'translate(25% , 25%)'}}>
                    {cartQuantity}
                </div>
            </Button>
        </Container>
    </Navbar>
  )
}

export default NavBar