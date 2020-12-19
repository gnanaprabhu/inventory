import { DeleteIcon, EditIcon }  from '../../../icons';


export class AssetDetails {
  constructor(master){
    this.master = master;
  }
  handleBrandSelect = () => {

  }
  getAssetDescriptionForm = () => {
    const form =[
      {
        element:'select',
        containerClass:'brand-list-container',
        onChange:this.handleChange,
        showLabel:true,
        labelValue:'Brand',
        labelClass:'asset-brand-label',
        option: [
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
       labelValue:'Asset Modal No',
       labelClass:'asset-modal-label',
       type:'text',
       className:'asset-modal-no-value',
       placeholder:'Asset Modal',
       name:'asset-modal-no'
     },{
      element:'input',
      showLabel:true,
      containerClass:'',
      labelValue:'Asset Description',
      labelClass:'asset-description-label',
      type:'text',
      className:'asset-description-value',
      placeholder:'Asset Modal',
      name:'asset-description-value'
    }];
    return form;
  }
  getAssetRows = () => {
    const rows = [
      { id: 1, col1: 'dell', col2: 'dell09', col3:'taptop' },
      { id: 2, col1: 'hp', col2: 'hp123', col3:'taptop' },
    ];
    return rows;
  }
  getAssetColumns = () => {
    const columns = [
      { field: 'col1', headerName: 'Brand', width: 150 },
      { field: 'col2', headerName: 'Asset model No', width: 150 },
      { field: 'col3', headerName:'Asset description',width:150 },
      {
        field: "col4",
        headerName: "Edit",
        sortable: false,
        width: 100,
        disableClickEventBubbling: true,
        renderCell: (params) => {
          const onClick = () => {
            console.log('table inxed', params.rowIndex);
            this.master.setState({
              showModal:true,
            })
          };
    
          return (
          <div onClick={onClick}>
             <EditIcon />
          </div>
          );
        }
      },
      {
        field: "col5",
        headerName: "Delete",
        sortable: false,
        width: 100,
        disableClickEventBubbling: true,
        renderCell: (params) => {
          const onClick = (params) => {
              console.log('params',params);
          };
    
          return (
            <div onClick={onClick}>
               <DeleteIcon />
            </div>
            );
        }
      },
    ];
    return columns;
  }
}
