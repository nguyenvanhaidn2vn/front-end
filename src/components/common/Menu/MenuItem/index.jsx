import React from 'react';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  cartAddItem,
  cartRemoveItem,
} from '../../../../redux/cart/cart.action';
import {
  selectCartItems,
  selectCartItemsCount,
} from '../../../../redux/cart/cart.selector';

import ButtonAddRemoveItem from '../../ButtonAddRemoveItem';
import './styles.css';

const MenuItem = ({
  item,
  cartCount,
  cartList,
  cartAddItem,
  cartRemoveItem,
  index
}) => {
  const { id, image, name, price, info } = item;
  const user = useSelector(state=>state.user)
  const handleQuantity = () => {
    let quantity = 0;
    if (cartCount !== 0) {
      const foundItemInCart = cartList.find((item) => item.id === index);
      if (foundItemInCart) {
        quantity = foundItemInCart.quantity;
      }
    }
    return quantity;
  };
  return (     
    
    <div className='item'>
      <img src={image} alt='food' />
      <div className='item-head_desc'>
        <p className='head_desc-name'>{name}</p>
        <p className='head_desc-info'>
          <small>{info}</small>
        </p>
      </div>
      <div className='item-foot_desc'>
        <span className='foot_desc-price'>{price} VNĐ</span>
        <ButtonAddRemoveItem
          quantity={item.quantity?item.quantity:handleQuantity()}
          handleRemoveItem={() => cartRemoveItem({...item,id:index})}
          handleAddItem={() => {
            if(user.isAuthentication)
              cartAddItem({...item,id:index})
            else
              alert('Bạn phải đăng nhập mới thêm giỏ hàng')
          }}
        />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  cartAddItem: (item) => dispatch(cartAddItem(item)),
  cartRemoveItem: (item) => dispatch(cartRemoveItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);
