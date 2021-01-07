import React from 'react';
import { Form } from '../../../organisms/form';
import { CardsGroup } from '../../../organisms/card/CardsGroup';
import './Style.scss';
export class BrandMaster extends React.Component{
  getNewForm = () => {
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
      }
    ];
    return form;
  };
  renderNewOrderForm = () => {
    return( <div className='new-order-container'>
         <Form formList={this.getNewForm()}/>
       </div>
    );
   }
  allCardsData = () => {
    const data = [
      {
      children: this.renderNewOrderForm(),
      label: 'BrandMaster',
      id:1,
   }];
  return data;
  }

  render(){
    return (
      <div className="brand-master-container">
      <h2 className="header">Brand Master</h2>
        <CardsGroup allCardsData={this.allCardsData()} />
     </div>
    );
  }
}