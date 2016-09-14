import React, { Component } from 'react';
import '../css/Form.css'; 


class Form extends Component {
  constructor(){
    super()
      this.state = {
        notes: '',
        client: '',
        project: ''
      }
  }

  getNotes(event){
    this.setState({
      notes: event.target.value
    });
  }

  getClient(event){
    this.setState({
      client: event.target.value
    });
  }

  getProject(event){
    this.setState({
      project: event.target.value
    });
  }

  formSubmit(){
    console.log(this.state.notes, this.state.client, this.state.project);
  }

  render(){
    if(this.props.formShow){
      return (
          <div>
          <form>
          <input type="text" value={this.state.client} placeholder="Client" onChange={(e) =>this.getClient(e)} />
          <input type="text" value={this.state.project} placeholder="Project" onChange={(e) => this.getProject(e)} />
          <input className="notes-form" type="text" value={this.state.notes} placeholder="Notes"  onChange={(e) => this.getNotes(e)} />
          <input type="Button" value="Log" onClick={(e) => this.formSubmit()} />
          </form>
          </div>
          )
    } else {
      return null;
    }

  }
}

export default Form;

