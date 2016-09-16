import React, { Component } from 'react';
const $ = require ('jquery');
import '../css/Entry.css';

class Entry extends Component {
  constructor(){
    super()
      this.state = {
        client: '',
        project: '',
        note: '',
        data: []
      }
  }

  componentDidMount(){
    console.log('mount');
    $.ajax({
      url: this.props.source,
      dataType: "json",
      success: function(data){
        console.log(data);
        this.setState({
          data: data
        })
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(this.props.url, status, err.toString());
      }.bind(this)
    })
  }

  handleNoteLog(note){
  }

  render(){
    return(
        <div>
        <h1>Time Sheet</h1>
        <table className="table">
              <tr>
                      <th><h3>Client</h3></th>
                      <th>Project</th>
                      <th>Notes</th>
                      </tr>
        {this.state.data.map(function(data){
            return   <tr key={data.id}>
                      <td>{data.client}</td>
                      <td>{data.project}</td>
                      <td>{data.note}</td>
                      </tr>
          })}
                      </table>
        </div>
        )
  }
}

export default Entry;
