import React,{Component} from 'react';
import icon1 from '../../images/catersmart-icon-1.png';
import icon2 from '../../images/catersmart-icon-2.png';
import icon3 from '../../images/catersmart-icon-3.png';

export default class DonateLeft extends Component {
    render() {
      return (
      <div className="donate-left">
          <div className="donate-icon-heading">
            <h1>How it Works</h1>
          </div>
          <div className="donate-icon-wrap">
            <div className="donate-icon">
              <img src={icon1} alt="icon-1"/>
            </div>
            <div className="donate-icon-description">
              <p>You decide the donation amount and pick the recipient: healthcare workers or others in need </p>
            </div>
          </div>
          <div className="donate-icon-wrap">
            <div className="donate-icon">
              <img src={icon2} alt="icon-2"/>
            </div>
            <div className="donate-icon-description">
              <p>Each day, team at CaterSpot creates food packages based on the donations received and the need particular recipient has expressed</p>
            </div>
          </div>
          <div className="donate-icon-wrap">
            <div className="donate-icon">
              <img src={icon3} alt="icon-3"/>
            </div>
            <div className="donate-icon-description">
              <p>The order is dispatched to one of our catering suppliers who prepare the food / assemble the pantry baskets and deliver to recipients</p>
            </div>
          </div>
      </div>
      );
    }
}