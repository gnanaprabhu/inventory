import React from 'react';
import { Link } from "react-router-dom"

import { Form} from '../../organisms/form'
import './Login.scss';


export class Login extends React.Component{
  render(){
    const form =[
      {
       element:'input',
       showLabel:false,
       containerClass:'',
       labelValue:'User Name',
       labelClass:'user-name-label',
       type:'text',
       className:'user-name-textbox',
       placeholder:'Enter your user name',
       name:'user-name'
     },
     {
      element:'input',
      showLabel:false,
      containerClass:'',
      labelValue:'Password',
      labelClass:'password-label',
      type:'text',
      className:'password-textbox',
      placeholder:'Enter your password',
      name:'password'
    }];
    return (
    <div className="login-container">
      <div className="login-company-wrapper">
        <div className="login-company-logo">
          <div className="company-logo">win technologies</div>
        </div>
        <div className="login-form-wrapper">
          <Form formList={form} hideReset={true} submitLabel={'Login'}/>
          <div><Link className="forget-password">Forget password?</Link></div>
        </div>
      </div>
    </div>)
  }
}