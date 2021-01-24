import React from 'react';
import { CardsGroup } from '../../../organisms/card/CardsGroup';
import { Form } from '../../../organisms/form'
import { GridWithForm } from '../../../organisms/gridWithForm/GridWithForm';
import { DeleteIcon, EditIcon }  from '../../../icons';
import './Style.scss'

export class PurchaseInward extends React.Component{

  state={
    descriptionList:[],
    selectedDescription:{},
    showModal:false,
    isSubmitEnable:false,
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
      { field: 'inward-asset', headerName: 'Asset', width: 75 },
      { field: 'inward-brand', headerName: 'Brand', width: 75 },
      { field: 'inward-model', headerName:'Asset Model',width:75 },
      { field: 'inward-serial-no', headerName:'Serial NO',width:75 },
      { field: 'inward-description', headerName:'Description',width:75 },
      { field: 'inward-qty', headerName:'Qty',width:75 },
      { field: 'inward-price', headerName:'Price',width:75 },
      { field: 'inward-product-key', headerName:'Product Key',width:75 },
      { field: 'inward-processor', headerName:'Processor',width:75 },
      { field: 'inward-gen', headerName:'GEN',width:75 },
      { field: 'inward-core', headerName:'Core',width:75 },
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
        labelValue:'Inward Asset',
        labelClass:'inward-asset-label',
        type:'text',
        className:'inward-asset-value',
        placeholder:'',
        name:'inward-asset',
        value: '',
      },
      {
       element:'input',
       showLabel:true,
       containerClass:'',
       labelValue:'Brand',
       labelClass:'inward-brand-label',
       type:'text',
       className:'inward-brand-value',
       placeholder:'',
       name:'inward-brand',
       value: '',
     },{
      element:'input',
      showLabel:true,
      containerClass:'',
      labelValue:'Asset Model',
      labelClass:'inward-model-label',
      type:'text',
      className:'inward-model-value',
      placeholder:'',
      name:'inward-model',
      value: '',
    },{
      element:'input',
      showLabel:true,
      containerClass:'',
      labelValue:'Serial NO',
      labelClass:'inward-serial-no-label',
      type:'text',
      className:'inward-serial-no-value',
      placeholder:'',
      name:'inward-serial-no',
      value:  '',
    },
    {
      element:'input',
      showLabel:true,
      containerClass:'',
      labelValue:'Description',
      labelClass:'inward-description-label',
      type:'text',
      className:'inward-description-value',
      placeholder:'',
      name:'inward-description',
      value:  '',
    },
    {
      element:'input',
      showLabel:true,
      containerClass:'',
      labelValue:'QTY',
      labelClass:'inward-qty-label',
      type:'text',
      className:'inward-qty-value',
      placeholder:'',
      name:'inward-qty',
      value:  '',
    },
    {
      element:'input',
      showLabel:true,
      containerClass:'',
      labelValue:'Price',
      labelClass:'inward-price-label',
      type:'text',
      className:'inward-price-value',
      placeholder:'',
      name:'inward-price',
      value:  '',
    },
    {
      element:'input',
      showLabel:true,
      containerClass:'',
      labelValue:'Product Key',
      labelClass:'inward-product-key-label',
      type:'text',
      className:'inward-product-key-value',
      placeholder:'',
      name:'inward-product-key',
      value:  '',
    },
    {
      element:'input',
      showLabel:true,
      containerClass:'',
      labelValue:'Processor',
      labelClass:'inward-processor-label',
      type:'text',
      className:'inward-processor-value',
      placeholder:'',
      name:'inward-processor',
      value:  '',
    },
    {
      element:'input',
      showLabel:true,
      containerClass:'',
      labelValue:'GEN',
      labelClass:'inward-gen-label',
      type:'text',
      className:'inward-gen-value',
      placeholder:'',
      name:'inward-gen',
      value:  '',
    },
    {
      element:'input',
      showLabel:true,
      containerClass:'',
      labelValue:'Core',
      labelClass:'inward-core-label',
      type:'text',
      className:'inward-core-value',
      placeholder:'',
      name:'inward-core',
      value:  '',
    },
  ];
    return form;
  }

  getNewOrderForm = () => {
    // const { selectedDescription } = this.master.state;
    const form =[
      {
        element:'input',
        showLabel:true,
        containerClass:'',
        labelValue:'Purchase InvoiceNo',
        labelClass:'InvoiceNo-no-label',
        type:'text',
        className:'InvoiceNo-no-value',
        placeholder:'',
        name:'InvoiceNo-no',
        value: '',
      },
      {
        element:'select',
        name:'purchase-office',
        containerClass:'purchase-Office-container',
        showLabel:true,
        labelValue:'Purchase Office',
        labelClass:'purchase-office-label',
        value:  '',
        option: [
          {
            name:'test',
            value:'test'
          },
          {
            name:'test1',
            value:'test1'
          },{
            name:'test2',
            value:'test2'
          },
        ],
      },
      {
        element:'select',
        name:'stock',
        containerClass:'stock-container',
        showLabel:true,
        labelValue:'Stock',
        labelClass:'stock-label',
        value:  '',
        option: [
          {
            name:'test',
            value:'test'
          },
          {
            name:'test1',
            value:'test1'
          },{
            name:'test2',
            value:'test2'
          },
        ],
      },
      {
        element:'select',
        name:'purchase-date',
        containerClass:'purchase-data-container',
        showLabel:true,
        labelValue:'Purchase Date',
        labelClass:'purchase-date-label',
        value:  '',
        option: [
          {
            name:'test',
            value:'test'
          },
          {
            name:'test1',
            value:'test1'
          },{
            name:'test2',
            value:'test2'
          },
        ],
      },
      {
        element:'select',
        name:'vendor-name',
        containerClass:'vendor-name-container',
        showLabel:true,
        labelValue:'Vendor Name',
        labelClass:'vendor-name-label',
        value:  '',
        option: [
          {
            name:'test',
            value:'test'
          },
          {
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
       labelValue:'Qty',
       labelClass:'qty-label',
       type:'text',
       className:'Qty-value',
       placeholder:'',
       name:'purchase-qty',
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
      labelValue:'Vendor Address',
      labelClass:'vendor-address-label',
      type:'text',
      className:'vendor-address-value',
      placeholder:'',
      name:'vendor-address',
      value:  '',
    }];
    return form;
  };

  renderNewOrderForm = () => {
   return( <div className='new-inward-container'>
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
    title="Add Inward" 
    handleFormSubmit={this.handleFormSubmit} 
    formList={this.getNewOrderDescriptionForm()} 
    cols={this.getDescriptionColumns()} 
    rows={this.getDescriptionRows()}
    handleToggleModal={this.toggleModal}
    />,
    label: 'sample',
    id:2,
    customClasses: 'width-times-2'

  }];
  return data;
  }
  render(){
    const { isSubmitEnable } = this.state;
    return (
      <div className="purchase-inward-container">
        <div className="purchase-inward-wrapper">
          <h2 className="header">Purchase Inward</h2>
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
    )
  }
}