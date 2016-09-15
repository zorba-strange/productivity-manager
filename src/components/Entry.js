import React, { Component } from 'react';
const $ = require ('jquery')

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
        {this.state.data.map(function(data){
            return <h3 key={data.id}>{data.client} | {data.project} | {data.note}</h3>;
          })}
        </div>
        )
  }
}

export default Entry;
