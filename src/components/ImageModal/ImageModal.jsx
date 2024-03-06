import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

export default function ImageModal({ image, isOpen, onClose }) {
  return (
    <Modal className={css.overlay} isOpen={isOpen} onRequestClose={onClose}>
      <div className={css.content} onClick={event => event.stopPropagation()}>
        {image && (
          <img
            src={image.urls.regular}
            alt="Large image"
            className={css.image}
          />
        )}
      </div>
    </Modal>
  );
}
