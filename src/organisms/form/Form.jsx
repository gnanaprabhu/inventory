
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Input,Button,Label,Checkbox,Select } from '../../atoms'
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
    const {formValues} = this.state;
    return formList.map((item,index) => {
      switch(item.element){
        case 'label':
        return <Label key={index}  {...item}/>
        case 'input':
          return <Input onChange={this.handleChange} value={formValues[item.name]}  key={index} {...item} />
        case 'checkbox':
          return <Checkbox name={item.name} id={item.name} onClick={this.handleCheckboxClick} {...item}/>
          case 'select':
            return <Select onChange={this.handleChange} key={index} {...item}/>
        default:
          return <Label key={index} value={item.value}/>
      }
    })
  }
  render(){
    const{hideReset,hideSubmit} = this.props;
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
          {!hideSubmit && <button className="submit-button" type="submit" onClick={()=>{console.log('value',this.state.formValues)}}>
            Submit
          </button>
          }
          </div>
        </form>
      </div>
    );
  }
}
  

