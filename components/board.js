// components/2048Board.js
import { useState, useEffect } from 'react';
import styles from './Board2048.module.css'; // Import your CSS module

const Tile = ({ value }) => {
  return (
    <div className={`${styles.tile} ${styles[`tile-${value}`]}`}>
      {value !== 0 && value}
    </div>
  );
};

const Row = ({ rowData }) => {
  return (
    <div className={styles.row}>
      {rowData.map((value, i) => (
        <Tile value={value} key={i} />
      ))}
    </div>
  );
};

const Board2048 = ({ board }) => {

  const [currentBoard, setCurrentBoard] = useState(board);

  useEffect(() => {
    setCurrentBoard(board);
  }, [board]);

  console.log(currentBoard);
  return (
    <div className={styles.board2048}>
      {currentBoard.map((rowData, index) => (
        <Row rowData={rowData} key={index} />
      ))}
    </div>
  );
};

export default Board2048;
