import React from 'react';
import { Label } from './Label';

export class Select extends React.Component {

  handleChange = (event) => {
    const {onChange} = this.props;
    onChange && onChange(event);
  }

  render() {
    const {containerClass,labelValue,labelClass,value,showLabel, option} = this.props;
    return (
      <div className={`select-box-wrapper ${containerClass}`}>
        {showLabel && <Label value={labelValue} className={labelClass}/>}
        <select value={value} onChange={this.handleChange}>
        {option.map((data, index) => {
          return <option key={index} value={data.value}>{data.name}</option>
        })};
        </select>
      </div>
    );
  }
}