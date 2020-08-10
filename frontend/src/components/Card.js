import React from 'react';
import CardStyle from './styles/CardStyles';

const Card = ({ me, deck, player, role, onClick, selected }) => {
  return (
    <CardStyle
      me={me}
      player={player}
      deck={deck}
      onClick={onClick}
      role={role}
      selected={selected}
    />
  );
};

export default Card;
