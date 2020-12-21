import { DeleteIcon, EditIcon }  from '../../../icons';


export class ClientHandler {
  constructor(master){
    this.master = master;
  }
  handleContactPersonDetail = (formValues) => {
    const { descriptionList, selectedDescription } = this.master.state;
    if(selectedDescription.id){
       const assetDescriptionList =  descriptionList.map(item => {
        if(item.id === selectedDescription.id){
           for(const key in formValues){
             item[key] = formValues[key];
           }
        }
        return item;
       });
     this.master.setState({
       descriptionList:assetDescriptionList,
     },this.master.toggleModal());
    }else{
      this.master.setState({
        descriptionList:[...descriptionList,{id:descriptionList.length+1,...formValues}],
      },this.master.toggleModal());
    }
  }
  deleteContactPerson = (selectedIndex) => {
    const { descriptionList } = this.master.state;
    const newDescriptionList = [...descriptionList];
    newDescriptionList.splice(selectedIndex,1);
    this.master.setState({
      descriptionList:newDescriptionList,
    });
  }
  editContactPerson= (selectedIndex) => {
    const selectedDescription = this.getSelecedIndex(selectedIndex);
    this.master.setState({
      selectedDescription: selectedDescription,
    });
  }
  getSelecedIndex = (selectedIndex) => {
    const { descriptionList } = this.master.state;
    const selectedDescription = descriptionList[selectedIndex]; 
    return selectedDescription;
  }
  getClientForm = () => {
    const form =[
      {
       element:'input',
       showLabel:true,
       containerClass:'',
       labelValue:'Name',
       labelClass:'client-name-label',
       type:'text',
       className:'client-name-textbox',
       placeholder:'Name',
       name:'client-name'
     },{
      element:'input',
      showLabel:true,
      containerClass:'',
      labelValue:'Address',
      labelClass:'client-address-label',
      type:'text',
      className:'client-address-textbox',
      placeholder:'Address',
      name:'client-address'
    },
    {
      element:'input',
      showLabel:true,
      containerClass:'',
      labelValue:'Phone',
      labelClass:'client-phone-label',
      type:'text',
      className:'client-phone-textbox',
      placeholder:'Phone number',
      name:'client-phone'
    },
    {
      element:'input',
      showLabel:true,
      containerClass:'',
      labelValue:'TIN',
      labelClass:'client-tin-label',
      type:'text',
      className:'client-tin-textbox',
      placeholder:'TIN',
      name:'client-tin'
    },
    {
      element:'input',
      showLabel:true,
      containerClass:'',
      labelValue:'PAN',
      labelClass:'client-pan-label',
      type:'text',
      className:'client-pan-textbox',
      placeholder:'PAN',
      name:'client-pan'
    },
    {
      element:'input',
      showLabel:true,
      containerClass:'',
      labelValue:'Pincode',
      labelClass:'client-pincode-label',
      type:'text',
      className:'client-pincode-textbox',
      placeholder:'assest-classfication',
      name:'client-pincode'
    },
    {
      element:'input',
      showLabel:true,
      containerClass:'',
      labelValue:'GST',
      labelClass:'client-gst-label',
      type:'text',
      className:'client-gst-textbox',
      placeholder:'assest-classfication',
      name:'client-gst'
    },
    {
      element:'select',
      name:'client-reference',
      containerClass:'client-reference-container',
      showLabel:true,
      labelValue:'Client Ref',
      labelClass:'client-ref-label',
      value: '',
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
      labelClass:'client-remarks-label',
      type:'text',
      className:'client-remarks-textbox',
      placeholder:'Remarks',
      name:'client-remarks'
    },];
    return form;
  }

  getContactPersonForm = () => {
    const { selectedDescription } = this.master.state;
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
       value: selectedDescription['contact-person-name']|| '',
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
      value: selectedDescription['contact-person-designation']|| '',
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
      value: selectedDescription['contact-person-phone']|| '',
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
      value: selectedDescription['contact-person-email']|| '',
      name:'contact-person-email'
    },
    {
      element:'input',
      showLabel:true,
      containerClass:'',
      labelValue:'GST No',
      labelClass:'contact-person-gst-label',
      type:'text',
      className:'contact-person-gst-textbox',
      placeholder:'',
      value: selectedDescription['contact-person-gst']|| '',
      name:'contact-person-gst'
    },
    {
      element:'input',
      showLabel:true,
      containerClass:'',
      labelValue:'Service Tax',
      labelClass:'contact-person-st-label',
      type:'text',
      className:'contact-person-st-textbox',
      placeholder:'',
      value: selectedDescription['contact-person-st']|| '',
      name:'contact-person-st'
    },
    {
      element:'select',
      name:'contact-person-state',
      containerClass:'contact-person-state-container',
      showLabel:true,
      labelValue:'State',
      labelClass:'contact-person-state-label',
      value: selectedDescription['contact-person-state']|| '',
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
      element:'select',
      name:'contact-person-location',
      containerClass:'contact-person-location-container',
      showLabel:true,
      labelValue:'Location',
      labelClass:'contact-person-location-label',
      value: selectedDescription['contact-person-location']|| '',
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
  ];
    return form;
  }

  getRows = () => {
    const { descriptionList } = this.master.state;
    console.log('rows',descriptionList);
    return descriptionList;
  }
  getColumns = () => {
    const columns = [
      { field: 'contact-person-name', headerName: 'Contact Person', width: 150 },
      { field: 'contact-person-designation', headerName: 'Designation', width: 150 },
      { field: 'contact-person-phone', headerName:'Phone',width:150 },
      { field: 'contact-person-email', headerName: 'Email Id', width: 150 },
      { field: 'contact-person-gst', headerName:'GST No',width:150 },
      { field: 'contact-person-st', headerName: 'Service Tax', width: 150 },
      { field: 'contact-person-state', headerName:'State',width:150 },
      { field: 'contact-person-location', headerName:'Location',width:150 },
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
