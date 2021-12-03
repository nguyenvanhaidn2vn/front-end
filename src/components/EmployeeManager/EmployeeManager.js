import React from "react";

export default function EmployeeManager () {
    return (
        <div>
           {'admin' === "admin" ? (
         
         <div id="root">
            <div className="App">
            <   div className="header">
                <div className="header-logo"><a href="/"><i className="fab fa-shopify"></i>E-MENU</a></div>
                <form className="header-search"><input type="text" className="header-search-input" placeholder="Search...." value=""/>
                    <div className="input-submit"><i className="fas fa-search"></i></div>
                </form>
                <div className="header-info"><a className="header-cart" href="/cart">Cart<span>0</span></a>
                    <div className="nav-menu-mobile"><i className="fas fa-bars"></i></div>
                    <div className="nav-mobile">
                        <div className="nav-close"><i className="fas fa-times"></i></div>
                        <form className="form-mobile"><input type="text" placeholder="Search..." value=""/></form>
                        <ul className="nav-mobile-list">
                            <li className="nav-mobile-item"><a className="nav-mobile-link" href="/admin">Dashboard</a></li>
                            <li className="nav-mobile-item"><a className="nav-mobile-link" href="/about">Admin</a></li>
                            <li className="nav-mobile-item"><a className="nav-mobile-link" href="/don_hang">Lịch sử mua hàng</a></li>
                            <li className="nav-mobile-item"><span className="nav-mobile-link">Đăng xuất</span></li>
                        </ul>
                    </div>
                    <div className="header-users">
                        <div className="header-avatar"><img src="https://2.pik.vn/2021a19bb345-d298-473f-ba8d-b4c16f3ec16f.jpg" alt="avatar"/><span className="header-username">Admin</span></div>
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
                <div className="users">
                    <div className="users-item">
                        <p className="dishes-id">0</p>
                        <p className="dishes-name">Minh</p><img src="https://2.pik.vn/2021d48ab865-42be-4eaa-9c9b-c5fc7a255a9b.png" alt="BatMan" className="users-avatar"/>
                        <p className="dishes-price">Minh@gmail.com</p>
                        <p className="dishes-role">user</p>
                        <div className="review-action">
                            <div className="review-edit"><i className="fas fa-pen"></i></div>
                            <div className="review-delete"><i className="fas fa-trash"></i></div>
                        </div>
                    </div>
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