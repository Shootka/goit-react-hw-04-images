import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { Circles } from 'react-loader-spinner';


class ImageGallery extends Component {
  render() {
    return (
      <>
        <ul className='ImageGallery'>
          {this.props.images.map(({ id, largeImageURL }) => {
            return <ImageGalleryItem key={id} url={largeImageURL} />;
          })}
        </ul>
        {this.props.isLoading &&
          <div style={{margin: '0 auto'}}>
            <Circles
              height='80'
              width='80'
              color='blue'
              ariaLabel='circles-loading'
              wrapperStyle={{}}
              wrapperClass=''
              visible={true}
            />
          </div>}
      </>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default ImageGallery;
