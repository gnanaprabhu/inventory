export class PurchaseHandler {
  constructor(master){
    this.master = master;
  }

  getOrderRows = () => {
    const { purchaseList } = this.master.state;
    return [{'id':'1','puchaseInvoice-no':1,'purchase-office':'chennai','vendor-name':'tyoto','asset':'Laptop','brand':'Lenovo','modal-no':'123111','price':'90000','qty':'2'},{'id':'2','puchaseInvoice-no':2,'purchase-office':'coimbatore','vendor-name':'samsung','asset':'Desktop','brand':'toshipa','modal-no':'22222','price':'84943','qty':'2'},{'id':'3','puchaseInvoice-no':1,'purchase-office':'chennai','vendor-name':'tyoto','asset':'Laptop','brand':'Lenovo','modal-no':'123111','price':'90000','qty':'2'}];
  }
  getOrderColumns = () => {
    const columns = [
      { field: 'puchaseInvoice-no', headerName: 'Purchase Invoice No', width: 150 },
      { field: 'purchase-office', headerName: 'Office', width: 150 },
      { field: 'vendor-name', headerName:'Vendor Name',width:150 },
      { field: 'asset', headerName:'Asset',width:150 },
      { field: 'brand', headerName:'Brand',width:150 },
      { field: 'modal-no', headerName:'Modal No',width:150 },
      { field: 'price', headerName:'Price',width:150 },
      { field: 'qty', headerName:'Qty',width:150 },
      { field: 'delete', headerName:'Delete',width:150 },
    ];
    return columns;
  }
}
