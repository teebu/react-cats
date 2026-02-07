import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import '../styles/FavoriteButton.css';

interface FavoriteButtonProps {
  catId: string;
  catUrl: string;
  width?: number;
  height?: number;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ catId, catUrl, width, height }) => {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const favorite = isFavorite(catId);

  const handleClick = (e: React.MouseEvent) => {
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
