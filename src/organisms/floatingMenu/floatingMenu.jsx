import React from 'react';

import { PlusIcon } from '../../icons';

import './style.scss';

export class FloatingMenu extends React.Component{
  state={
    showMenu: false,
  }
  toggleMenu = () => {
    const {showMenu} = this.state;
    this.setState({
      showMenu:!showMenu,
    })
   }
  render() {
    const { showMenu } =  this.state;
    return (
    <div>
      <button className={`fab`}
          type="button"
          onClick={()=>{
            this.toggleMenu();
          }}
        >        
          <div className={`fab-icon ${showMenu ? 'active' : ''}`}><PlusIcon /></div>
      </button>
      <div className={`child ${showMenu ? 'active' : ''}`}>
        <i className='text' />
        <a className='item'
          onClick={()=>{
            console.log('event');
          }}
        >-</a>
      </div>
    </div>
     );
  }
}
