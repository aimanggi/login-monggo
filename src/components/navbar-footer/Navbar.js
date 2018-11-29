import React, { Component } from 'react';
import Logo from '../page/Logo';

class Navbar extends Component {
    render(){
        return(
            <div>
                <ul className="topnav">
                    <li><a className="active" href="#">
                        <Logo />
                    </a></li>
                    <li><a href="#">Investasi</a></li>
                    <li><a href="#">Cara kerja</a></li>
                    <li><a href="#">Tentang Kami</a></li>
                    <li><a href="#">Bantuan</a></li>
                    <li class="right"><a href="#">Masuk</a></li>
                </ul>

                <div className="slideshow-container">
                    <div className="mySlides">
                        <div className="numbertext">1 / 3</div>
                        <img src="./navbar_files/cow1.jpg" width="100%" />
                        <div className="text">SEMUA ORANG BISA BETERNAK</div>
                    </div>

                    <div className="mySlides">
                        <div className="numbertext">2 / 3</div>
                        <img src="./navbar_files/sapi.jpg" width="100%" />
                        <div className="text">Caption Two</div>
                    </div>

                    <div className="mySlides">
                        <div className="numbertext">3 / 3</div>
                        <img src="./navbar_files/sapi1.jpg" width="100%" />
                        <div className="text">Caption Three</div>
                    </div>

                    <a className="prev" onclick="plusSlides(-1)">❮</a>
                    <a className="next" onclick="plusSlides(1)">❯</a>
                </div>

                <div style={{textAlign: 'center'}}>
                    <span className="dot" onclick="currentslide(1)"></span>
                    <span className="dot" onclick="currentslide(2)"></span>
                    <span className="dot" onclick="currentslide(3)"></span>
                </div>
            </div>
        )
    }
}

export default Navbar;
// , width: '100px';