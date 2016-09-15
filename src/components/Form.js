import React, { Component } from 'react';
import '../css/Form.css'; 


class Form extends Component {
  constructor(){
    super()
      this.state = {
        notes: '',
        client: '',
        project: '',
        entry: {
          client: '',
          project: '',
          note: ''
        }
      }
  }

  getNotes(event){
    console.log(this.state.entry);
    this.setState({
      entry: {note: event.target.value}
    });
  }

  getClient(event){
    this.setState({
      entry: {client: event.target.value}
    });
  }

  getProject(event){
    this.setState({
      entry: {project: event.target.value}
    });
  }

  formSubmit(){
    console.log(this.state.entry.client, this.state.project, this.state.note);
  }

  render(){
    if(this.props.formShow){
      return (
          <div>
          <h2>Break. Reflect. Record.</h2>
          <form>
          <input type="text" value={this.state.entry.client} placeholder="Client" onChange={(e) =>this.getClient(e)} />
          <input type="text" value={this.state.entry.project} placeholder="Project" onChange={(e) => this.getProject(e)} />
          <input className="notes-form" type="text" value={this.state.entry.note} placeholder="Notes"  onChange={(e) => this.getNotes(e)} />
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

