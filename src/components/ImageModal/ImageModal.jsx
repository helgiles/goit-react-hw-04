import css from './ImageModal.module.css';
import ReactDOM from 'react-dom';

export default function ImageModal({ imageUrl, onClose }) {
  return ReactDOM.createPortal(
    <div className={css.overlay} onClick={onClose}>
      <div className={css.content} onClick={event => event.stopPropagation()}>
        <img src={imageUrl} alt="Large" className={css.image} />
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}
