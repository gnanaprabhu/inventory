import React from 'react'

export class Label extends React.Component{
  render(){
    const {className, value} = this.props;
    return <label className={`form-label ${className}`}>{value}</label>
  }
}