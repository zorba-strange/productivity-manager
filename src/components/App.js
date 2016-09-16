import React, { Component } from 'react';
import '../css/App.css';
import Form from './Form';
import Timer from './Timer';
import Entry from './Entry';
import Header from './Header';

class App extends Component {
  constructor() {
    super()
      this.state = {
        time: '',
        value: '',
        timerId: '',
        interval: '',
        formShow: false,
        timeShow: false
      }
  }
    handleChange(event){
      event.preventDefault();
      this.setState({value: event.target.value});
    }
    timerSet(){
      this.setState({
        time: this.state.value,
        timeShow: true
      });
      console.log(this.state.time);
    }

    countDown(){
      var time = parseInt(this.state.time);
      console.log(time);
      if(time ===  0){
        clearInterval(this.state.interval);
        this.setState({
          timerId: null,
          formShow: true,
          timeShow: false,
        });
      } else {
        time--;
        this.setState({time: time});
      }
    }

    // $('.click').click(function () {
    //     var rawAmount = $('input').val();
    //     var cleanAmount = parseInt(rawAmount);
    //     var totalAmount = cleanAmount * 60;
    //      $('input').val(" ");

    //     var loop, theFunction = function () {

    //         totalAmount--;

    //         if (totalAmount == 0) {

    //             clearInterval(loop);
    //         }
    //         var minutes = parseInt(totalAmount/60);
    //         var seconds = parseInt(totalAmount%60);
    //         if(seconds < 10)
    //             seconds = "0"+seconds;
    //         $('p').text(minutes + ":" + seconds);
    //     };

    //     var loop  = setInterval(theFunction, 1000);

    // })

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
          <Header />
          <form className="center" >
          <input 
          type="text" 
          value={this.state.value}
          placeholder="Seconds"
          className="center"
          onChange={(e) => this.handleChange(e)} 
          />
          <input type="Button" value="Set Timer" onClick={(e) => this.timerSet()} />
          </form>
          <input type="Button" value="Go" onClick={(e) => this.timer()} />
          <Timer timeShow={this.state.timeShow} time={this.state.time} />
          <Form postUrl='http://localhost:3000/entry' formShow={this.state.formShow} />
          <Entry source='http://localhost:3000/entry' />
          </div>
          );
    }
}

export default App;
