import React from 'react';
import { Label } from './Label';

export class Checkbox extends React.Component{

  handleClick =(event) => {
    const {onClick} = this.props;
    onClick && onClick(event);
  }
  render(){
    const { value,name,id,isChecked,containerClass,labelValue,labelClass,showLabel} = this.props;
    return (
      <div className={`checkbox-wrapper ${containerClass}`}>
        {showLabel && <Label value={labelValue} className={labelClass}/>}
        <input type="checkbox" id={id} onClick={this.handleClick} name={name} value={value} />
      </div>
    )
  }
}