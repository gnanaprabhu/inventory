import React from 'react';
import { Select } from '../../../atoms';
import { Modal } from '../../../organisms/modal';
import { Form } from '../../../organisms/form';
import { DataGrid } from '../../../organisms/datagrid';
import { AssetDetails} from './AssetDetails';
import './Style.scss'


export class AssetDescription extends React.Component {
  constructor(props){
    super(props);
    this.assetDetails = new AssetDetails(this);
  }
  state ={
    showModal:false,
  }

  handleChange = () => {
    console.log('drop down changed');
  }

  toggleModal = () => {
   const {showModal} = this.state;
   this.setState({
     showModal:!showModal,
   })
  }

  handleFormSubmit = (formValues) =>{
    console.log(formValues);
  }

  modalContent = () => {
    return(
    <Modal title="Assest Description" onToggle={this.toggleModal}>
      <div className='assest-popup'>
        <Form formList={this.assetDetails.getAssetDescriptionForm()}/>
      </div>
    </Modal>
    );
  }

  renderModal = () => {
    const { showModal } =  this.state;
    return(
      <div className="description-modal-container">
        <div className="description-button-wrapper">
        <span>Add Description</span>
        <button className="description-button"
          onClick={this.toggleModal}>
            <span>+</span>
        </button>
        </div>
        {showModal && this.modalContent()}
      </div>
    );
  }
  renderGrid = () => {
    
  }

  render(){
    const cols = this.assetDetails.getAssetColumns();
    const rows = this.assetDetails.getAssetRows();

    const selectProps = {
      showLabel:true,
      labelValue:'Asset Classificaiton',
      labelClass:'asset-classification',
      onChange:this.handleChange,
      option: [
        {
          name:'test0',
          value:'test'
        },{
          name:'test1',
          value:'test1'
        },{
          name:'test2',
          value:'test2'
        },
      ]
    }
    return(
      <div className="assest-description-container">
        <h2 className="header">Asset Description Master</h2>
        <Select {...selectProps}/>
        {this.renderModal()}
        <DataGrid cols={cols} rows={rows}/>
      </div>
    )
  }
}