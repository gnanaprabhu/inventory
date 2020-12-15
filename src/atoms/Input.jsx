import React from 'react';

export class Input extends React.Component{

  handleChange = (event) => {
    const {handleChange} = this.props;
    handleChange && handleChange(event);
  }

  handleBlur =(event) => {
    const {handleBlur} = this.props;
    handleBlur && handleBlur(event);
  }
  render(){
    const {className, id, placeholder,type,value,name} = this.props;
    console.log('value',value);
    return (
      <input
        id={id}
        placeholder={placeholder}
        name={name}
        type={type}
        value={value?value:''}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
        className={`form-input ${className}`}
        // className={
        //   errors.email && touched.email
        //     ? "text-input error"
        //     : "text-input"
        // }
      />
    )
  }
}