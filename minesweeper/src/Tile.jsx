import React from 'react';
import './Tile.css';
const Tile = (props) => {
  if(props.visible || props.tile === -2){
    switch(props.tile) {
      case 0:
        return <button className="tile empty"></button>;
      case -1:
        return <button className="tile mine">-1</button>;
      case -2:
        return null;
      default:
        return <button className="tile number">{props.tile}</button>;
    }
  } else {
    return <button className="tile" onClick={() => {
      props.tileClick(props.x, props.y);
    }}></button>
  }
}

export default Tile;
