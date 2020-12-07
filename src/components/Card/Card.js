import React from 'react';
function Card({ pokemon }) {
  return (
    <div className="card">
      <div className="card--img">
        <img src={pokemon.sprites.front_default} alt="" />
      </div>
      <div className="card--name">{pokemon.name}</div>
    </div>
  );
}
export default Card;
