export class OrderHandler {
  constructor(master){
    this.master = master;
  }

  getOrderRows = () => {
    const { orderList } = this.master.state;
    return [{'id':1,'order-no':'123','client-name':'tyoto','order-date':'23-01-12'},{'id':2,'order-no':'114','client-name':'sail','order-date':'23-01-12'},{'id':3,'order-no':'115','client-name':'yamaha','order-date':'21-01-12'}];
  }
  getOrderColumns = () => {
    const columns = [
      { field: 'order-no', headerName: 'Order No', width: 150 },
      { field: 'client-name', headerName: 'Client Name', width: 150 },
      { field: 'order-date', headerName:'Date',width:150 },
    ];
    return columns;
  }
}
