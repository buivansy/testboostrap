import React from 'react';
import '../../css/tinhnang.css';
import cuvt from '../../imgs/tinhnang/3-cuvt.png'
function Tinhnang2() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <img src={cuvt} className="rounded" alt="Cinque Terre" width="100%" height="100%"/> 
                </div>
                <div className="col-sm-6">
                    <p className="text-gt-tn">Các Nhóm Tính Năng</p>
                    <p className="text-gt-gt">Tạo Xét Duyệt Và Theo Dõi Yêu Cầu Vật Tư Các Dự Án</p>
                        <div className="row">
                            <div className="col-sm-1">
                                <i className="fas fa-clock " style={{fontSize:15,color:"#00FFFF"}}/>
                            </div>
                            <div className="col-sm-11">
                                <p className="text-nd">Yêu cầu vật tư từ dự án gửi công ty cấp</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-1">
                                <i className="fas fa-clock " style={{fontSize:15,color:"#00FFFF"}}/>
                            </div>
                            <div className="col-sm-11">
                                <p className="text-nd">Yêu cầu vật tư cấp dự án</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-1">
                                <i className="fas fa-clock " style={{fontSize:15,color:"#00FFFF"}}/>
                            </div>
                            <div className="col-sm-11">
                                <p className="text-nd">Cảnh báo ngay khi yêu cầu tích luỹ vượt BOQ</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-1">
                                <i className="fas fa-clock " style={{fontSize:15,color:"#00FFFF"}}/>
                            </div>
                            <div className="col-sm-11">
                                <p className="text-nd">Tự động liên thông số lượng, chủng loại vật tư yêu
                                 cầu tới bộ phần cung ứng, bộ phận kho để xử lý</p>
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

export default Tinhnang2;
