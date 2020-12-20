import { DeleteIcon, EditIcon }  from '../../../icons';


export class AssetDetails {
  constructor(master){
    this.master = master;
  }
  handleBrandSelect = () => {

  }
  getSelectedDescription = (selectedIndex) => {
    const { descriptionList } = this.master.state;
    const selectedDescription = descriptionList[selectedIndex];
    this.master.setState({
      selectedDescription: selectedDescription,
    });
  }
  getAssetDescriptionForm = () => {
    const { selectedDescription } = this.master.state;
    const form =[
      {
        element:'select',
        name:'brand',
        containerClass:'brand-list-container',
        showLabel:true,
        labelValue:'Brand',
        labelClass:'asset-brand-label',
        value: selectedDescription['brand']|| '',
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
       labelValue:'Asset Modal No',
       labelClass:'asset-modal-label',
       type:'text',
       className:'asset-modal-no-value',
       placeholder:'Asset Modal',
       name:'asset-modal-no',
       value:selectedDescription['asset-modal-no'] || '',
     },{
      element:'input',
      showLabel:true,
      containerClass:'',
      labelValue:'Asset Description',
      labelClass:'asset-description-label',
      type:'text',
      className:'asset-description-value',
      placeholder:'Asset Modal',
      name:'asset-description',
      value: selectedDescription['asset-description'] || '',
    }];
    return form;
  }

  getAssetRows = () => {
    const { descriptionList } = this.master.state;
    return descriptionList;
  }
  getAssetColumns = () => {
    const columns = [
      { field: 'brand', headerName: 'Brand', width: 150 },
      { field: 'asset-modal-no', headerName: 'Asset model No', width: 150 },
      { field: 'asset-description', headerName:'Asset description',width:150 },
      {
        field: "col4",
        headerName: "Edit",
        sortable: false,
        width: 100,
        disableClickEventBubbling: true,
        renderCell: (params) => {
          const onClick = () => {
            this.getSelectedDescription(params.rowIndex);
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
        field: "col5",
        headerName: "Delete",
        sortable: false,
        width: 100,
        disableClickEventBubbling: true,
        renderCell: (params) => {
          const onClick = () => {
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
}
