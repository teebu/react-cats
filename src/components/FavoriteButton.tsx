import { MouseEvent } from 'react';
import { useFavorites } from '../context/FavoritesContext';
import '../styles/FavoriteButton.css';

interface FavoriteButtonProps {
  catId: string;
  catUrl: string;
  width?: number;
  height?: number;
}

const FavoriteButton = ({ catId, catUrl, width, height }: FavoriteButtonProps) => {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const favorite = isFavorite(catId);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (favorite) {
      removeFavorite(catId);
    } else {
      addFavorite({ id: catId, url: catUrl, width, height });
    }
  };

  return (
    <button
      className={`favorite-button ${favorite ? 'favorite-active' : ''}`}
      onClick={handleClick}
      aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
      title={favorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      {favorite ? '❤️' : '🤍'}
    </button>
  );
};

export default FavoriteButton;
