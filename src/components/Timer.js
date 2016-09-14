import React, { Component } from 'react';

class Timer extends Component {
  render() {
    if(this.props.timeShow){
      return (
          <div>
            <h2>{this.props.time}</h2> 
          </div>
          );
    } else {
      return null;
    }
  }
}

export default Timer;

