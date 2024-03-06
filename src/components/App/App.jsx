import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import './App.css';
import fetchImages from '../images-api';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';

export default function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function getImages() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchImages(query, page);

        if (data.length === 0) {
          toast.error('Nothing found on this request');
        }

        setImages(prevImages => {
          return [...prevImages, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getImages();
  }, [query, page]);

  const handleQuery = newQuery => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div className="app">
      <SearchBar onSearch={handleQuery} />
      {error && <ErrorMessage />}
      {images.length > 0 && <ImageGallery items={images} />}
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <button onClick={handleLoadMore}>Load more</button>
      )}
    </div>
  );
}
