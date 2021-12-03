import React, { forwardRef } from 'react';
import MenuItem from './MenuItem';
import { useSelector } from 'react-redux';
import './styles.css';

const Menu = forwardRef(({ list }, ref) =>{
  const {products} = useSelector(state=>state.products)
  return(
    <main ref={ref}>
      {products?.map((item,index) => (      
        <MenuItem item={item} key={index} index={index+1} />
      ))}
    </main>
  );
  
})
export default Menu;
