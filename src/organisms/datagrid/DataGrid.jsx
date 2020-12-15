import React from 'react';
import { DataGrid as DataGridImpo, RowsProp, ColDef } from '@material-ui/data-grid';

const rows: RowsProp = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'XGrid', col2: 'is Awesome' },
  { id: 3, col1: 'Material-UI', col2: 'is Amazing' },
];

const columns: ColDef[] = [
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
];

export class DataGrid extends React.Component {
  
  render() {
    return (
      <div style={{ height: 300, width: '100%' }}>
        <DataGridImpo rows={rows} columns={columns} hideFooterSelectedRowCount={true} hideFooterPagination={true} hideFooterRowCount={true} hideFooter={true}/>
      </div>
    );
  }
}