import React from 'react'
import './styles.scss';
import { Link } from "react-router-dom"
import { ArrowIcon } from '../../icons'

export class MainMenu extends React.Component{
  state={
    menu : [
      {
      label:"Masters",
      className:"first-level",
      innerClass:"hidden",
      url:"/home",
      isOpen:false,
      icon:<ArrowIcon/>,
      nodes:[{
        label:"Asset Classification",
        className:"asset-classificaiton",
        url:"/asset-classfication",
      },{
        label:"Branch Master",
        className:"brand-master",
        url:"/brand-master",
      },{
        label:"Asset Description",
        className:"asset-description",
        url:"/asset-description",
      },{
        label:"Client Master",
        className:"client-master",
        url:"/client-master",
      },{
        label:"Vendor Master",
        className:"vendor-master",
        url:"/vendor-master",
      }]
      },
      {
      label:"Asset Transaction",
      className:"first-level",
      innerClass:"hidden",
      url:"/order-list",
      icon:<ArrowIcon/>,
      isOpen:false,
      nodes:[{
        label:"Order List",
        className:"",
        url:"/order-list",
      }]
      },
      {
        label:"Asset Inward",
        className:"first-level",
        innerClass:"hidden",
        url:"/asset-serial-number",
        isOpen:false,
        icon:<ArrowIcon/>,
        nodes:[{
          label:"Asset Serial No",
          className:"asset-serial-number",
          url:"/asset-serial-number",
        },{
          label:"Purchase Inward",
          className:"purchase-inward",
          url:"/asset-purchase-inward",
        }]
      }
   ]
  }

  handleMenuClick =(menu) => {
      const isParentMenu = menu.className.split(' ')[0] === 'first-level';

      if(isParentMenu){
        const updatedMenu = this.state.menu.map( item => {
          if(item.label === menu.label && !menu.isOpen){
            item.className = `${item.className} open`;
            item.innerClass="active";
            item.isOpen=true;
          
          }else{
            item.className = `first-level`;
            item.innerClass ="hidden";
            item.isOpen=false;
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
      innerChild = <ul className={item.innerClass} onClick={(e)=>e.stopPropagation()}>{item.nodes.map(this.renderList)}</ul>;
    }
    const menuItem = item.label
    return (
    <li className={item.className} onClick={(e)=>{this.handleMenuClick(item);}}  key={index}>
      <Link className={item.label} to={`${item.url}`}>
        <div className='menu-item'>
          <span className="">{menuItem}</span>
          {item.icon && <div className="arrow-icon">{item.icon}</div>}
        </div>
        {innerChild}
      </Link>
    </li>
    );
  } 

  renderMenu = () => {
    const {menu} = this.state;
    const menuList = menu.map(this.renderList)
    return (
      <ul className="main-menu" >
        {menuList}
      </ul>
    );
  };

  render(){
    return this.renderMenu();
  }
}