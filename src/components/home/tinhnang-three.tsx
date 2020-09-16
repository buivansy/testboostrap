import React from 'react';
import '../../css/tinhnang.css';
import cuvt from '../../imgs/tinhnang/2-cuvt.png'
function Tinhnang3() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <p className="text-gt-tn">Các Nhóm Tính Năng</p>
                    <p className="text-gt-gt">Quản Lý Cung Ứng Vật Tư Cho Dự Án</p>
                        <div className="row">
                            <div className="col-sm-1">
                                <i className="fas fa-clock " style={{fontSize:15,color:"#00FFFF"}}/>
                            </div>
                            <div className="col-sm-11">
                                <p className="text-nd">Nghiệp vụ đa dạng: Mua ngoài, thêu ngoài, 
                                thuê mua nội bộ (khi cần kiểm soát chi phí nội bộ)</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-1">
                                <i className="fas fa-clock " style={{fontSize:15,color:"#00FFFF"}}/>
                            </div>
                            <div className="col-sm-11">
                                <p className="text-nd">Danh sách vật tư chờ cung ứng 
                                cho từng dự án tự động liên thông với yêu cầu vật tư</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-1">
                                <i className="fas fa-clock " style={{fontSize:15,color:"#00FFFF"}}/>
                            </div>
                            <div className="col-sm-11">
                                <p className="text-nd">Theo dỗi quá trình cáp vật tư cho dự án dễ dàng</p>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <button type="button" className="btn btn-md btn-lu">Đăng ký nhận Demo</button>
                        </div>
                </div>
                <div className="col-sm-6">
                    <img src={cuvt} className="rounded" alt="Cinque Terre" width="100%" height="100%"/> 
                </div>
            </div>
            
        </div>
    )
}

export default Tinhnang3;
