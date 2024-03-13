import css from "./ImageCard.module.css";

function ImageCard({ card, onSelect }) {
  return (
    <div
      className={css.wrap}
      onClick={() =>
        onSelect(true, {
          src: card.urls.regular,
          description: card.alt_description,
          alt_description: card.alt_description,
          location: card.user.location,
        })
      }
    >
      <img
        className={css.img}
        src={card.urls.small}
        alt={card.alt_description}
      />
      <div className={css.cover}>
        <p className={css.info}>Likes: {card.likes}</p>
        <p className={css.info}>Author: {card.user.name}</p>
        <p className={css.info}>Location: {card.user.location}</p>
      </div>
    </div>
  );
}

export default ImageCard;
