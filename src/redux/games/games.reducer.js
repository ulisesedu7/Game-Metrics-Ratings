// Const for the actions
const FETCH_GAMES = 'gameMetrics/games/FETCH_GAMES';
const FETCH_GAME_DETAILS = 'gameMetrics/games/FETCH_GAMES_DETAILS';

// Create functions to fetch the games api
const fetchGames = (gamesList) => ({
  type: FETCH_GAMES,
  payload: gamesList,
});

const fetchGamesDetails = (gameDetails) => ({
  type: FETCH_GAME_DETAILS,
  payload: gameDetails,
});

// Initial State
const preloadedState = {
  gamesList: [],
  gameDetails: [],
};

// Reducer for the games
const gamesReducer = (state = preloadedState, action = {}) => {
  switch (action.type) {
    case FETCH_GAMES:
      return {
        ...state,
        gamesList: action.payload,
      };

    case FETCH_GAME_DETAILS:
      return {
        ...state,
        gameDetails: action.payload,
      };

    default:
      return state;
  }
};

export { fetchGames, fetchGamesDetails };
export default gamesReducer;
