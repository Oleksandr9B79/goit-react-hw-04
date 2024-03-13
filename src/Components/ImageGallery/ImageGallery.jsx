/* eslint-disable react/prop-types */
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

// eslint-disable-next-line react/prop-types
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
