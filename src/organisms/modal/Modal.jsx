import React from 'react';
import { createPortal } from 'react-dom';

import './style.scss';

const modalRoot = document.getElementById( 'modal' );
export class Modal extends React.Component{
  constructor(props){
    super(props);
    this.element = document.createElement( 'div');
    this.element.className = "modal-overlay";
  }
  componentWillUnmount() {
    modalRoot.removeChild( this.element );
  }
  componentDidMount() {
    modalRoot.appendChild( this.element );
  }
  toggleModal = () => {
    const {onToggle} = this.props;
    onToggle && onToggle();
  }
  render() {
    const {title} = this.props;
    return createPortal( <div className="modal-dialog">
      <div className="modal-header">
          <div className="title">{title}</div>
          <button className="modal-close"
          onClick={this.toggleModal}>
            <span>X</span>
          </button>
      </div>
      {this.props.children}
      </div>, this.element );
  }
}
