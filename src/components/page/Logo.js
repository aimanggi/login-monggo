import React, { Component } from 'react';
import imgLogo from '../img/monggoLogo.png';

class Logo extends Component {
    render(){
        return(
            <a href="#">
                <img src={imgLogo} alt="" />
            </a>
        )
    }
}

export default Logo;