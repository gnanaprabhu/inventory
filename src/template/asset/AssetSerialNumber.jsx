

import { Form } from '../../organisms/form';
import { CardsGroup } from '../../organisms/card/CardsGroup';
import { DataGrid } from '../../organisms/datagrid';

export const AssetSerialNumber = () => {

 const renderAssetData =() => {
    const columns = [
      { field: 'asset-brand', headerName: 'Asset Brand', width: 150 },
      { field: 'asset-modal', headerName: 'Asset Modal', width: 150 },
      { field: 'asset-description', headerName:'Description',width:150 },
    ];
    return <DataGrid cols={columns} rows={[]} handleRowClick={(params)=>{console.log('row==>',params)}}/>
  }

  const allCardsData = () => {
    const form =[
      {
        element:'select',
        name:'asset-classification',
        containerClass:'asset-classification-list',
        showLabel:true,
        labelValue:'Asset Classification',
        labelClass:'asset-classification',
        value: '',
        option: [
          {
            name:'Samsung',
            value:'samsung'
          },
          {
            name:'Apple',
            value:'apple'
          },{
            name:'TVS',
            value:'tvs'
          },{
            name:'YAMAHA',
            value:'yamaha'
          },
        ],
      },
      {
       element:'input',
       showLabel:true,
       containerClass:'',
       labelValue:'Asset Serial No',
       labelClass:'asset-serial-no-label',
       type:'text',
       className:'asset-serial-no-value',
       placeholder:'',
       name:'asset-serial-no',
       value: '',
     },{
      element:'input',
      showLabel:true,
      containerClass:'',
      labelValue:'Date',
      labelClass:'asset-date-label',
      type:'text',
      className:'asset-date-value',
      placeholder:'Asset Date',
      name:'asset-date',
      value:  '',
    }];
 
    const data = [
      {
      children: <Form formList={form}/>,
      label: 'order list',
      id:1,
   },
     {
      children: renderAssetData(),
      label: 'AssetData',
      id:2,
     customClasses: 'width-times-2'
   }
 ];
 return data;
}

  return (
    <div className="asset-list-container">
      <div className="asset-list-wrapper">
        <h2 className="header">AssetSerialNumber</h2>
      </div>
      <CardsGroup allCardsData={allCardsData()} />
    </div>
  );
}