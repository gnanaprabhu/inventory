import React from 'react';
import { DataGrid } from '../datagrid/DataGrid';
import { Form } from '../form/Form';
import { Modal } from '../modal/Modal';

export class GridWithForm extends React.Component{
  state={
    showModal:false,
  }

  toggleModal = () => {
    const {showModal} = this.state;
    this.setState({
      showModal:!showModal,
    })
   }

  modalContent = () => {
  const { formList,modalTitle, handleFormSubmit } = this.props;
  return(
  <Modal title={modalTitle} onToggle={this.toggleModal}>
    <div className='modal-container'>
      <Form formList={formList} onSubmit={handleFormSubmit}/>
    </div>
  </Modal>
  );
  }

  renderModal = () => {
    const { showModal,handleNewClick } =  this.state;
    const { title } = this.props;
    return(
      <div className="modal-container">
        <div className="button-wrapper">
        <span>{title}</span>
        <button className="description-button"
          onClick={ () => {
            this.toggleModal();
            handleNewClick();
            }
          }>
            <span>+</span>
        </button>
        </div>
        {showModal && this.modalContent()}
      </div>
    );
  }
  renderDataGrid =() =>{
    const {cols,rows} = this.props;
    return(
    <DataGrid cols={cols} rows={rows} handleRowClick={(params)=>{console.log('row==>',params)}}/>
    );
  }
  render(){
    return (
      <div>
        {this.renderModal()}
        {this.renderDataGrid()}
      </div>
    );
  }
}