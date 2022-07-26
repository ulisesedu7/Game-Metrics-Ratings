/* eslint-disable camelcase */
import { fetchGames, fetchGamesDetails } from '../redux/games/games.reducer';

// API Key
const apiKey = '?key=beb4844ef73a431fb1c24f5674e2d9a7';

// Base URL
const gamesUrl = 'https://api.rawg.io/api/games?key=beb4844ef73a431fb1c24f5674e2d9a7';

// Games Details URL
const gameDetailsUrl = 'https://api.rawg.io/api/games/';

// API Action for games
const getGamesFromApi = () => async (dispatch) => {
  const data = await fetch(gamesUrl);
  const response = await data.json();

  const gamesList = await response.results;

  // Dispatch 1st page
  dispatch(
    fetchGames(
      gamesList.map(({
        id, name, rating, background_image,
      }) => ({
        id,
        gameName: name,
        rating,
        gameImage: background_image,
      })),
    ),
  );

  return null;
};

const getGameDetailsFromApi = (id) => async (dispatch) => {
  const gameUrl = `${gameDetailsUrl}${id}${apiKey}`;

  const data = await fetch(gameUrl);
  const response = await data.json();

  const gameDetails = await response;

  dispatch(fetchGamesDetails(gameDetails));

  return null;
};

export { getGamesFromApi, getGameDetailsFromApi };
