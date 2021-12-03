import React ,{useState}from 'react';
import { NavLink, Route, Switch } from "react-router-dom";
import './Addnewdishes.css';
import axios from 'axios'
import {API_URL} from '../../action/types'
export default function Addnewdishes () {
    const [data,setData]=useState({
      name:'',
      price:0,
      info:'',
      image:null,
    })
    const onChangeData =(event)=>{
      setData({...data,[event.target.name]:event.target.value});
      // if(event.target.name==="name")
      //   setData({...data,name:event.target.value});
      // else if(event.target.name==="price")
      //   setData({...data,price:event.target.value});
      if(event.target.name==="image")
        setData({...data,image:event.target.files[0]})
    }
    
    const onSubmit=async(event)=>{
      event.preventDefault();
      try {
        const formData = new FormData();
        formData.append('name',data.name)
        formData.append('price',data.price);
        formData.append('info',data.info);
        formData.append('image',data.image)
        const response = await axios.post(`${API_URL}/create-product`,formData);
        
      } catch (error) {
        
      }
    }
    const onChangMessage = () => {
      // alert("Đã thêm thành công")
    }
    return (
        <div>
            {"admin"==="admin" ? (

                <div>
                <div id="root">
                  <div className="App">
                    <div className="header">
                      <div className="header-logo">
                        <a href="/">
                          <i className="fab fa-shopify" />
                          E-MENU
                        </a>
                      </div>
                      <form  className="header-search">
                        <input
                          type="text"
                          className="header-search-input"
                          placeholder="Search...."
                          
                        />
                        <div className="input-submit">
                          <i className="fas fa-search" />
                        </div>
                      </form>
                      <div className="header-info">
                        <a className="header-cart" href="/cart">
                          Cart<span>0</span>
                        </a>
                        <div className="nav-menu-mobile">
                          <i className="fas fa-bars" />
                        </div>
                        <div className="nav-mobile" style={{ right: "-800px" }}>
                          <div className="nav-close">
                            <i className="fas fa-times" />
                          </div>
                          <form className="form-mobile">
                            <input type="text" placeholder="Search..."  />
                          </form>
                          <ul className="nav-mobile-list">
                            <li className="nav-mobile-item">
                              <a className="nav-mobile-link" href="/admin">
                                Dashboard
                              </a>
                            </li>
                            <li className="nav-mobile-item">
                              <a className="nav-mobile-link" href="/about">
                                Admin
                              </a>
                            </li>
                            <li className="nav-mobile-item">
                              <a className="nav-mobile-link" href="/don_hang">
                                Purchase history
                              </a>
                            </li>
                            <li className="nav-mobile-item">
                              <span className="nav-mobile-link">Đăng xuất</span>
                            </li>
                          </ul>
                        </div>
                        <div className="header-users">
                          <div className="header-avatar">
                            <img
                              src="https://2.pik.vn/2021a19bb345-d298-473f-ba8d-b4c16f3ec16f.jpg"
                              alt="avatar"
                            />
                            <span className="header-username">Admin</span>
                          </div>
                          <div className="header-user-dropdown">
                            <a href="/admin">Dashboard</a>
                            <a href="/about">About</a>
                            <a href="/don_hang">Purchase history</a>
                            <div className="button-logout">Log Out</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="admin">
                      <div className="nav-menu-mobile">
                        <i className="fas fa-bars text-black" />
                      </div>
                      <div className="category" style={{ right: "-800px" }}>
                        <ul className="category-list">
                          <li className="category-item">
                            <a className="category-link" 
                                href="/Manage-e-menu">
                              Manage e-menu
                            </a>
                          </li>
                          <li className="category-item">
                            <a
                              className="category-link active"
                              href="/Add-new-Dishes"
                              aria-current="page"
                            >
                              Add new dishes
                            </a>
                          </li>
                          <li className="category-item">
                            <a className="category-link" href="/Employee_Manager">
                            Employee Manager
                            </a>
                          </li>
                          <li className="category-item">
                            <a className="category-link" href="/Addnewstaff">
                            Addnewstaff
                            </a>
                          </li>
                        </ul>
                      </div>
                      <form onSubmit={onSubmit} className="margin-top-0 form-custom">
                        <div className="container">
                          <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            required
                            onChange={onChangeData}
                          />
                          <input
                            type="number"
                            placeholder="Nhập giá bán"
                            name="price"
                            required
                            onChange={onChangeData}
                          />
                          <textarea
                            placeholder="Description"
                            cols={30}
                            rows={5}
                            name="info"
                            defaultValue={""}
                            onChange={onChangeData}
                          />
                          
              
                          <input type="file" name="image" placeholder="Upload an image" 
                           onChange={onChangeData}
                          />
                          <button type="submit" onClick={onChangMessage} >Add</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="swal-overlay" tabIndex={-1}>
                  <div className="swal-modal" role="dialog" aria-modal="true">
                    <div className="swal-icon swal-icon--success">
                      <span className="swal-icon--success__line swal-icon--success__line--long" />
                      <span className="swal-icon--success__line swal-icon--success__line--tip" />
                      <div className="swal-icon--success__ring" />
                      <div className="swal-icon--success__hide-corners" />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
                <div classNameName="not-view">
                    <p>Bạn ko có quyền xem trang này</p>
                 </div>
            )}
         
        </div>
    );
}


