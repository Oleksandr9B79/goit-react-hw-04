import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

function ImageGallery({ photos, onSelect }) {
  return (
    <ul className={css.list}>
      {photos.map((image) => (
        <li className={css.item} key={image.id}>
          <ImageCard card={image} onSelect={onSelect} />
        </li>
      ))}
    </ul>
  );
}
export default ImageGallery;
