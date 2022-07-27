/* eslint-disable camelcase */
import { fetchGames } from '../redux/games/games.reducer';

// Base URL
const gamesUrl = 'https://api.rawg.io/api/games?key=beb4844ef73a431fb1c24f5674e2d9a7&page_size=5';

// API Action for games
const getGamesFromApi = () => async (dispatch) => {
  const data = await fetch(gamesUrl);
  const response = await data.json();

  const gamesList = await response.results;

  dispatch(
    fetchGames(
      gamesList.map(({
        id, name, rating,
      }) => ({
        id,
        gameName: name,
        rating,
      })),
    ),
  );

  return null;
};

export default getGamesFromApi;
