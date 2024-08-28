import React from 'react'
import { Button, Card } from 'react-bootstrap'
import formatCurrency from "./FormatCurrency";
import { useShoppingCart } from '../context/ShoppingCartContext';


const StoreItem = ({id, price, name, imgUrl}) => {
  const {getItemsQuantity, increasecartQuantity, decreasecartQuantity, removeItemFromCart} = useShoppingCart();
  // set the quantity of the item dynamicly. 
  const quantity = getItemsQuantity(id);
  return(
    <Card className='h-100'>
        <Card.Img src={imgUrl} variant='top' style={{height: '200px', objectFit: 'cover'}}/>
        <Card.Body>
            <Card.Title className='d-flex justify-content-between align-items-baseline'>
              <span className='fs-2'>{name}</span>
              <span className='text-muted me-2'>{formatCurrency(price)}</span>
            </Card.Title>
            <div className='mt-auto'>
              {quantity === 0 ? <Button className='w-100' onClick={() => increasecartQuantity(id)}>Add to cart</Button> : 
              <div className='d-flex align-items-center justify-content-center flex-column' style={{gap: '0.5rem'}}>
                <div className='d-flex align-items-center justify-content-center' style={{gap: '0.5rem'}}>
                  <Button onClick={() => decreasecartQuantity(id)}>-</Button>
                  {/* dynamicly quantity here..  */}
                  <span className='fs-3'>  {quantity} in cart </span>
                  <Button onClick={() => increasecartQuantity(id)}>+</Button>
                </div>
                <Button variant='danger' size='sm' onClick={() => removeItemFromCart(id)}>Remove</Button>  
                </div>}
            </div>
        </Card.Body>
    </Card>
  )
}

export default StoreItem