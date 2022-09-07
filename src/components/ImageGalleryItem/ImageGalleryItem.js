import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';

class ImageGalleryItem extends Component {
  state = {
    active: false,
    url: '',
  };

  setActive = (event, active) => {
    if (event.target.src) {
      this.setState(() => {
        return {
          active: active,
          url: event.target?.src,
        };
      });
    } else {
      this.setState(() => {
        return {
          active: active,
        };
      });
    }
  };

  render() {
    return (
      <>
        <li className='ImageGalleryItem' onClick={(event) => this.setActive(event, true)}>
          <img src={this.props.url} alt='' className={'ImageGalleryItem-image'} />
        </li>
        <Modal url={this.state.url} setActive={this.setActive} active={this.state.active} />
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  url: PropTypes.string,
};

export default ImageGalleryItem;
