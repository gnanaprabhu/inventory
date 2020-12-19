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
  render() {
    return createPortal( <div className="modal-dialog">{this.props.children}</div>, this.element );
  }
}
