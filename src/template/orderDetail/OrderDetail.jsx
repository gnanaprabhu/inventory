import React from 'react';
import { CardsGroup } from '../../organisms/card/CardsGroup';
import { Form } from '../../organisms/form'
import { GridWithForm } from '../../organisms/gridWithForm/GridWithForm';
import { DeleteIcon, EditIcon }  from '../../icons';

export class OrderDetail extends React.Component{
  
  getDescriptionRows = () => {
    // const { descriptionList } = this.master.state;
    // return descriptionList;
    return [];
  }
  getDescriptionColumns = () => {
    const columns = [
      { field: 'brand', headerName: 'Brand', width: 150 },
      { field: 'asset-modal-no', headerName: 'Asset model No', width: 150 },
      { field: 'asset-description', headerName:'Asset description',width:150 },
      {
        field: "edit",
        headerName: "Edit",
        sortable: false,
        width: 100,
        disableClickEventBubbling: true,
        renderCell: (params) => {
          const onClick = () => {
            // this.editDescription(params.rowIndex);
            // this.master.setState({
            //   showModal:true,
            // })
          };
    
          return (
          <div className={'form-icon'} onClick={onClick}>
             <EditIcon />
          </div>
          );
        }
      },
      {
        field: "delete",
        headerName: "Delete",
        sortable: false,
        width: 100,
        disableClickEventBubbling: true,
        renderCell: (params) => {
          const onClick = () => {
            // this.deleteDescription(params.rowIndex);
            //console.log('table inxed', params.rowIndex);
          };
    
          return (
            <div className={'form-icon'} onClick={onClick}>
               <DeleteIcon />
            </div>
            );
        }
      },
    ];
    return columns;
  }

  getNewOrderForm = () => {
    // const { selectedDescription } = this.master.state;
    const form =[
      {
        element:'input',
        showLabel:true,
        containerClass:'',
        labelValue:'Order No',
        labelClass:'order-no-label',
        type:'text',
        className:'order-no-value',
        placeholder:'',
        name:'order-no',
        value: '',
      },
      {
        element:'select',
        name:'client-name',
        containerClass:'brand-list-container',
        showLabel:true,
        labelValue:'Client Name',
        labelClass:'client-name-label',
        value:  '',
        option: [
          {
            name:'select the brand',
            value:'select the brand'
          },
          {
            name:'Lenovo',
            value:'Lenovo'
          },{
            name:'test1',
            value:'test1'
          },{
            name:'test2',
            value:'test2'
          },
        ],
      },
      {
       element:'input',
       showLabel:true,
       containerClass:'',
       labelValue:'Remarks',
       labelClass:'order-remarks-label',
       type:'text',
       className:'order-remarks-value',
       placeholder:'',
       name:'order-remarks',
       value: '',
     },{
      element:'input',
      showLabel:true,
      containerClass:'',
      labelValue:'Order Date',
      labelClass:'order-date-label',
      type:'text',
      className:'order-date-value',
      placeholder:'',
      name:'order-date',
      value: '',
    },{
      element:'input',
      showLabel:true,
      containerClass:'',
      labelValue:'Address',
      labelClass:'order-address-label',
      type:'text',
      className:'order-address-value',
      placeholder:'',
      name:'order-address',
      value:  '',
    }];
    return form;
  };

  renderNewOrderForm = () => {
   return( <div className='new-order-container'>
        <Form formList={this.getNewOrderForm()} onSubmit={()=>{}}/>
      </div>
   );
  }
  allCardsData = () => {
    const data = [{
      children: this.renderNewOrderForm(),
      label: 'New Order',
      id:1,
  },{
    children: <GridWithForm title="Add Order Description" cols={this.getDescriptionColumns()} rows={this.getDescriptionRows()}/>,
    label: 'sample',
    id:2,
  }];
  return data;
  }
  render(){
    return <CardsGroup allCardsData={this.allCardsData()} />
  }
}