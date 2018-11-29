import React, { Component } from 'react';
import Logo from '../page/Logo';
import appStore from '../img/App Store.svg';
import playStore from '../img/Play Store.svg';

class Footer extends Component {
    render(){
        return(
            <footer>
                <div className="foot-info">
                    <div className="foot-logo">
                        <Logo />
                    </div>
                    <ul className="foot-list-1">
                        <li><a href="#">Investasi</a></li>
                        <li><a href="#">Cara Kerja</a></li>
                        <li><a href="#">Tentang Kami</a></li>
                    </ul>
                    <ul className="foot-list-2">
                        <li><a href="#">Bantuan</a></li>
                        <li><a href="#">Kontak Kami</a></li>
                    </ul>
                    <div className="foot-app">
                        <div className="foot-app-description">Download Aplikasi Smartphone</div>
                        <div className="foot-app-cta">
                            <a href="#"><img src={appStore} alt=""/></a>
                            <a href="#"><img src={playStore} alt=""/></a>
                        </div>
                    </div>
                </div>
                <div className="foot-license">
                    Copyright 2018 - PT Monggovest Indonesia
                </div>
            </footer>
        )
    }
}

export default Footer;