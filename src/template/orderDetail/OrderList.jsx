import React from 'react';
import { Select } from '../../atoms';
import { DataGrid } from '../../organisms/datagrid';
import { OrderHandler } from './OrderHandler';


export class OrderList extends React.Component {
  constructor(props){
    super(props);
    this.orderHandler =  new OrderHandler(this);
  }
  state ={
    orderList:[],
  }

  render(){
    const cols = this.orderHandler.getOrderColumns();
    const rows = this.orderHandler.getOrderRows();

    const selectProps = {
      showLabel:true,
      labelValue:'Search Order',
      labelClass:'searc-order',
      onChange:this.handleChange,
      option: [
        {
          name:'any',
          value:'test'
        },{
          name:'sample1',
          value:'test1'
        },{
          name:'sample2',
          value:'test2'
        },
      ]
    }
    return(
      <div className="assest-description-container">
        <div className="assest-header-wrapper">
          <h2 className="header">Client Order Detail</h2>
        </div>
        <Select {...selectProps}/>
        <DataGrid cols={cols} rows={rows} handleRowClick={(params)=>{console.log('row==>',params)}}/>
      </div>
    )
  }
}