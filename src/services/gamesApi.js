import { fetchGames } from '../redux/games/games.reducer';

// Base URL
const baseUrl = 'https://api.rawg.io/api/games?key=beb4844ef73a431fb1c24f5674e2d9a7';

// API Action
const getGamesFromApi = () => async (dispatch) => {
  const data = await fetch(baseUrl);
  const response = await data.json();

  const gamesList = response;

  dispatch(fetchGames(gamesList));

  return null;
};

export default getGamesFromApi;
