import React, { Component } from 'react';
import '../css/Time.css';

class Timer extends Component {
  render() {
    if(this.props.timeShow){
      return (
          <div>
          <div className="timer">
            <h2 className="time">{this.props.time}</h2> 
          </div>
          </div>
          );
    } else {
      return null;
    }
  }
}

export default Timer;

