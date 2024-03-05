import css from './ImageCard.module.css';

export default function ImageCard({ image }) {
  return (
    <div className={css.container}>
      <a href={image.urls.full}>
        <img
          className={css.image}
          src={image.urls.small}
          alt={image.alt_description}
        />
      </a>
    </div>
  );
}
