import React, { Component } from 'react';
import '../css/Form.css'; 
const $ = require ('jquery')


class Form extends Component {
  constructor(){
    super()
      this.state = {
        note: '',
        client: '',
        project: ''
      }
  }

  handleSubmit(){
    console.log('Form Mount');
    var self = this;
    var entry = {client: this.state.client, note: this.state.note, project: this.state.project};
    $.ajax({
      url: this.props.postUrl,
      type: 'POST',
      data: entry,
      dataType: 'json',
      success: function(data){
        console.log('Submit success');
        var entries = self.state.data
      }.bind(this),
      error: function(xhr, status, err){
       console.log(this.props.postUrl, status, err.toString());
      }.bind(this)
    })
    window.location.reload('#');
  }

  getNote(event){
    this.setState({
      note: event.target.value
    })
    console.log(event.target.value)
  }

  getClient(event){
    this.setState({
      client: event.target.value
    })
  }

  getProject(event){
    this.setState({
      project: event.target.value
    })
  }

  formSubmit(){
    console.log(this.state.entry);
  }

  render(){
    if(this.props.formShow){
      return (
          <div>
          <h2>Break. Reflect. Record.</h2>
          <form  >
          <input type="text" value={this.state.client} placeholder="Client" onChange={(e) =>this.getClient(e) } />
          <input type="text" value={this.state.project} placeholder="Project" onChange={(e) => this.getProject(e)} />
          <input className="notes-form"  type="text" value={this.state.note} placeholder="Notes" onChange={(e) => this.getNote(e)} />
          <input type="Button" value="Log" onClick={(e) => this.handleSubmit()} />
          </form>
          </div>
          )
    } else {
      return null;
    }

  }
}

export default Form;

