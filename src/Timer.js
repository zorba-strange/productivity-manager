import React, { Component } from 'react';
import './App.css';
import Form from './Form';

class Timer extends Component {
  constructor() {
    super()
      this.state = {
        time: '',
        value: '',
        timerId: '',
        interval: '',
        formShow: false
      }
  }
    handleChange(event){
      event.preventDefault();
      this.setState({value: event.target.value});
    }

    onClick(){
      this.setState({time: this.state.value});
    }

    countDown(){
      var time = parseInt(this.state.time);
      console.log(time);
      if(time ===  0){
        clearInterval(this.state.interval);
        this.setState({timerId: null, formShow: true});
      } else {
        time--;
        this.setState({time: time});
      }
    }

    timer(){
      console.log('timer', 1);
      if(!this.state.timerId){
      this.setState({interval: setInterval((e) => this.countDown(), 1000)});
      this.setState({timerId: this.state.interval});
      }
    }

    render() {
      return (
          <div className="center">
          <h1 className="center">Set Timer</h1>
          <form className="center" >
          <input 
          type="text" 
          value={this.state.value}
          onChange={(e) => this.handleChange(e)} 
          />
          <input type="Button" value="Set Timer" onClick={(e) => this.onClick()} />
          </form>
          <input type="Button" value="Go" onClick={(e) => this.timer()} />
          <h2>{this.state.time}</h2>
          <Form formShow={this.state.formShow} />
          </div>
          );
    }
}

export default Timer;
