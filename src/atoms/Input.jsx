import React from 'react';

export class Input extends React.Component{

  handleChange = (event) => {
    const {onChange} = this.props;
    onChange && onChange(event);
  }

  handleBlur =(event) => {
    const {onBlur} = this.props;
    onBlur && onBlur(event);
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