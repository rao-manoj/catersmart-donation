import React,{Component} from 'react';
import './counter.css';

export default class Counter extends Component {
    render() {
      return (

            <div className="counter-wrap">
              <div className="counter-block">
                <h1>2000+</h1>
                <p>Meals donated to frontline vulnerable communities</p>
              </div>
              <div className="counter-block">
                <h1>200+</h1>
                <p>Donors participated so far in helping people in need</p>
              </div>
              <div className="counter-block">
                <h1>100+</h1>
                <p>Volunteers participated in the service</p>
              </div>
            </div>

      );
    }
}