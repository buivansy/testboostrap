import React from 'react';
import  '../../css/loiich.css';
import loiich from '../../imgs/loiich/loiich.png';
import loiich1 from '../../imgs/loiich/loiich1.png';
import loiich2 from '../../imgs/loiich/loiich2.png';

function Loiich() {
    return (
        <div className="container">
            <p className="text-gt">Lợi ích</p>
            <div className="row">
                <div className="col-sm-4 shadow p-2 mb-4 bg-white">
                    <img src={loiich}  alt="Cinque Terre" width="100%" height="230"/> 
                    <p>Cho nhà quản lý</p>
                    <div className="row bg-nd">
                        <div className="col-sm-1">
                            <i className="fas fa-clock" style={{fontSize:15,color:"#00FFFF"}}/>
                        </div>
                        <div className="col-sm-11">
                            <p>Dễ dàng biết được các dự án của mình đã sử dụng vật tư gì, 
                            giá trị bao nhiêu, đã vượt Hợp đồng chưa</p>
                        </div>
                    </div>
                    <div className="row bg-nd">
                        <div className="col-sm-1">
                            <i className="fas fa-clock" style={{fontSize:15,color:"#00FFFF"}}/>
                        </div>
                        <div className="col-sm-11">
                            <p>Xem các báo cáo, truy vấn thông tin tại mọi thời điểm 
                            mà không cần chờ cấp dưới báo cáo</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 shadow p-2 mb-4 bg-white">
                    <img src={loiich1}  alt="Cinque Terre" width="100%" height="230"/> 
                    <p>Cho nhân viên</p>
                    <div className="row bg-nd">
                        <div className="col-sm-1">
                            <i className="fas fa-clock" style={{fontSize:15,color:"#00FFFF"}}/>
                        </div>
                        <div className="col-sm-11">
                            <p>Nắm bắt, xử lý công việc, 
                            nghiệp vụ về vật tư dễ dàng do phần mềm hỗ trợ sâu.</p>
                        </div>
                    </div>
                    <div className="row bg-nd">
                        <div className="col-sm-1">
                            <i className="fas fa-clock" style={{fontSize:15,color:"#00FFFF"}}/>
                        </div>
                        <div className="col-sm-11">
                            <p className="text-nd">Không mất thời gian làm báo cáo.</p>
                        </div>
                    </div>
                    <div className="row bg-nd">
                        <div className="col-sm-1">
                            <i className="fas fa-clock" style={{fontSize:15,color:"#00FFFF"}}/>
                        </div>
                        <div className="col-sm-11">
                            <p className="text-nd">Làm việc nhàn hơn mà hiệu quả hơn.</p>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <button type="button" className="btn btn-md btn-lu">Đăng ký nhận Demo</button>
                    </div>
                </div>
                <div className="col-sm-4 shadow p-2 mb-4 bg-white">
                    <img src={loiich2}  alt="Cinque Terre" width="100%" height="230"/> 
                    <p>Cho Công Ty</p>
                    <div className="row bg-nd">
                        <div className="col-sm-1">
                            <i className="fas fa-clock" style={{fontSize:15,color:"#00FFFF"}}/>
                        </div>
                        <div className="col-sm-11">
                            <p className="text-nd">Quy trình xét duyệt nhanh chóng.</p>
                        </div>
                    </div>
                    <div className="row bg-nd">
                        <div className="col-sm-1">
                            <i className="fas fa-clock" style={{fontSize:15,color:"#00FFFF"}}/>
                        </div>
                        <div className="col-sm-11">
                            <p className="text-nd">Nâng cao năng lực cung ứng và vận hành dự án tới 40%.</p>
                        </div>
                    </div>
                    <div className="row bg-nd">
                        <div className="col-sm-1">
                            <i className="fas fa-clock" style={{fontSize:15,color:"#00FFFF"}}/>
                        </div>
                        <div className="col-sm-11">
                            <p className="text-nd">Giảm thất thoát tới 50%.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loiich;
