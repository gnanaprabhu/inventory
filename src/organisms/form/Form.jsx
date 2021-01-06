
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Input,Label,Checkbox,Select } from '../../atoms'
import './Style.scss';

export class Form extends React.Component{
  
  state = {
    formValues :{},
  };
  

  handleChange=(event)=>{
    const element = event.target;
    const existingState = {...this.state.formValues};
    existingState[element.name] = element.value;
    this.setState({
      formValues: existingState,
    });
  }

  renderFormValues = (name,defaultValue) => {
    const { formValues } = this.state;
    const value = formValues.hasOwnProperty(name) ? formValues[name] : defaultValue; 
    return value;
  }
  
  handleCheckboxClick = (event) => {
    const element = event.target;
    const existingState = {...this.state.formValues};
    existingState[element.name] = element.checked;
    this.setState({
      formValues: existingState,
    });
  }
  renderElements = () => {
    const {formList} = this.props;
    return formList.map((item,index) => {
      const {element,value,...remainingProps} = item
      switch(item.element){
        case 'label':
        return <Label key={index}  {...item}/>
        case 'input':
          return <Input onChange={this.handleChange} value={this.renderFormValues(item.name,value)}  key={index} {...remainingProps} />
        case 'checkbox':
          return <Checkbox name={item.name} id={item.name} onClick={this.handleCheckboxClick} {...item}/>
          case 'select':
            return <Select onChange={this.handleChange} value={this.renderFormValues(item.name,value)} selected={this.handleChange} key={index} {...remainingProps}/>
        default:
          return <Label key={index} value={item.value}/>
      }
    })
  }
  handleSubmit = () => {
    const { onSubmit } = this.props;
    onSubmit(this.state.formValues);
  }
  render(){
    const{hideReset,hideSubmit,submitLabel} = this.props;
    console.log('hide reset', hideReset);
    return (
      <div className="form-wrapper">
        <form onSubmit={(event)=>{event.preventDefault()}}>
          <div className="form-filed-wrapper">
            {this.renderElements()}
          </div>
          <div className="form-button-wrapper">
          {!hideReset && <button
            type="button"
            className="outline reset-button"
            onClick={()=>{
              this.setState({
                formValues:{},
              })
            }}
          >
            Reset
          </button>
          }
          {!hideSubmit && <button className="submit-button" type="submit" onClick={this.handleSubmit}>
            {submitLabel ? submitLabel : `Submit`}
          </button>
          }
          </div>
        </form>
      </div>
    );
  }
}
  

