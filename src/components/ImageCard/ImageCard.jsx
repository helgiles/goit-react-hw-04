import css from './ImageCard.module.css';

import { useState } from 'react';
import ImageModal from '../ImageModal/ImageModal.jsx';

export default function ImageCard({ image }) {
  const [showImageModal, setShowImageModal] = useState(false);

  const openImageModal = () => {
    setShowImageModal(true);
  };

  const closeImageModal = () => {
    setShowImageModal(false);
  };

  return (
    <div className={css.container}>
      <a
        href={image.urls.regular}
        onClick={event => {
          event.preventDefault();
          openImageModal();
        }}
      >
        <img
          className={css.image}
          src={image.urls.small}
          alt={image.alt_description}
        />
      </a>
      {showImageModal && (
        <ImageModal imageUrl={image.urls.regular} onClose={closeImageModal} />
      )}
    </div>
  );
}
