import React from 'react';
import { DataGrid as DataGridImpo, RowsProp, ColDef } from '@material-ui/data-grid';
import './style.scss';


const rows: RowsProp = [
  { id: 1, col1: '1', col2: 'Laptop', col3:'Yes' },
  { id: 2, col1: '2', col2: 'Labels Rolls', col3:'No' },
  { id: 3, col1: '3', col2: 'Server', col3:'Yes' },
  { id: 4, col1: '4', col2: 'Desktop', col3: 'Yes'}
];

const columns: ColDef[] = [
  { field: 'col1', headerName: 'AssetID', width: 150 },
  { field: 'col2', headerName: 'Asset', width: 150 },
  { field: 'col3', headerName:'SerialNo',width:150 },
];

export class DataGrid extends React.Component {
  static defaultProps = {
    hideFooterPagination:true,
    hideFooter:true,
    hideFooterRowCount:true,
    hideFooterSelectedRowCount:true,
    rows:rows,
    cols:columns,
  }
  render() {
    const { rows,cols,hideFooter,hideFooterPagination,hideFooterRowCount,hideFooterSelectedRowCount,handleRowClick } = this.props;
    return (
      <div style={{ height: 300}}>
        <DataGridImpo rows={rows} 
          columns={cols} 
          hideFooterSelectedRowCount={hideFooterSelectedRowCount} 
          hideFooterPagination={hideFooterPagination}
          hideFooterRowCount={hideFooterRowCount}
          hideFooter={hideFooter}
          onRowClick={handleRowClick}/>
      </div>
    );
  }
}