export class OrderHandler {
  constructor(master){
    this.master = master;
  }

  getOrderRows = () => {
    const { orderList } = this.master.state;
    return [{'id':1,'order-no':'123','client-name':'tyoto','order-type':'COD','delivery-type':'Day','qty':'2','order-price':'300'},{'id':2,'order-no':'123','client-name':'tyoto','order-type':'COD','delivery-type':'Day','qty':'2','order-price':'300'},{'id':3,'order-no':'123','client-name':'tyoto','order-type':'COD','delivery-type':'Day','qty':'2','order-price':'300'}];
  }
  getOrderColumns = () => {
    const columns = [
      { field: 'order-no', headerName: 'Order No', width: 150 },
      { field: 'client-name', headerName: 'Client Name', width: 150 },
      { field: 'order-type', headerName:'Order Type',width:150 },
      { field: 'delivery-type', headerName: 'Delivery Type', width: 150 },
      { field: 'qty', headerName: 'Order Qty', width: 150 },
      { field: 'order-price', headerName:'Price',width:150 },
    ];
    return columns;
  }
}
