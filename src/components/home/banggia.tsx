import React from 'react'
import '../../css/banggia.css';
function Banggia() {
    return (
        <div className="container">
            <p className="text-td">Pricing</p>
            <p className="text-bg">Bảng Giá Các Gói Sản Phẩm</p>
            <div className="row">
                <div className="col-sm-3 shadow p-2 mb-4 bg-white">
                    <p className="text-vnd">VND</p>
                    <p className="text-vnd-number">1,000.000</p>
                    <p>Monthy Package</p>
                    <h5>Starter</h5>
                    <br/>
                    <br/>
                    <p>10 Users</p>
                    <p>20GB</p>
                    <p>12 Monthy Payment</p>
                    <div className="col-sm-12">
                        <button type="button" style={{borderRadius:20,width:140}} className="btn btn-outline-secondary">Liên hệ</button>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
                <div className="col-sm-3 shadow p-2 mb-4 bg-white">
                <p className="text-vnd">VND</p>
                    <p className="text-vnd-number">1,900.000</p>
                    <p>Monthy Package</p>
                    <h5>Advance</h5>
                    <br/>
                    <br/>
                    <p>20 Users</p>
                    <p>50GB</p>
                    <p>12 Monthy Payment</p>
                    <div className="col-sm-12">
                        <button type="button" style={{borderRadius:20,width:140}} className="btn btn-outline-secondary">Liên hệ</button>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
                <div className="col-sm-3 shadow p-2 mb-4 bg-white">
                <p className="text-vnd">VND</p>
                    <p className="text-vnd-number">4,500.000</p>
                    <p>Monthy Package</p>
                    <h5>Professional</h5>
                    <br/>
                    <br/>
                    <p>50 Users</p>
                    <p>+90K/User</p>
                    <p>Unlimited</p>
                    <p>12 Monthy Payment</p>
                    <div className="col-sm-12">
                        <button type="button" style={{borderRadius:20,width:140}} className="btn btn-outline-secondary">Liên hệ</button>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
                <div className="col-sm-3 shadow p-2 mb-4 bg-white">
                <p className="text-vnd">Liên hệ</p>
                    <p className="text-vnd-number">0981 248 081</p>
                    <h5>Eneterprise</h5>
                    <br/>
                    <br/>
                    <p>Tùy biến phát triển theo yêu cầu của doanh nghiệp</p>
                    <div className="col-sm-12">
                        <button type="button" style={{borderRadius:20,width:140}} className="btn btn-outline-secondary">Liên hệ</button>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </div>

        </div>
    )
}

export default Banggia;
