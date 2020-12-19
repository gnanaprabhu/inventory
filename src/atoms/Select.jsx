import React from 'react';
import { Label } from './Label';

export class Select extends React.Component {

  handleChange = (event) => {
    console.log('select',event.target.value);
    const { onChange } = this.props;
    console.log('onchange',this.props);
    onChange && onChange(event);
  }

  render() {
    const {containerClass,labelValue,labelClass,value,showLabel, option, name} = this.props;
    return (
      <div className={`select-box-wrapper ${containerClass}`}>
        {showLabel && <Label value={labelValue} className={labelClass}/>}
        <select name={name} value={value} onChange={this.handleChange}>
        {option.map((data, index) => {
          return <option key={index} value={data.value}>{data.name}</option>
        })};
        </select>
      </div>
    );
  }
}