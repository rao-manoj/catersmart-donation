import React,{Component} from 'react';
import hero from '../../images/catersmart-hero-1.png';
import './hero.css';

export default class Hero extends Component {
    render() {
      return (
            <div className="hero-wrap">
              <div className="hero-left">
                <div className="hero-image">
                  <img src={hero} alt="hero"/>
                </div>
              </div>
              <div className="hero-right">
                  <h1>The Indian <br/> Meal Support Program </h1>
                  <p>Use Catersmart to send individually packaged meals & snacks to your local hospital or affected community. Every $ will help a local restaurant / caterer/ homebaker too!</p>
                  <p>Help by donating food to people who need it right now:</p>
                  <p>By purchasing a meal support package, you are sending quality meals, pantry staples and snacks from our vetted restaurants & caterers, straight to the people who need this support.</p>
              </div>
            </div>
      );
    }
}