/** * Import libraries ** */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

/** * Import Pages ** */

import { AssetClassification } from "./template/masters/AssetClassification/AssetClassification";
import { BrandMaster } from './template/masters/Master/BrandMaster';
import { AssetDescription } from './template/masters/AssetDescription/AssetDescriptoinMaster';
import { ClientMaster } from './template/masters/ClientMaster/ClientMaster';
import { VendorMaster } from './template/masters/VendorMaster/VendorMaster';
import { OrderList } from './template/orderDetail/OrderList';
import { OrderDetail } from './template/orderDetail/OrderDetail';

export const MainRouter = props => (
    <Switch>
        <Route exact path="/asset-classfication" render={props => <AssetClassification {...props} />} />
        <Route exact path="/brand-master" render={props => <BrandMaster {...props}/>}  />
        <Route exact path="/asset-description" render={props=><AssetDescription {...props}/> } />
        <Route exact path="/client-master" render={props => <ClientMaster {...props}/>} />
        <Route exact path="/vendor-master" render={props => <VendorMaster {...props}/>} />
        <Route exact path="/order-list" render={props => <OrderList {...props}/>} />
        <Route exact path="/order-detail"  render={ props => <OrderDetail {...props}/>} />
    </Switch>
)

export default MainRouter;
