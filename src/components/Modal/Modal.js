import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Modal.css'

class Modal extends Component {
  render() {
    const {active, setActive, children, url} = this.props
    return (
      <div className= {active ? 'modal active' : 'modal '} onClick={(event) => setActive(event, false)}>
        <div className= {active
          ? 'modal-content active'
          : 'modal-content '}
             onClick={e => e.stopPropagation()}>
          <img src={url} alt='' />
          {children}
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func,
  url: PropTypes.node
}
export default Modal;
