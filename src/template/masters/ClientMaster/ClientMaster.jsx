import React from 'react';
import { Form } from '../../../organisms/form';
import { DataGrid } from '../../../organisms/datagrid';
import { Modal } from '../../../organisms/modal';
import { ClientHandler } from './ClientHandler';
import './Style.scss'

export class ClientMaster extends React.Component{
  state={
    showModal:false,
    descriptionList:[],
    selectedDescription:{},
    isSubmitEnable: false,
  }
  constructor(props){
    super(props);
    this.clientHandler = new ClientHandler(this); 
  }

  toggleModal = () => {
    const {showModal} = this.state;
    this.setState({
      showModal:!showModal,
    })
   }

  modalContent = () => {
    return(
    <Modal title="Client Detail" onToggle={this.toggleModal}>
      <div className='client-popup'>
        <Form formList={this.clientHandler.getContactPersonForm()} onSubmit={this.clientHandler.handleContactPersonDetail}/>
      </div>
    </Modal>
    );
  }

  renderModal = () => {
    const { showModal } =  this.state;
    return(
      <div className="client-modal-container">
        <div className="client-button-wrapper">
        <span>Add Client Detail</span>
        <button className="new-client-button"
          onClick={ () => {
            // this.setState({
            //   selectedDescription:{}
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

  render(){
    const formList = this.clientHandler.getClientForm();
    const cols = this.clientHandler.getColumns();
    const rows = this.clientHandler.getRows();
    const { isSubmitEnable } = this.state;
  return (
    <div className="client-master-container">
        <div className="client-master-header-wrapper">
          <h2 className="header">Client Master</h2>
          <button
            type="button"
            className={`outline save-button ${!isSubmitEnable && 'disabled'}`}
            onClick={()=>{
              console.log("form submit")
            }}
          >save</button>
        </div>
      <Form formList={formList} hideSubmit={true} hideReset={true}/>
      {this.renderModal()}
      <DataGrid cols={cols} rows={rows}/>
    </div> 
  );
  }
}