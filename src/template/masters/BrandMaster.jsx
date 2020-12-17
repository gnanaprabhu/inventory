import React from 'react';
import { Form } from '../../organisms/form';

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
    <div>
      {'Brand Master'}
      <Form formList={form}/>
    </div>
  )
}

export const BrandMaster = () =>{
 return addBrandName();
}