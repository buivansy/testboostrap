import React from 'react';
import '../../css/tinhnang.css';
import cuvt from '../../imgs/tinhnang/4-cuvt.png'
function Tinhnang4() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <img src={cuvt} className="rounded" alt="Cinque Terre" width="100%" height="100%"/> 
                </div>
                <div className="col-sm-6">
                    <p className="text-gt-tn">Các Nhóm Tính Năng</p>
                    <p className="text-gt-gt">Quản Lý Kho Dễ Dàng, Chính Xác</p>
                        <div className="row col-sm-12">
                            <div className="col-sm-1">
                                <i className="fas fa-clock " style={{fontSize:15,color:"#00FFFF"}}/>
                            </div>
                            <div className="col-sm-11">
                                <p className="text-nd">Tạo phiếu nhập, xuất, điều chuyển</p>
                            </div>
                        </div>
                        <div className="row col-sm-12">
                            <div className="col-sm-1">
                                <i className="fas fa-clock " style={{fontSize:15,color:"#00FFFF"}}/>
                            </div>
                            <div className="col-sm-11">
                                <p className="text-nd">Nhập, xuất nội bộ (vật tư luân chuyển)</p>
                            </div>
                        </div>
                        <div className="row col-sm-12">
                            <div className="col-sm-1">
                                <i className="fas fa-clock " style={{fontSize:15,color:"#00FFFF"}}/>
                            </div>
                            <div className="col-sm-11">
                                <p className="text-nd">Kiểm soát chênh lệch giữ chứng từ và thực nhập, thực xuất</p>
                            </div>
                        </div>
                        <div className="row col-sm-12">
                            <div className="col-sm-1">
                                <i className="fas fa-clock " style={{fontSize:15,color:"#00FFFF"}}/>
                            </div>
                            <div className="col-sm-11">
                                <p className="text-nd">Kiểm kê kho</p>
                            </div>
                        </div>
                        <div className="row col-sm-12">
                            <div className="col-sm-1">
                                <i className="fas fa-clock " style={{fontSize:15,color:"#00FFFF"}}/>
                            </div>
                            <div className="col-sm-11">
                                <p className="text-nd">Báo cáo kho đầy đủ, đa dạng , chính xác</p>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <button type="button" className="btn btn-md btn-lu">Đăng ký nhận Demo</button>
                        </div>
                </div>
            </div>
            
        </div>
    )
}

export default Tinhnang4;
