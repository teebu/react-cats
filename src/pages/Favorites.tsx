import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import { Link } from 'react-router-dom';
import FavoriteButton from '../components/FavoriteButton';
import '../styles/Favorites.css';

const Favorites: React.FC = () => {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="favorites-empty">
        <h1>No Favorites Yet</h1>
        <p>Start exploring and save your favorite cats!</p>
        <div style={{ fontSize: '4rem', margin: '2rem 0' }}>😿</div>
        <Link to="/cats" className="explore-button">
          Explore Cats
        </Link>
      </div>
    );
  }

  return (
    <div className="favorites-container">
      <h1>My Favorite Cats ({favorites.length})</h1>
      <div className="favorites-grid">
        {favorites.map((cat) => (
          <div key={cat.id} className="favorite-item">
            <Link to={`/cat/${cat.id}`} className="favorite-link">
              <img
                src={cat.url}
                alt={`Favorite cat ${cat.id}`}
                className="favorite-image"
                loading="lazy"
              />
            </Link>
            <FavoriteButton
              catId={cat.id}
              catUrl={cat.url}
              width={cat.width}
              height={cat.height}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
