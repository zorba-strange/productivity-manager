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
      url: 'http://localhost:3000/entry',
      dataType: "json",
      cache: false,
      success: function(data){
        this.setState({
          data: data
        })
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(this.props.url, status, err);
      }.bind(this)
    })
  }


  render(){
    return(
        <div>
        <table className="table">
              <tr>
                      <th>Client</th>
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
