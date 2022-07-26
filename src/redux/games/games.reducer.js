// Const for the actions
const FETCH_GAMES = 'gameMetrics/games/FETCH_GAMES';

// Create functions to fetch the games api
const fetchGames = (gamesList) => ({
  type: FETCH_GAMES,
  payload: gamesList,
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

export { fetchGames };
export default gamesReducer;
