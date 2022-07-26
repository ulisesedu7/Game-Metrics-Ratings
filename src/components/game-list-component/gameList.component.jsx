import React from 'react';
import { useSelector } from 'react-redux';
import GameBlock from '../game-block-component/gameBlock.component';

const GamesList = () => {
  const games = useSelector((state) => state.games.gamesList);
  console.log(games);

  return (
    <section className="game-list-container">
      <h3>Testing</h3>
      {games.map((game) => (
        <GameBlock title={game.name} image={game.background_image} key={game.id} />
      ))}
    </section>
  );
};

export default GamesList;
