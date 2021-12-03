import React from 'react';
import Logo from '../Logo';
import './footer.css';

const Footer = () => {
    return (

        <section className="footer">

            <div className="boxt-container">
                <div className="box">
                    <h3>Locations</h3>
                    <a href="#">254 Nguyễn Văn Linh , </a>
                    <a href="#">Đà Nẵng - Việt Nam</a>

                </div>

                <div className="boxt">
                    <h3>Contact Info</h3>
                    <a href="#">Hotline : 0869 286 716</a>
                    <a href="#">Email : c1se46@dtu.edu.vn</a>
                </div>

                <div className="boxt">
                    <h3>follow us</h3>
                    <a href="https://www.facebook.com/nguyenvandung.2507">Facebook : Dũng Nguyễn</a>
                    <a href="#">Twitter</a>
                    <a href="#">Instagram</a>
                    <a href="#">Linkedin</a>
                </div>

            </div>

            <div className="credit"> copyright @ 2021 by <span>C1SE.46</span> </div>


        </section>

    );
};

export default Footer;
