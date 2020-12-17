import React from 'react'
import './styles.scss';
import { Link } from "react-router-dom"
// import { uparrowIcon , downarrowIcon} from './icons'

export class MainMenu extends React.Component{
  state={
    menu : [
      {
      label:"Masters",
      className:"first-level",
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
      className:"first-level",
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
        className:"first-level",
        innerClass:"hidden",
        url:"/home",
      }
   ]
  }

  handleMenuClick =(event) => {
    const menu =  event.target;
    const isParentMenu = menu.className.split(' ')[0] === 'first-level';
    console.log('menu',menu.className);
    if(isParentMenu){
      const updatedMenu = this.state.menu.map( item => {
        if(item.label === menu.innerText){
          item.className = `${item.className} open`;
          item.innerClass="active";
        }else{
          item.className = `first-level`;
          item.innerClass ="hidden";
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
    return <Link className={item.label} to={`${item.url}`}><li className={item.className}  key={index}>{item.label}{innerChild}</li></Link>
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