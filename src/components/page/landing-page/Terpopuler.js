import React, { Component } from 'react';
import sapiPerah from '../../img/sapi_perah.png';
import kambing from '../../img/kambing.png';
import kambingEtawa from '../../img/kambing_etawa.png';
import LihatDetail from '../../btn/LihatDetail';

class Terpopuler extends Component {
    render(){
        return(
            <div className="terpopuler">
                <h2 className="title-terpopuler">TERPOPULER</h2>
                <div className="card-deck text-center resize">
                    <div className="card">
                        <img className="card-img-top" src={sapiPerah} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title hewan1"><b>Sapi Perah</b></h5>
                            <p className="card-text">Kec. Samirono, Kab. Kulon Progo, D.I. Yogyakarta.</p>
                            <p className="card-text harga1"><b>Rp19.000.000,00</b></p>
                            <p><button className="btn btn-outline-primary">Details</button></p>
                        </div>
                    </div>


                    <div className="card">
                        <img className="card-img-top" src={kambing} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title hewan1"><b>Kambing</b></h5>
                            <p className="card-text">Kec. Depok, Kab. Sleman, D. I. Yogyakarta</p>
                            <p className="card-text harga1"><b>Rp7.000.000,00</b></p>
                            <p><button className="btn btn-outline-primary">Details</button></p>
                        </div>
                    </div>


                    <div className="card">
                        <img className="card-img-top" src={kambingEtawa} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title hewan1">Kambing Etawa</h5>
                            <p className="card-text">Kec. Imogiri, Kab. Bantul, D. I. Yogyakarta</p>
                            <p className="card-text harga1"><b>Rp8.000.000,00</b></p>
                            <p><button className="btn btn-outline-primary">Details</button></p>
                        </div>
                    </div>
                </div>
                <div className="butt">
                    <LihatDetail />
                </div>
            </div>
        )
    }
}

export default Terpopuler;