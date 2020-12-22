/** * Import libraries ** */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

/** * Import Pages ** */
import { AssetClassification } from "./template/masters/AssetClassification/AssetClassification";
import { BrandMaster } from './template/masters/Master/BrandMaster';
import { AssetDescription } from './template/masters/AssetDescription/AssetDescriptoinMaster';
import { ClientMaster } from './template/masters/ClientMaster/ClientMaster';
import { VendorMaster } from './template/masters/VendorMaster/VendorMaster';
export const MainRouter = props => (
    <Switch>
        <Route  path="/asset-classfication" render={() => <AssetClassification {...props} />} />
        <Route  path="/brand-master" render={() => <BrandMaster {...props}/>}  />
        <Route  path="/asset-description" render={()=><AssetDescription {...props}/> } />
        <Route path="/client-master" render={() => <ClientMaster {...props}/>} />
        <Route path="/vendor-master" render={() => <VendorMaster {...props}/>} />
    </Switch>
)

export default MainRouter;
