import React from 'react';
import { Form } from '../../../organisms/form';
import './Style.scss';

const addBrandName = () =>{
  const form =[
   {
    element:'input',
    showLabel:true,
    containerClass:'',
    labelValue:'Brand Name',
    labelClass:'brand-label',
    type:'text',
    className:'add-brand-textbox',
    placeholder:'Brand Name',
    name:'brand-name'
  }];
  return (
    <div className="brand-master-container">
      <h2 className="header">Brand Master</h2>
      <Form formList={form}/>
    </div>
  )
}

export const BrandMaster = () =>{
 return addBrandName();
}