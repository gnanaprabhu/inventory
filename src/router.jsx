/** * Import libraries ** */
import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';

/** * Import Pages ** */
import { MainMenu } from './organisms/mainmenu';
import { AssetClassification } from "./template/masters/AssetClassification/AssetClassification";
import { BrandMaster } from './template/masters/Master/BrandMaster';
import { AssetDescription } from './template/masters/AssetDescription/AssetDescriptoinMaster';
import { ClientMaster } from './template/masters/ClientMaster/ClientMaster';
import { VendorMaster } from './template/masters/VendorMaster/VendorMaster';
import { OrderList } from './template/orderDetail/OrderList';
import { OrderDetail } from './template/orderDetail/OrderDetail';
import { Login } from './template/login/Login';
import { AssetSerialNumber } from './template/asset/AssetSerialNumber';
import { PurchaseInward } from './template/asset/PurchaseInward/PurchaseInward';

const PrivateRoute = ({Component,...rest}) => {
    if(rest.path !== '/login'){
        return(
            <>
            <header className="header">
              <div className="header-container">
                  <div className="company-logo">win technologies</div>
                <div>
                  <button type="button" className="login-button">
                      Login
                  </button>
                </div>
              </div>
            </header>
            <div className="main-container">
              <div className="menu">
                <MainMenu/>
              </div>
              <div className="page-container">
              <Route {...rest} render={props => <Component {...props} />} />
              </div>
            </div>
           </>
        )
    }else{
       return <Route exact path="/login" render={props => <Login {...props}/>}  />
    }
}

export const MainRouter = props => (
    <Switch>
        <PrivateRoute component={AssetClassification} exact path="/home"  />
        <PrivateRoute component={Login} exact path="/login"  />
        <PrivateRoute component={AssetClassification} exact path="/asset-classfication"  />
        <PrivateRoute component={BrandMaster} exact path="/brand-master"  />
        <PrivateRoute component={AssetDescription} exact path="/asset-description" />
        <PrivateRoute component={ClientMaster} exact path="/client-master"  />
        <PrivateRoute component={VendorMaster} exact path="/vendor-master"  />
        <PrivateRoute component={OrderList} exact path="/order-list"  />
        <PrivateRoute component={OrderDetail} exact path="/order-detail" />
        <PrivateRoute component={AssetSerialNumber} exact path="/asset-serial-number"/>
        <PrivateRoute component={PurchaseInward} exact path="/asset-purchase-inward"/>
    </Switch>
)

export default MainRouter;
