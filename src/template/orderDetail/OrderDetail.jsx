import React from 'react';
import { CardsGroup } from '../../organisms/card/CardsGroup';
import { Form } from '../../organisms/form'
import { GridWithForm } from '../../organisms/gridWithForm/GridWithForm';
import { DeleteIcon, EditIcon }  from '../../icons';

export class OrderDetail extends React.Component{

  state={
    descriptionList:[],
    selectedDescription:{},
    showModal:false,
  }

  toggleModal = () => {
    const {showModal} = this.state;
    this.setState({
      showModal:!showModal,
    })
   }
  
  getDescriptionRows = () => {
    const { descriptionList } = this.state;
    return descriptionList;
  }

  deleteDescription = (selectedIndex) => {
    const { descriptionList } = this.state;
    const newDescriptionList = [...descriptionList];
    newDescriptionList.splice(selectedIndex,1);
    this.setState({
      descriptionList:newDescriptionList,
    });
  }
  getSelecedDescriptionIndex = (selectedIndex) => {
    const { descriptionList } = this.state;
    const selectedDescription = descriptionList[selectedIndex]; 
    return selectedDescription;
  }
  editDescription= (selectedIndex) => {
    const selectedDescription = this.getSelecedDescriptionIndex(selectedIndex);
    this.setState({
      selectedDescription: selectedDescription,
    });
  }

  handleFormSubmit = (formValues) =>{
    const { descriptionList, selectedDescription } = this.state;
    if(selectedDescription.id){
       const assetDescriptionList =  descriptionList.map(item => {
        if(item.id === selectedDescription.id){
           for(const key in formValues){
             item[key] = formValues[key];
           }
        }
        return item;
       });
     this.setState({
       descriptionList:assetDescriptionList,
     });
    }else{
      this.setState({
        descriptionList:[...descriptionList,{id:descriptionList.length+1,...formValues}],
      });
    }
  }

  getDescriptionColumns = () => {
    const columns = [
      { field: 'item-description', headerName: 'Description', width: 150 },
      { field: 'order-qty', headerName: 'Qty', width: 150 },
      { field: 'order-new-qty', headerName:'New Qty',width:150 },
      { field: 'order-rate', headerName:'Rate',width:150 },
      { field: 'order-total-amount', headerName:'Total Amount',width:150 },
      {
        field: "edit",
        headerName: "Edit",
        sortable: false,
        width: 100,
        disableClickEventBubbling: true,
        renderCell: (params) => {
          const onClick = () => {
            console.log('edit clicked');
            this.editDescription(params.rowIndex);
            
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
            console.log('delete clicked');
            this.deleteDescription(params.rowIndex);
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

  getNewOrderDescriptionForm = () => {
    const form =[
      {
        element:'input',
        showLabel:true,
        containerClass:'',
        labelValue:'Item Description',
        labelClass:'item-description-label',
        type:'text',
        className:'item-description-value',
        placeholder:'',
        name:'item-description',
        value: '',
      },
      {
       element:'input',
       showLabel:true,
       containerClass:'',
       labelValue:'Order Qty',
       labelClass:'order-qty-label',
       type:'text',
       className:'order-qty-value',
       placeholder:'',
       name:'order-qty',
       value: '',
     },{
      element:'input',
      showLabel:true,
      containerClass:'',
      labelValue:'New Qty',
      labelClass:'order-new-qty-label',
      type:'text',
      className:'order-new-qty-value',
      placeholder:'',
      name:'order-new-qty',
      value: '',
    },{
      element:'input',
      showLabel:true,
      containerClass:'',
      labelValue:'Rate',
      labelClass:'order-rate-label',
      type:'text',
      className:'order-rate-value',
      placeholder:'',
      name:'order-rate',
      value:  '',
    },
    {
      element:'input',
      showLabel:true,
      containerClass:'',
      labelValue:'Total Amount',
      labelClass:'order-total-amount-label',
      type:'text',
      className:'order-total-amount-value',
      placeholder:'',
      name:'order-total-amount',
      value:  '',
    }];
    return form;
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
    const { showModal } = this.state;
    const data = [{
      children: this.renderNewOrderForm(),
      label: 'New Order',
      id:1,
  },{
    children: <GridWithForm 
    showModal={showModal} 
    title="Add Order Description" 
    handleFormSubmit={this.handleFormSubmit} 
    formList={this.getNewOrderDescriptionForm()} 
    cols={this.getDescriptionColumns()} 
    rows={this.getDescriptionRows()}
    handleToggleModal={this.toggleModal}
    />,
    label: 'sample',
    id:2,
  }];
  return data;
  }
  render(){
    return <CardsGroup allCardsData={this.allCardsData()} />
  }
}