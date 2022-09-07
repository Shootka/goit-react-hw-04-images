import axios from 'axios';
const _KEY = '29773028-b875f3991d0afa4b3f17a962e';

export const loadImages = async (page) => {
  return await axios.get(`https://pixabay.com/api/?q=cat&page=${page}&key=${_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
}

export const loadMore = async (page) => {
  return await axios.get(`https://pixabay.com/api/?q=cat&page=${page}&key=${_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
}
