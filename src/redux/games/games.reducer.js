// Const for the actions
const FETCH_GAMES = 'gameMetrics/games/FETCH_GAMES';
const FETCH_CATEGORIES = 'gameMetrics/games/FETCH_CATEGORIES';

// Create functions to fetch the games api
const fetchGames = (gamesList) => ({
  type: FETCH_GAMES,
  payload: gamesList,
});

const fetchCategories = (gameCategories) => ({
  type: FETCH_CATEGORIES,
  payload: gameCategories,
});

// Initial State
const preloadedState = {
  gamesList: [],
};

// Reducer for the games
const gamesReducer = (state = preloadedState, action = {}) => {
  switch (action.type) {
    case FETCH_GAMES:
      return {
        ...state,
        gamesList: action.payload,
      };

    default:
      return state;
  }
};

export { fetchGames, fetchCategories };
export default gamesReducer;
