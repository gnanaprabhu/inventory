export class OrderHandler {
  constructor(master){
    this.master = master;
  }

  getOrderRows = () => {
    const { orderList } = this.master.state;
    return orderList;
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
