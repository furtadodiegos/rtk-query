import type { FC } from 'react';
import useList from './useList';

const PostsList: FC = () => {
  const { cars, isLoading, favorite, favorites, removeFavorite } = useList();

  return (
    <div>
      <p>My Favorites cars</p>

      {isLoading && <p>Loading...</p>}

      {cars.map(({ model, uuid, pic }) => (
        <div key={uuid}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p>{model}</p>

            {favorites.indexOf(uuid) >= 0 ? (
              <button
                type="button"
                onClick={() => removeFavorite(uuid)}
                style={{ background: 'transparent', border: 'transparent' }}>
                <img alt="oi" src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Star-icon.png" width={40} />
              </button>
            ) : (
              <button type="button" onClick={() => favorite(uuid)}>
                Favorite
              </button>
            )}
          </div>

          <img src={pic} alt={`${model}`} style={{ width: 200, margin: '20px 0' }} />
        </div>
      ))}
    </div>
  );
};

export default PostsList;
