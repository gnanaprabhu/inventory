/** * Import libraries ** */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

/** * Import Pages ** */
import { AssetClassification } from "./template/masters/AssetClassification";
import { BrandMaster } from './template/masters/BrandMaster';


export const MainRouter = props => (
    <Switch>
        <Route  path="/assest-classfication" render={() => <AssetClassification {...props} />} />
        <Route  path="/brand-master" render={() => <BrandMaster {...props}/>}  />
    </Switch>
)

export default MainRouter;
