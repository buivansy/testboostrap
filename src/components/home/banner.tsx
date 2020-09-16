import React from 'react'
import '../../css/banner.css';
import test from '../../imgs/banner/test.jpg';
function Banner() {
    return (
        <div className="container col-banner">
            <div className="row">
                <div className="col-sm-6">
                    <p className="text-gt">Phần mềm quản lý vật tư chuyên sâu, dễ triển khai cho nhà thầu.</p>
                    <div className="row">
                        <div className="col-sm-1">
                            <i className="fas fa-clock" style={{fontSize:15,color:"#00FFFF"}}/>
                        </div>
                        <div className="col-sm-11">
                            <p>Quản lý trọn vòng đời vật tư, từ BOQ - YCVT - Cung ứng - kho - Báo cáo, kiểm soát.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-1">
                            <i className="fas fa-clock" style={{fontSize:15,color:"#00FFFF"}}/>
                        </div>
                        <div className="col-sm-11">
                            <p>Liên thông số liệu tự động các khâu.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-1">
                            <i className="fas fa-clock" style={{fontSize:15,color:"#00FFFF"}}/>
                        </div>
                        <div className="col-sm-11">
                            <p>Quy trình xét duyệt, phối hợp công ty, công trường dễ dàng.</p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <button type="button" className="btn btn-md btn-lu">Đăng ký nhận Demo</button>
                    </div>
                </div>
                <div className="col-sm-6 bg-video">
                    <button type="button" className="btn" data-toggle="modal" data-target="#myModal">
                        <img src={test}  alt="Cinque Terre" width="550" height="350"/> 
                    </button>
                    <div className="modal" id="myModal">
                        <div className="modal-dialog">
                        <div className="modal-content bg-dark">
                            {/* <iframe width="1000px" height="600px" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe> */}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
