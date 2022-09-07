import React  from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

const Modal = ({ active, setActive, children }) => {
  return (
    <div className={active ? 'modal active' : 'modal '} onClick={() => setActive(false)}>
      <div className={active
        ? 'modal-content active'
        : 'modal-content '}
           onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func,
  url: PropTypes.node,
};
export default Modal;
