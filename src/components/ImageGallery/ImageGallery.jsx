import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

export default function ImageGallery({ items }) {
  return (
    <ul className={css.gallery}>
      {items.map(item => (
        <li key={item.id}>
          <div>
            <ImageCard image={item} />
          </div>
        </li>
      ))}
    </ul>
  );
}
