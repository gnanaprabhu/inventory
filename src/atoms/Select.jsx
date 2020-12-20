import React from 'react';
import { Label } from './Label';

export class Select extends React.Component {

  handleChange = (event) => {
    const { onChange } = this.props;
    onChange && onChange(event);
  }

  render() {
    const {containerClass,labelValue,labelClass,value,showLabel, option, name} = this.props;
    return (
      <div className={`select-box-wrapper ${containerClass}`}>
        {showLabel && <Label value={labelValue} className={labelClass}/>}
        <select name={name} value={value} onChange={this.handleChange}>
        {option.map((data, index) => {
          return <option key={index} selected = {data.value === value && 'selected'} value={data.value}>{data.name}</option>
        })};
        </select>
      </div>
    );
  }
}