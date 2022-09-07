import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { search } from './utils/search';
import { loadImages } from './query/query';


class App extends Component {
  state = {
    images: [],
    isLoading: true,
    page: 1,
    keyword: '',
  };

  componentDidMount() {
    setTimeout(() => {
      loadImages(this.state.page).then(r  => {
        this.setState(() => {
          return {
            images: [...r.data?.hits],
            isLoading: false,
          };
        });
      })
    }, 400);
  }

  loadMoreHandler = (page) => {
    this.setState({
      isLoading: true,
    });
    setTimeout(() => {
      loadImages(page)
        .then(r => {
          this.setState(state => {
            return {
              keyword: '',
              images: [...state.images, ...r.data?.hits],
              isLoading: false,
            };
          });
        });
    }, 400);
  };

  handleSubmit = (data) => {
    this.setState(() => {
      return {
        keyword: data,
        page: 1,
      };
    });
  };


  render() {
    return (
      <div className={'App'}>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={search(this.state.images, this.state.keyword)} isLoading={this.state.isLoading} />
        {this.state.images && <Button onLoadMore={this.loadMoreHandler} />}
      </div>
    );
  }
}

export default App;
