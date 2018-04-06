import React from 'react';
import './Tile.css';
const Tile = (props) => {
  if(props.visible === 1 || props.tile === -2){
    switch(props.tile) {
      case 0:
        return <button className="tile empty" onContextMenu={(e) => {e.preventDefault()}}></button>;
      case -1:
        return <button className="tile mine"></button>;
      case -2:
        return null;
      default:
        return <button className="tile number">{props.tile}</button>;
    }
  } else if(props.visible === 2){
    return <button className="tile flag" onContextMenu={(e) => {
      e.preventDefault()
      props.flag(props.x, props.y);
    }}></button>
  } else {
    return <button className="tile" onClick={() => {
      props.tileClick(props.x, props.y);
    }} onContextMenu={(e) => {
      e.preventDefault()
      props.flag(props.x, props.y);
    }}></button>
  }
}

export default Tile;
