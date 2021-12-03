import React, { useState } from 'react';
import { useSelector,connect,useDispatch} from 'react-redux';

import { useHistory } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { TOKEN, USER_LOGOUT } from '../../../action/types';
import {CartActionTypes} from '../../../redux/cart/cart.actionTypes'
import { selectCartItemsCount } from '../../../redux/cart/cart.selector';
import './styles.css';

const ButtonCartCount = ({ cartCount }) => {
  const history = useHistory();
  const [ecffectMenu,setEffectMenu]=useState(false);
  const dispatch =useDispatch()
  const user = useSelector(state=> state.user);
  const onClick=(event)=>{
    event.preventDefault();
    if(user.isAuthentication)
    {
      localStorage.removeItem(TOKEN);
      dispatch({type:USER_LOGOUT})
      dispatch({type:CartActionTypes.CART_CLEAR_ALL_ITEM})
    }
    else{
      history.push('/Login')
    }
  }
  return (
    <div>
      <div className='btnCartMenu' onClick={() => setEffectMenu(!ecffectMenu)}>
        <ion-icon name="menu-outline" style={{fontSize:40}}></ion-icon>
      </div>
      <div className="box-menu" style={{display:ecffectMenu?'block':'none'}}>
          {(user?.user?.role==='ADMIN'&& user.isAuthentication)?(
            <div className="item">
              <a href="/Dashboard" >Dashboard</a>
            </div>
          ):null}
          <div className="item" onClick={() =>history.push('/cart')}>
            <a  >Cart</a>
            <div className='btnCartCount' >
              <div className='count'>{cartCount >= 100 ? '99+' : cartCount}</div>
              <ion-icon name="cart-outline" style={{fontSize:25,color:'black'}}></ion-icon>
            </div>
          </div>
          <div className="item" onClick={onClick}>
            {(user.isAuthentication)?(<a>Logout</a>):(<a>Login</a>)}
            <ion-icon name="log-in-outline" className="ion-icon" style={{fontSize:25,color:'black'}}></ion-icon>
          </div>
      </div>
    </div>
    
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(ButtonCartCount);
