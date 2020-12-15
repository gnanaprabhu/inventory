import React from 'react';
import {Label,Input} from '../../atoms'
import { Form } from '../../organisms/form';
import { DataGrid } from '../../organisms/datagrid';

const handleSearch =(event) => {
  console.log('search',event)
}
const renderAssetSearchbox = () => {
  return(
    <div className="asset-search-container">
      <Label className="asset-search-label" value="Search"/>
      <Input className="asset-search-box" name="asset-search-box" placeholder="Asset Classfication Name" onChange={handleSearch}/>
    </div>
  )
}
const renderAssetData = () => {
  return (
  <div className="asset-table-wrapper">
    {renderAssetSearchbox()}
    <DataGrid/>
  </div>
  )
}

const addAssetClassfication = () =>{
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
   },{
     element:'checkbox',
     value:'serialno',
     name:'serialno',
     isChecked:false
   },
   {
     element:'label',
     className:'serial-no-label',
     value:'Serial No',
   }];
   return (
     <div>
       {'AssetClassfication'}
       <Form formList={form}/>
       {renderAssetData()}
     </div>
   )
 }

export const AssetClassification = () =>{
  return addAssetClassfication();
}