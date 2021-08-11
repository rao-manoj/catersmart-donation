import React,{Component} from 'react';
import DonateLeft from './donate-left';
import DonateRight from './donate-right';
import './donate.css';

export default class Donate extends Component {
    render() {
      return (
        <div className="donate-wrap">
          <DonateLeft></DonateLeft>
          <DonateRight></DonateRight>
        </div>
      );
    }
}