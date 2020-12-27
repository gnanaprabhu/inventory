import React from 'react';

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
          <div>+</div>
      </button>
      <div className={`child ${showMenu ? 'active' : ''}`}>
        <i className='text' />
        <a className='item'>-</a>
      </div>
    </div>
     );
  }
}
