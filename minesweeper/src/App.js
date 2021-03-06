import React, { Component } from 'react';
import BoardRow from './BoardRow';
import Win from './Win';
import './App.css';

class App extends Component {
  constructor()  {
    super();
    this.state = {
      board: [],
      visBoard: [],
      win: false,
    }
    this.tileClick = this.tileClick.bind(this);
    this.flag = this.flag.bind(this);
    this.generateBoard = this.generateBoard.bind(this);
  }

  flag(x,y) {}
  tileClick(x,y) {}

  checkWin(board) {
    let emptyCount = 0;
    let flagCount = 0;
    let tileCount = 0;
    for(let i = 1; i <= 10; i++) {
      for(let j = 1; j <= 10; j++) {
        if (board[i][j] === 1) emptyCount++;
        if (board[i][j] === 2) flagCount++;
        if (board[i][j] === 0) tileCount++;
      }
    }
    console.log(board);
    console.log(flagCount);
    if(emptyCount === 90 || (flagCount === 10 && tileCount === 0)){
      this.setState({win: true});
      this.tileClick = () => {};
      this.flag = () => {};
    }
  }

  revealBoard(x,y,newVis) {
    if(newVis[x][y]) return newVis;
    const tile = this.state.board[x][y]
    newVis[x][y] = 1;
    if(tile === 0) {
      for(let i = -1; i <= 1; i++)
        for(let j = -1; j <= 1; j++)
          this.revealBoard(x+i,y+j,newVis);
    } else if(tile > 0) {
      newVis[x][y] = 1;
    } else if(tile === -1) {
      this.detonate();
    }
    return newVis;
  }

  detonate() {
    let newBoard = this.state.visBoard
    for(let i = 1; i < 11; i++)
      for(let j = 1; j < 11; j++)
        if(this.state.board[i][j] === -1 && !newBoard[i][j])
          newBoard[i][j] = 1;

    this.setState(newBoard);
    this.tileClick = () => {};
    this.flag = () => {};
  }

  generateBoard() {
    const buffer = [-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2];
    const newRow = [-2,0,0,0,0,0,0,0,0,0,0,-2];
    const visRow = [0,0,0,0,0,0,0,0,0,0,0,0];
    const newBoard = [buffer.slice()];
    const visBoard = [visRow.slice(), visRow.slice()];
    for(let i = 0; i < 10; i++) {
      newBoard.push(newRow.slice());
      visBoard.push(visRow.slice());
    }
    newBoard.push(buffer.slice());
    for(let i = 0; i < 10; i++) {
      let x = Math.floor(Math.random() * 10)+1;
      let y = Math.floor(Math.random() * 10)+1;
      while(newBoard[x][y] === -1) {
        x = Math.floor(Math.random() * 10)+1;
        y = Math.floor(Math.random() * 10)+1;
      }
      newBoard[x][y] = -1;
    }

    for(let x = 1; x < 11; x++) 
      for(let y = 1; y < 11; y++) 
        if(newBoard[x][y] === 0)
          for(let i = -1; i <= 1; i++)
            for(let j = -1; j <= 1; j++)
              if(newBoard[x+i][y+j] === -1) newBoard[x][y]++;

    this.setState({board: newBoard, visBoard: visBoard, win: false});

    this.tileClick = (x,y) => {
      let newBoard = this.revealBoard(x,y,this.state.visBoard);
      this.checkWin(newBoard);
      this.setState({visBoard: newBoard});
    }
    this.flag = (x,y) => {
      let newBoard = this.state.visBoard;
      if (newBoard[x][y] === 0){
        newBoard[x][y] = 2;
      } else if(newBoard[x][y] === 2) {
        newBoard[x][y] = 0;
      }
      this.setState({visBoard: newBoard});
    }
  }

  componentWillMount() {
    this.generateBoard();
  }

  render() {
    return (<div>
      <div id="board-container">{this.state.board.map((row, idx) => {
        return <BoardRow key={idx} x={idx} row={row} vRow={this.state.visBoard[idx]} flag={this.flag} tileClick={this.tileClick}/>;
      })}</div><button onClick={this.generateBoard}>Reset!</button><Win hasWon={this.state.win}/></div>
    );
  }
}

export default App;
