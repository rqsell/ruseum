import React, { useState } from "react";
import Tile from "./Tile";
import { TILE_COUNT, GRID_SIZE, BOARD_SIZE } from "./constants"
import { canSwap, shuffle, swap, isSolved } from "./helpers"

function Board({ imgUrl }) {
  const [tiles, setTiles] = useState([...Array(TILE_COUNT).keys()]);
  const [isStarted, setIsStarted] = useState(false);
  const [isSolved, setIsSolved]= useState(false);

const shuffleTiles= () => {
    const shuffeledTiles= shuffle(tiles)
    setTiles(shuffleTiles)
}
const swapTiles= (tileIndex) =>{ 
if(canSwap(tileIndex, tile.length-1 )){
    const swappedTiles=  swap(tiles, tileIndex, tiles.length -1)
    setTiles(swappedTiles)
}
}
const handleTileClick= (index) =>{
     swapTiles(index)
}
const handleShuffleClick = () => {
    shuffleTiles()
}
const handleStartClick = () => {
    shuffleTiles()
    setIsStarted(true)
}
  const pieceWidth = Math.round(BOARD_SIZE / GRID_SIZE);
  const pieceHeight = Math.round(BOARD_SIZE / GRID_SIZE);
  const style = {
    width: BOARD_SIZE,
    height: BOARD_SIZE,
  };


  return (
    <>zz
      <ul style={style} className="board">
        {tiles.map((tile, index) => (
          <Tile
            key={tile}
            index={index}
            imgUrl={imgUrl}
            tile={tile}
            width={pieceWidth}
            height={pieceHeight}
           
          />
        ))}
      </ul>
     {!isStarted ? (<button onClick={() => handleStartClick}> Start Game </button>): (    <button onClick={() => handleShuffleClick}> Restart Game</button> )}
    
  
    </>
  );
}

export default Board;