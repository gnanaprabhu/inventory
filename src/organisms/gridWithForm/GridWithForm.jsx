import React from 'react';
import { DataGrid } from '../datagrid/DataGrid';
import { Form } from '../form/Form';
import { Modal } from '../modal/Modal';

export class GridWithForm extends React.Component{

  handleFormSubmit = (formValues) => {
    const { handleFormSubmit,handleToggleModal } = this.props;
    handleFormSubmit(formValues);
    handleToggleModal && handleToggleModal();
  }
  modalContent = () => {
  const { formList,modalTitle,handleToggleModal } = this.props;
  return(
  <Modal title={modalTitle} onToggle={handleToggleModal}>
    <div className='popup-modal-container'>
      <Form formList={formList} onSubmit={this.handleFormSubmit}/>
    </div>
  </Modal>
  );
  }

  renderModal = () => {
    // const { handleNewClick } =  this.state;
    const { title,showModal, handleToggleModal } = this.props;
    return(
      <div className="modal-container">
        <div className="button-wrapper">
        <span>{title}</span>
        <button className="description-button"
          onClick={ () => {
            handleToggleModal && handleToggleModal();
            // handleNewClick && handleNewClick();
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