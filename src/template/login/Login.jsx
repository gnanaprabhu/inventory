import React from 'react';
import { Link } from "react-router-dom"

import { Form} from '../../organisms/form'
import './Login.scss';


export class Login extends React.Component{
  render(){
   const { history } = this.props;
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
      type:'password',
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
          <Form formList={form} hideReset={true} submitLabel={'Login'} onSubmit={(e)=>{history&&history.push('/home')}}/>
          <div><Link className="forget-password">Forget password?</Link></div>
        </div>
      </div>
    </div>)
  }
}