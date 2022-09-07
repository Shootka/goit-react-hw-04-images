import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';

const ImageGalleryItem = ({ url }) => {
  const [active, setActive] = useState(false);
  return (
    <>
      <li className='ImageGalleryItem' onClick={() => setActive(true)}>
        <img src={url} alt='' className={'ImageGalleryItem-image'} />
      </li>
      <Modal setActive={setActive} active={active}>
        <img src={url} alt='' />
      </Modal>
    </>
  );
};

ImageGalleryItem.propTypes = {
  url: PropTypes.string,
};

export default ImageGalleryItem;
