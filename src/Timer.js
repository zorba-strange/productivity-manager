import React, { Component } from 'react';
import './App.css';

class Timer extends Component {
  constructor() {
    super();
      this.state = {
        time: '',
        value: '',
        timerId: '',
        interval: '',
        formShow: false
      }
  }
    handleChange = function(event){
      event.preventDefault();
      this.setState({value: event.target.value});
    }.bind(this);

    onClick = function(){
      this.setState({time: this.state.value});
    }.bind(this);

    countDown = function(){
      var time = parseInt(this.state.time);
      console.log(time);
      if(time ===  0){
        clearInterval(this.state.interval);
        this.setState({timerId: null, formShow: true});
      } else {
        time--;
        this.setState({time: time});
      }
    }.bind(this);

    timer = function(){
      console.log('timer', 1);
      if(!this.state.timerId){
      this.setState({interval: setInterval(this.countDown, 1000)});
      this.setState({timerId: this.state.interval});
      }


    }.bind(this);

    render() {
      return (
          <div className="center">
          <h1 className="center">Set Timer</h1>
          <form className="center" >
          <input 
          type="text" 
          value={this.state.value}
          onChange={this.handleChange} 
          />
          <input type="Button" value="Set Timer" onClick={this.onClick} />
          </form>
          <input type="Button" value="Go" onClick={this.timer} />
          <h2>{this.state.time}</h2>
          </div>
          );
    }
}

export default Timer;
