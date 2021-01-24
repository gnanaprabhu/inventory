import React from 'react';
import { Select } from '../../../atoms';
import { DataGrid } from '../../../organisms/datagrid';
import { FloatingMenu } from '../../../organisms/floatingMenu';
import { PurchaseHandler } from './PurchaseHandler';
import { CardsGroup } from '../../../organisms/card/CardsGroup';
import './Style.scss'


export class PurchaseList extends React.Component {
  constructor(props){
    super(props);
    this.purchaseHandler =  new PurchaseHandler(this);
  }
  state ={
    orderList:[],
  }

  handleEditOrder = (params) => {
    const { history } = this.props;
    history && history.push(`/asset-new-purchase?editId=${params.row.id}`);
  }
  renderAssetData = () => {
    const cols = this.purchaseHandler.getOrderColumns();
    const rows = this.purchaseHandler.getOrderRows();
    return (
      <>
       <DataGrid cols={cols} rows={rows} handleRowClick={this.handleEditOrder}/>
      </>
    )
  }
  allCardsData = () => {
    const selectProps = {
      showLabel:true,
      labelValue:'Vendor Name',
      labelClass:'search-order',
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
      label: 'purchase list',
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
  history && history.push('/asset-new-purchase');
}

  render(){
 
    return (
      <div className="order-list-container">
        <div className="order-list-wrapper">
          <h2 className="header">Purchase list</h2>
        </div>
        <CardsGroup allCardsData={this.allCardsData()} />
        <FloatingMenu handleClick={this.handleNewOrder}/>
      </div>
    )
  }
}