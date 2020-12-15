import React from 'react'
import './styles.css';
import { Link } from "react-router-dom"
// import { uparrowIcon , downarrowIcon} from './icons'

export class MainMenu extends React.Component{
  state={
    menu : [
      {
      label:"Masters",
      className:"masters",
      innerClass:"hidden",
      url:"/home",
      nodes:[{
        label:"Assest Classification",
        className:"assest-classificaiton",
        url:"/assest-classfication",
      },{
        label:"Branch Master",
        className:"brand-master",
        url:"/brand-master",
      }]
      },
      {
      label:"Asset Transaction",
      className:"asset-transaction",
      innerClass:"hidden",
      url:"/home",
      nodes:[{
        label:"Test",
        className:"",
        url:"/home",
      }]
      },
      {
        label:"Asset Inward",
        className:"",
        innerClass:"hidden",
        url:"/home",
      }
   ]
  }

  handleMenuClick =(event) => {
    const menu =  event.target;
    const isParentMenu = this.state.menu.some(item=>item.label === menu.innerText);
    if(isParentMenu){
      const updatedMenu = this.state.menu.map( item => {
        if(item.label === menu.innerText){
          item.innerClass="active"
        }else{
          item.innerClass ="hidden"
        }
        return item;
      });
      this.setState({
        menu:updatedMenu,
      });
    }
  }

  renderList = (item,index) => {
    let innerChild;
    if(item.nodes && item.nodes.length>0){
      innerChild = <ul className={item.innerClass}>{item.nodes.map(this.renderList)}</ul>;
    }
    return <li className={item.className}  key={index}><Link to={`${item.url}`}>{item.label}{innerChild}</Link></li>
  } 

  renderMenu = () => {
    const {menu} = this.state;
    const menuList = menu.map(this.renderList)
    return (
      <ul className="main-menu" onClick={this.handleMenuClick}>
        {menuList}
      </ul>
    );
  };

  render(){
    return this.renderMenu();
  }
}