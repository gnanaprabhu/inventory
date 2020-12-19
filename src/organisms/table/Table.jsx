import React from 'react';
import { DataGrid as DataGridImpo, RowsProp, ColDef, CellParams } from '@material-ui/data-grid';
import { DeleteIcon, EditIcon }  from '../../icons';


const rows: RowsProp = [
  { id: 1, col1: 'dell', col2: 'dell09', col3:'taptop' },
  { id: 2, col1: 'hp', col2: 'hp123', col3:'taptop' },
];

const columns: ColDef[] = [
  { field: 'col1', headerName: 'Brand', width: 150 },
  { field: 'col2', headerName: 'Asset model No', width: 150 },
  { field: 'col3', headerName:'Asset description',width:150 },
  {
    field: "col4",
    headerName: "Edit",
    sortable: false,
    width: 100,
    disableClickEventBubbling: true,
    renderCell: (params: CellParams) => {
      const onClick = () => {
        console.log('table inxed', params.rowIndex)
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
    renderCell: (params: CellParams) => {
      const onClick = () => {
        console.log('table index for delete', params.rowIndex)
      };

      return (
        <div onClick={onClick}>
           <DeleteIcon />
        </div>
        );
    }
  },
];

export class Table extends React.Component {
  
  render() {
    return (
      <div style={{ height: 300, width: '100%' }}>
        <DataGridImpo rows={rows} columns={columns} hideFooterSelectedRowCount={false} hideFooterPagination={false} hideFooterRowCount={false} hideFooter={true}/>
      </div>
    );
  }
}