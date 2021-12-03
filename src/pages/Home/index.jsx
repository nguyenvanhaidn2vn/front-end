import React, { useRef,useEffect } from 'react';
import ButtonCartCount from '../../components/common/ButtonCartCount';
import Footer from '../../components/common/Footer';
import Banner from '../../components/Home/Banner';
import About from '../../components/Home/About';
import Menu from '../../components/common/Menu';
import { menuItemsData } from '../../components/common/Menu/data';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { API_URL, LIST_PRODUCT } from '../../action/types';

const Home = () => {
  const menuRef = useRef();
  const dispatch= useDispatch();
  const handleScrollMenu = () => {
    menuRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const getListProducts=async()=>{
    try {
      const response = await axios.get(`${API_URL}/list-product`)
      dispatch({type:LIST_PRODUCT,payload:response.data.products})
    } catch (error) {
      alert('Server bị lỗi')
    }
  }
  useEffect(()=>{
    getListProducts();
  },[])
  return (
    <div>
      <Banner handleScrollMenu={handleScrollMenu} />
        <About />
          <Menu list={menuItemsData} ref={menuRef} />
        <Footer />
      <ButtonCartCount />
    </div>
  );
};

export default Home;
