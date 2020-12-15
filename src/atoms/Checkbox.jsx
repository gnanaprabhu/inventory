import React from 'react';

export class Checkbox extends React.Component{

  handleClick =(event) => {
    const {onClick} = this.props;
    onClick && onClick(event);
  }
  render(){
    const { value,name,id,isChecked} = this.props;
    return (
      <input type="checkbox" id={id} onClick={this.handleClick} name={name} value={value} />
    )
  }
}