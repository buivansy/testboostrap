import React from 'react';
import '../../css/tinhnang.css';
import kiemxoatvattu_1 from '../../imgs/tinhnang/1-kiemxoatvattu.png'
function Tinhnang1() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <p className="text-gt-tn">Các Nhóm Tính Năng</p>
                    <p className="text-gt-gt">Kiểm Soát Vật Tư Theo BOQ Hợp Đồng</p>
                        <div className="row">
                            <div className="col-sm-1">
                                <i className="fas fa-clock " style={{fontSize:15,color:"#00FFFF"}}/>
                            </div>
                            <div className="col-sm-11">
                                <p className="text-nd">Tạo và cập nhập BOQ vật tư cho toàn dự án, 
                                cho từng hạng mục (Hệ) thi công theo mô hình WBS</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-1">
                                <i className="fas fa-clock " style={{fontSize:15,color:"#00FFFF"}}/>
                            </div>
                            <div className="col-sm-11">
                                <p className="text-nd">Theo dõi lượng vật tư yêu cầu, vật tư sử dụng thực tế cho Dự án
                                , cho từng hạng mục so với trần BOQ</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-1">
                                <i className="fas fa-clock " style={{fontSize:15,color:"#00FFFF"}}/>
                            </div>
                            <div className="col-sm-11">
                                <p className="text-nd">Cảnh báo các phát sinh vật
                                tư theo BOQ một cách kịp thời</p>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <button type="button" className="btn btn-md btn-lu">Đăng ký nhận Demo</button>
                        </div>
                </div>
                <div className="col-sm-6">
                    <img src={kiemxoatvattu_1} className="rounded" alt="Cinque Terre" width="100%" height="100%"/> 
                </div>
            </div>
            
        </div>
    )
}

export default Tinhnang1;
