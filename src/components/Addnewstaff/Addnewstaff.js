import React,{useState} from 'react';
import Dashboard from '../Dashboard/Dashboard';
import './Addnewstaff.css'
import axios from 'axios';
import { API_URL } from '../../action/types';
export default function Adneewstaff  () {
    const [data,setData] = useState({
        firstName:'',
        lastName:'',
        userName:'',
        passWord:'',
        role:'',
    });
    const onChangeData=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const onSubmit=async(event)=>{
        event.preventDefault();
        try {
            const response= await axios.post(`${API_URL}/create-staff`,data);
            if(response.data.success)
                alert('Tạo tài khoản thành công');
            else
                alert(response.data.messages)
        } catch (error) {
            alert('Tạo tài khoản không thành công')
        }
    }
    return (
        <div>

            {'admin' === "admin" ? (

                <div id="root">
                    <div className="App">
                        <   div className="header">
                            <div className="header-logo"><a href="/"><i className="fab fa-shopify"></i>E-MENU</a></div>
                            <form className="header-search"><input type="text" className="header-search-input" placeholder="Search...." value="" />
                                <div className="input-submit"><i className="fas fa-search"></i></div>
                            </form>
                            <div className="header-info">
                                <a className="header-cart" href="/add">add</a>

                                <div className="nav-menu-mobile"><i className="fas fa-bars"></i></div>
                                <div className="nav-mobile">
                                    <div className="nav-close"><i className="fas fa-times"></i></div>
                                    <form className="form-mobile"><input type="text" placeholder="Search..." value="" /></form>
                                    <ul className="nav-mobile-list">
                                        <li className="nav-mobile-item"><a className="nav-mobile-link" href="/admin">Dashboard</a></li>
                                        <li className="nav-mobile-item"><a className="nav-mobile-link" href="/about">Admin</a></li>
                                        <li className="nav-mobile-item"><a className="nav-mobile-link" href="/don_hang">Lịch sử mua hàng</a></li>
                                        <li className="nav-mobile-item"><span className="nav-mobile-link">Đăng xuất</span></li>
                                    </ul>
                                </div>
                                <div className="header-users">
                                    <div className="header-avatar"><img src="https://2.pik.vn/2021a19bb345-d298-473f-ba8d-b4c16f3ec16f.jpg" alt="avatar" /><span className="header-username">Admin</span></div>
                                    <div className="header-user-dropdown"><a href="/admin">Dashboard</a><a href="/about">About</a><a href="/don_hang">Lịch sử mua hàng</a>
                                        <div className="button-logout">Log Out</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="admin">
                            <div className="nav-menu-mobile"><i className="fas fa-bars text-black"></i></div>
                            <div className="category">
                                <ul className="category-list">
                                    <li className="category-item"><a className="category-link" href="/Manage-e-menu">Manage e-menu</a></li>
                                    <li className="category-item"><a className="category-link" href="/Add-new-Dishes">Add new dishes</a></li>
                                    <li className="category-item"><a className="category-link active" href="/Employee_Manager" aria-current="page">Employee Manager</a></li>
                                    <li className="category-item"><a className="category-link" href="/Addnewstaff">Addnewstaff</a></li>
                                </ul>
                            </div>
                            <div className="form-add-staff">
                                <form onSubmit={onSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Fist Name</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="firstName" onChange={onChangeData}/>
                                        
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Last Name</label>
                                        <input type="text" className="form-control" id="exampleInputPassword1" name="lastName" onChange={onChangeData}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">User Name</label>
                                        <input type="text" className="form-control" id="exampleInputPassword1" name="userName" onChange={onChangeData}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" name="passWord" onChange={onChangeData}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">role</label>
                                        <input type="text" className="form-control" id="exampleInputPassword1" name="role" onChange={onChangeData}/>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>

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


