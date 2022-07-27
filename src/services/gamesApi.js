/* eslint-disable camelcase */
import { fetchGames } from '../redux/games/games.reducer';
import { fetchCategories } from '../redux/categories/categories.reducer';

// Base URL
// const baseUrl = 'https://api.rawg.io/api/games?key=beb4844ef73a431fb1c24f5674e2d9a7';

const gamesUrl = 'https://api.rawg.io/api/games?key=beb4844ef73a431fb1c24f5674e2d9a7&page_size=5';

const categoryUrl = '';

// API Action for games
const getGamesFromApi = () => async (dispatch) => {
  const data = await fetch(gamesUrl);
  const response = await data.json();

  const gamesList = await response.results;

  dispatch(
    fetchGames(
      gamesList.map(({
        id, name, background_image,
      }) => ({
        id,
        gameName: name,
        image: background_image,
      })),
    ),
  );

  return null;
};

// API Action for categories
const getCategoriesFromApi = () => async (dispatch) => {
  const data = await fetch(categoryUrl);
  const response = await data.json();

  const categoriesList = await response.results;

  return null;
};

export { getGamesFromApi, getCategoriesFromApi };
