import React from 'react';
import Tile from './Tile';
const BoardRow = props => {
    return (<div id="row-container">{props.row.map((tile, idx) => {
      return (<Tile key={idx} x={props.x} y={idx} tile={tile} visible={props.vRow[idx]} flag={props.flag}tileClick={props.tileClick}/>);
    })}</div>);
}

export default BoardRow;