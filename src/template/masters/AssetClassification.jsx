import React from 'react';
import { Form } from '../../organisms/form';
import { DataGrid } from '../../organisms/datagrid';

export class AssetClassification extends React.Component{
  addAssetClassfication = () =>{
   const form =[{
      element:'label',
      className:'assest-classficaiton-label',
      value:'Assest Classfication Name',
    },{
      element:'input',
      type:'text',
      className:'assest-classfication-textbox',
      placeholder:'assest-classfication',
      name:'assest-classfication'
    }];
    return (
      <div>
        {'AssetClassfication'}
        <Form formList={form}/>
        <DataGrid/>
      </div>
    )
  }
  render(){
    console.log('asset');
    return this.addAssetClassfication();
  }
}