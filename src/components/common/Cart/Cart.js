import React, { forwardRef } from 'react';
import MenuItem from '../Menu/MenuItem/index';
import { useSelector } from 'react-redux';
import './Cart.css';

const Cart = forwardRef(({ list }, ref) =>{
  const {cartItems} = useSelector(state=>state.cart)
  return(
    <main ref={ref}>
      {cartItems?.map((item,index) => (      
        <MenuItem item={item} key={index} index={index+1} />
      ))}
    </main>
  );
  
})
export default Cart;