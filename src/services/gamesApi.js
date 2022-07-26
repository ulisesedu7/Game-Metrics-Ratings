/* eslint-disable camelcase */
import { fetchGames } from '../redux/games/games.reducer';

// Base URL
// const baseUrl = 'https://api.rawg.io/api/games?key=beb4844ef73a431fb1c24f5674e2d9a7';

const baseUrl2 = 'https://api.rawg.io/api/games?key=beb4844ef73a431fb1c24f5674e2d9a7&page_size=5';

// API Action
const getGamesFromApi = () => async (dispatch) => {
  const data = await fetch(baseUrl2);
  const response = await data.json();

  const gamesList = await response.results;

  dispatch(fetchGames(gamesList));

  // dispatch(
  //   fetchGames(
  //     gamesList.map(({
  //       id, name, background_image,
  //     }) => ({
  //       id,
  //       gameName: name,
  //       image: background_image,
  //     })),
  //   ),
  // );

  return null;
};

export default getGamesFromApi;
