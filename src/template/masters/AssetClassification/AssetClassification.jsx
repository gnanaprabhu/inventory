import React from 'react';
import {Input} from '../../../atoms'
import { Form } from '../../../organisms/form';
import { DataGrid } from '../../../organisms/datagrid';
import { CardsGroup } from '../../../organisms/card/CardsGroup';
import './Style.scss';
 export class AssetClassification extends React.Component{
  state={
    isSubmitEnable: false,
  }
    getNewForm = () => {
      const form =[
        {
          element:'input',
          showLabel:true,
          containerClass:'',
          labelValue:'Classfication Name',
          labelClass:'assest-classficaiton-label',
          type:'text',
          className:'assest-classfication-textbox',
          placeholder:'assest-classfication',
          name:'assest-classfication'
        },{
          element:'checkbox',
          value:'serialno',
          name:'serialno',
          isChecked:false,
          labelValue:'Serial No',
          labelClass:'serial-no-label',
          showLabel:true,
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
    handleSearch =(event) => {
      //console.log('search',event)
    }
    renderAssetSearchbox = () => {
      return(
        <div className="asset-search-container">
          <Input showLabel={true} labelValue="Search" labelClass="asset-search-label" className="asset-search-box" name="asset-search-box" placeholder="Asset Classfication Name" onChange={this.handleSearch}/>
        </div>
      )
    }
    renderAssetData = () => {
      return (
      <div className="asset-table-wrapper">
        {this.renderAssetSearchbox()}
        <DataGrid />
      </div>
      )
    }
     allCardsData = () => {
       const data = [
         {
         children: this.renderNewOrderForm(),
         label: 'assest-classfication',
         id:1,
      },
        {
         children: this.renderAssetData(),
         label: 'AssetData',
         id:2,
        customClasses: 'width-times-2'
      }
     
    ];
     return data;
     }
  render(){
    const { isSubmitEnable } =  this.state;
    return (
    <div className="assest-classfication-container">
      <div className="assest-header-wrapper">
        <h2 className="header">Asset Classification</h2>
        <button
            type="button"
            className={`outline save-button ${!isSubmitEnable && 'disabled'}`}
            onClick={()=>{
              console.log("form submit")
            }}
          >save</button>
      </div>
      <CardsGroup allCardsData={this.allCardsData()} />
     </div>
    );
  }
}