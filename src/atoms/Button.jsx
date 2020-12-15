import React from 'react';

export class Button extends React.Component{

  handleChange = (event) => {
    const {handleChange} = this.props;
    handleChange && handleChange();
  }

  handleClick =() => {
    const {handleClick} = this.props;
    handleClick && handleClick();
  }
  render(){
    const { value,disabled,className} = this.props;
    return (
      <button
      type="button"
      className={`form-button ${className}`}
      onClick={this.handleClick}
      disabled={disabled}
      >
      {value}
      </button>
    )
  }
}