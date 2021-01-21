import React from 'react';
import { Select } from '../../atoms';
import { DataGrid } from '../../organisms/datagrid';
import { FloatingMenu } from '../../organisms/floatingMenu';
import { OrderHandler } from './OrderHandler';
import { CardsGroup } from '../../organisms/card/CardsGroup';
import './Style.scss'


export class OrderList extends React.Component {
  constructor(props){
    super(props);
    this.orderHandler =  new OrderHandler(this);
  }
  state ={
    orderList:[],
  }

  handleEditOrder = (params) => {
    const { history } = this.props;
    history && history.push(`/order-detail?editId=${params.row.id}`);
  }
  renderAssetData = () => {
    const cols = this.orderHandler.getOrderColumns();
    const rows = this.orderHandler.getOrderRows();
    return (
      <>
       <DataGrid cols={cols} rows={rows} handleRowClick={this.handleEditOrder}/>
      </>
    )
  }
  allCardsData = () => {
    const selectProps = {
      showLabel:true,
      labelValue:'Client Name',
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
    const data = [
      {
      children: <Select {...selectProps}/>,
      label: 'order list',
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

handleNewOrder = () => {
  const { history } = this.props;
  history && history.push('/order-detail');
}

  render(){
 
    return (
      <div className="order-list-container">
        <div className="order-list-wrapper">
          <h2 className="header">Client Order Detail</h2>
        </div>
        <CardsGroup allCardsData={this.allCardsData()} />
        <FloatingMenu handleClick={this.handleNewOrder}/>
      </div>
    )
  }
}