import React from 'react';
import {Label} from './Label';

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
    const {className, id, placeholder,containerClass,labelValue,labelClass,type,value,name, showLabel} = this.props;
    return (
      <div className={`text-box-wrapper ${containerClass}`}>
      {showLabel && <Label value={labelValue} className={labelClass}/>}
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
      </div>
    )
  }
}