import { DeleteIcon, EditIcon }  from '../../../icons';


export class VendorHandler {
  constructor(master){
    this.master = master;
  }
  handleContactPersonDetail = (formValues) => {
    const { contactPersonList, selectedPerson } = this.master.state;
    if(selectedPerson.id){
       const updatedContactPersonList =  contactPersonList.map(item => {
        if(item.id === selectedPerson.id){
           for(const key in formValues){
             item[key] = formValues[key];
           }
        }
        return item;
       });
     this.master.setState({
       contactPersonList:updatedContactPersonList,
     },this.master.toggleModal());
    }else{
      this.master.setState({
        contactPersonList:[...contactPersonList,{id:contactPersonList.length+1,...formValues}],
      },this.master.toggleModal());
    }
  }
  deleteContactPerson = (selectedIndex) => {
    const { contactPersonList } = this.master.state;
    const newDescriptionList = [...contactPersonList];
    newDescriptionList.splice(selectedIndex,1);
    this.master.setState({
      contactPersonList:newDescriptionList,
    });
  }
  editContactPerson= (selectedIndex) => {
    const selectedPerson = this.getSelecedIndex(selectedIndex);
    this.master.setState({
      selectedPerson: selectedPerson,
    });
  }
  getSelecedIndex = (selectedIndex) => {
    const { contactPersonList } = this.master.state;
    const selectedPerson = contactPersonList[selectedIndex]; 
    return selectedPerson;
  }
  getVendorForm = () => {
    const form =[
      {
       element:'input',
       showLabel:true,
       containerClass:'',
       labelValue:'Vendor Name',
       labelClass:'vendor-name-label',
       type:'text',
       className:'vendor-name-textbox',
       placeholder:'',
       name:'vendor-name'
     },{
      element:'input',
      showLabel:true,
      containerClass:'',
      labelValue:'Address',
      labelClass:'vendor-address-label',
      type:'text',
      className:'vendor-address-textbox',
      placeholder:'',
      name:'vendor-address'
    },
    {
      element:'input',
      showLabel:true,
      containerClass:'',
      labelValue:'Phone',
      labelClass:'vendor-phone-label',
      type:'text',
      className:'vendor-phone-textbox',
      placeholder:'',
      name:'vendor-phone'
    },
    {
      element:'input',
      showLabel:true,
      containerClass:'',
      labelValue:'Email',
      labelClass:'vendor-email-label',
      type:'text',
      className:'vendor-email-textbox',
      placeholder:'',
      name:'vendor-email'
    },
    {
      element:'input',
      showLabel:true,
      containerClass:'',
      labelValue:'TIN',
      labelClass:'vendor-tin-label',
      type:'text',
      className:'vendor-tin-textbox',
      placeholder:'',
      name:'vendor-tin'
    },
    {
      element:'input',
      showLabel:true,
      containerClass:'',
      labelValue:'Pincode',
      labelClass:'vendor-pincode-label',
      type:'text',
      className:'vendor-pincode-textbox',
      placeholder:'',
      name:'vendor-pincode'
    },
    {
      element:'input',
      showLabel:true,
      containerClass:'',
      labelValue:'GST',
      labelClass:'vendor-gst-label',
      type:'text',
      className:'vendor-gst-textbox',
      placeholder:'',
      name:'vendor-gst'
    },
    {
      element:'input',
      showLabel:true,
      containerClass:'',
      labelValue:'Fax',
      labelClass:'vendor-fax-label',
      type:'text',
      className:'vendor-fax-textbox',
      placeholder:'',
      name:'vendor-fax'
    },
    {
      element:'input',
      showLabel:true,
      containerClass:'',
      labelValue:'Website',
      labelClass:'vendor-website-label',
      type:'text',
      className:'vendor-website-textbox',
      placeholder:'',
      name:'vendor-website'
    },
    {
      element:'input',
      showLabel:true,
      containerClass:'',
      labelValue:'CST',
      labelClass:'vendor-cst-label',
      type:'text',
      className:'vendor-cst-textbox',
      placeholder:'',
      name:'vendor-cst'
    }];
    return form;
  }

  getContactPersonForm = () => {
    const { selectedPerson } = this.master.state;
    const form =[
      {
       element:'input',
       showLabel:true,
       containerClass:'',
       labelValue:'Contact Person',
       labelClass:'contact-person-name-label',
       type:'text',
       className:'contact-person-name-textbox',
       placeholder:'',
       value: selectedPerson['contact-person-name']|| '',
       name:'contact-person-name'
     },{
      element:'input',
      showLabel:true,
      containerClass:'',
      labelValue:'Designation',
      labelClass:'contact-person-designation-label',
      type:'text',
      className:'contact-person-designation-textbox',
      placeholder:'',
      value: selectedPerson['contact-person-designation']|| '',
      name:'contact-person-designation'
    },
    {
      element:'input',
      showLabel:true,
      containerClass:'',
      labelValue:'Phone',
      labelClass:'contact-person-phone-label',
      type:'text',
      className:'contact-person-phone-textbox',
      placeholder:'',
      value: selectedPerson['contact-person-phone']|| '',
      name:'contact-person-phone'
    },
    {
      element:'input',
      showLabel:true,
      containerClass:'',
      labelValue:'Email-Id',
      labelClass:'contact-person-email-label',
      type:'text',
      className:'contact-person-email-textbox',
      placeholder:'',
      value: selectedPerson['contact-person-email']|| '',
      name:'contact-person-email'
    },
  ];
    return form;
  }

  getRows = () => {
    const { contactPersonList } = this.master.state;
    console.log('rows',contactPersonList);
    return contactPersonList;
  }
  getColumns = () => {
    const columns = [
      { field: 'contact-person-name', headerName: 'Contact Person', width: 150 },
      { field: 'contact-person-designation', headerName: 'Designation', width: 150 },
      { field: 'contact-person-phone', headerName:'Phone',width:150 },
      { field: 'contact-person-email', headerName: 'Email Id', width: 150 },
      {
        field: "edit",
        headerName: "Edit",
        sortable: false,
        width: 100,
        disableClickEventBubbling: true,
        renderCell: (params) => {
          const onClick = () => {
            this.editContactPerson(params.rowIndex);
            this.master.setState({
              showModal:true,
            })
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
            this.deleteContactPerson(params.rowIndex);
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
}
