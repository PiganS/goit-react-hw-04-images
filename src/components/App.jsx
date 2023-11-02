import { useEffect, useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Container } from './App.styled';
import { TostBox } from './Toast/Toast';
import { fetchQuery } from 'components/api';
import { Button } from 'components/Button/Button';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import { Modal } from './Modal/Modal';

export const App = () => {
  const [value, setRequestValue] = useState('');
  const [hits, setHits] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(null);
  const [spiner, setSpiner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [urlModal, setUrlModal] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setSpiner(true);

        const { hits: newGallery, totalHits } = await fetchQuery(value, page);

        if (newGallery.length === 0) {
          toast.error('No images found for your query!');
          return;
        }

        if (page === 1) {
          toast.info(`Found: ${totalHits} images for your request`);
        }
        setHits([...hits, ...newGallery]);
        setTotal(totalHits);
        setSpiner(false);
      } catch (error) {
        toast.error('Error fetching data: ', error);
      } finally {
        setSpiner(false);
      }
    };

    if (!value) {
      return;
    }
    fetchImages();
  }, [value, page]);

  const handleFormSubmit = requestValue => {
    if (value === requestValue) {
      return;
    }
    setRequestValue(requestValue);
    setHits([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(page => page + 1);
  };

  const openModal = urlModal => {
    setUrlModal(urlModal);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Container>
      <Searchbar onSubmit={handleFormSubmit} />
      {spiner && <Loader />}
      <ImageGallery hits={hits} openModal={openModal} />
      {hits.length > 0 && hits.length < total && (
        <Button onClick={handleLoadMore} />
      )}
      {showModal && <Modal data={urlModal} closeModal={closeModal} />}
      <TostBox />
    </Container>
  );
};
