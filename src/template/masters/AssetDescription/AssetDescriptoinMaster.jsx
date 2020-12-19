import React from 'react';
import { Select } from '../../../atoms';
import { Modal } from '../../../organisms/modal';


export class AssetDescription extends React.Component {
  state ={
    showModal:false,
  }
  handleChange = (event) => {
    console.log(event);
  }

  toggleModal = () => {
    
   const {showModal} = this.state;
   console.log('tooge',showModal);
   this.setState({
     showModal:!showModal,
   })
  }

  modalContent = () => {
    return(
    <Modal>
        <div className="modal-header">
          <div className="title">Heading</div>
          <button className="modal-close"
          onClick={this.toggleModal}>
            <span>X</span>
          </button>
        </div>
        <p>Lorem ipsum </p>
      </Modal>
    );
  }

  renderModal = () => {
    const { showModal } =  this.state;
    return(
      <div className="description-modal-container">
        <div onClick={this.toggleModal}>Add Description</div>
        {showModal && this.modalContent()}
      </div>
    );
  }

  render(){
    console.log('rerender');
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
      </div>
    )
  }
}