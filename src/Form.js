import React, { Component } from 'react';

class Form extends Component {
  render(){
    if(this.props.formShow){
    return (
        <div>
          <form>
          <input type="text" value="mother... fucker" />
          </form>
          </div>
        )
          } else {
            return null;
          }
        
  }
}

export default Form;

