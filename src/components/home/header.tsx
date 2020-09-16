import React from 'react';
import logo from '../../imgs/header/cropped-logositemage-2-270x270.png';
import '../../css/header.css';
function Header() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-sm navbar-dark">
                <div className="row bg-logo col-sm-2">
                    <img src={logo} className="rounded-circle" alt="Cinque Terre" width="40" height="40"/> 
                    <p className="text-logo">SiteMAGE.</p>
                </div>
                <div className="collapse navbar-collapse col-sm-6" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <div className="col-sm-5">
                            <li className="nav-item active">
                                <button className="btn">Trang Chủ <span className="sr-only">(current)</span></button>
                            </li>
                        </div>
                        <div className="col-sm-4">
                            <li className="nav-item active">
                                <button className="btn">Bài Viết <span className="sr-only">(current)</span></button>
                            </li>
                        </div>
                        <div className="col-sm-5 ">
                            <li className="nav-item active">
                                <button className="btn">Câu Hỏi? <span className="sr-only">(current)</span></button>
                            </li>
                        </div>
                    </ul>
                </div>
                <div className="col-sm-4">
                    <button type="button" className="btn btn-md btn-login">Đăng Nhập</button>
                </div>
            </nav>
        </div>
    )
}

export default Header;
