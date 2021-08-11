import React,{Component} from 'react';
import logo from '../../images/catersmart-logo.png';
import './header.css'

export default class Header extends Component {
    render() {
      return (

            <div className="header-wrap">
              <div className="header-left">
                <div className="logo">
                  <img src={logo} alt="logo"/>
                </div>
                <div className="location-desktop">
                  <p>Current Location</p>
                </div>

              </div>
              <div className="header-right">
                <div>Corporate Solutions</div>
                <div>Sign In</div>
              </div>
            </div>

      );
    }
}