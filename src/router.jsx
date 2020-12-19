/** * Import libraries ** */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

/** * Import Pages ** */
import { AssetClassification } from "./template/masters/AssetClassification/AssetClassification";
import { BrandMaster } from './template/masters/Master/BrandMaster';
import { AssetDescription } from './template/masters/AssetDescription/AssetDescriptoinMaster';

export const MainRouter = props => (
    <Switch>
        <Route  path="/asset-classfication" render={() => <AssetClassification {...props} />} />
        <Route  path="/brand-master" render={() => <BrandMaster {...props}/>}  />
        <Route  path="/asset-description" render={()=><AssetDescription {...props}/> } />
    </Switch>
)

export default MainRouter;
