
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Input,Button,Label } from '../../atoms'

export class Form extends React.Component{
  
  state = {
    form:[{
      element:'label',
      className:'custom-label',
    },{
      element:'input',
      type:'text',
      className:'custom-textbox',
      placeholder:'email',
      name:'email'
    },{
      element:'button',
      className:'custom-button',
      value:'submit',
    }],
    formValues :{},
  };
  
  handleChange=(event)=>{
    const element = event.target
    const obj = {...this.state.formValues}
    obj[element.name] = element.value;
    this.setState({
      formValues: obj,
    })
  }
  
  renderElements = () => {
    const {formList} = this.props;
    const {formValues} = this.state;
    return formList.map((item,index) => {
      switch(item.element){
        case 'label':
        return <Label key={index}  {...item}/>
        case 'input':
          return <Input handleChange={this.handleChange} value={formValues[item.name]}  key={index} {...item} />
        default:
          return <Label key={index} value=""/>
      }
    })
  }
  render(){
    const{hideReset,hideSubmit} = this.props;
    return (
      <div className="form-wrapper">
        <form onSubmit={(event)=>{event.preventDefault()}}>
          {this.renderElements()}
          <div className="form-button-wrapper">
          {!hideReset && <button
            type="button"
            className="outline"
            onClick={()=>{
              this.setState({
                formValues:{},
              })
            }}
          >
            Reset
          </button>
          }
          {!hideSubmit && <button type="submit" onClick={()=>{console.log('value',this.state.formValues)}}>
            Submit
          </button>
          }
          </div>
        </form>
      </div>
    );
  }
}
  

