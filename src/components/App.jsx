import React, { useEffect, useState } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { search } from '../utils/search';
import { loadImages } from '../query/query';

const App = () => {
    const [images, setImages] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setIsLoading(true)
      loadImages(page)
        .then(r => {
          setKeyword('');
          setImages([...images,...r.data?.hits]);
          setIsLoading(false);
        });
    }, [page]);
    return (
      <div className={'App'}>
        <Searchbar setKeyword={setKeyword} />
        <ImageGallery images={search(images, keyword)} isLoading={isLoading} />
        {images && <Button page={page} setPage={setPage} />}
      </div>
    );
  }
;

export default App;
