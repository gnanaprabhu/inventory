import React from 'react';
import { Form } from '../../../organisms/form';
import { DataGrid } from '../../../organisms/datagrid';
import { Modal } from '../../../organisms/modal';
import { CardsGroup } from '../../../organisms/card/CardsGroup';
import { VendorHandler } from './VendorHandler';
import './Style.scss'

export class VendorMaster extends React.Component{
  state={
    showModal:false,
    contactPersonList:[],
    selectedPerson:{},
    isSubmitEnable: false,
  }
  constructor(props){
    super(props);
    this.vendorHandler = new VendorHandler(this); 
  }

  toggleModal = () => {
    const {showModal} = this.state;
    this.setState({
      showModal:!showModal,
    })
   }

  modalContent = () => {
    return(
    <Modal title="Vendor Detail" onToggle={this.toggleModal}>
      <div className='vendor-popup'>
        <Form formList={this.vendorHandler.getContactPersonForm()} onSubmit={this.vendorHandler.handleContactPersonDetail}/>
      </div>
    </Modal>
    );
  }

  renderModal = () => {
    const { showModal } =  this.state;
    return(
      <div className="vendor-modal-container">
        <div className="vendor-button-wrapper">
        <span>Add Vendor Detail</span>
        <button className="new-vendor-button"
          onClick={ () => {
            // this.setState({
            //   selectedPerson:{}
            // })
            this.toggleModal();
            }
          }>
            <span>+</span>
        </button>
        </div>
        {showModal && this.modalContent()}
      </div>
    );
  }
  renderNewOrderForm = () => {
    const formList = this.vendorHandler.getVendorForm();
    return ( 
        <div className='new-order-container'>
         <Form formList={formList} hideSubmit={true} hideReset={true}/>
       </div>
    );
   }
   renderAssetData = () => {
    const cols = this.vendorHandler.getColumns();
    const rows = this.vendorHandler.getRows();
    return (
      <>
        {this.renderModal()}
        <DataGrid cols={cols} rows={rows}/>
      </>
    )
  }
  allCardsData = () => {
    const data = [
      {
      children: this.renderNewOrderForm(),
      label: 'vendor-master',
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
    <>
    <div className="vendor-master-container">
        <div className="vendor-master-header-wrapper">
          <h2 className="header">Vendor Master</h2>
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
    </>
  );
  }
}