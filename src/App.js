import React,{Component} from 'react';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import Counter from './components/counter/counter';
import Donate from './components/donate/donate';
import './App.css';

class App extends Component{
  render(){
    return (
      <div>
        <Header></Header>
        <Hero></Hero>
        <Counter></Counter>
        <Donate></Donate>
      </div>
    );
  }
}

export default App;
