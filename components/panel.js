
// components/GamePanel.js
import { useState } from 'react';
import Board2048 from './board'; // Import the Board2048 component
import styles from './panel.module.css'; // Import your CSS module
import { useEffect, useRef } from 'react';


const GamePanel = ({ boardStates }) => {
  const [currentMoveIndex, setCurrentMoveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef(null);

  const handleMove = (direction) => {
    if (direction === 'forward' && currentMoveIndex < boardStates.length - 1) {
      setCurrentMoveIndex(currentMoveIndex + 1);
    } else if (direction === 'backward' && currentMoveIndex > 0) {
      setCurrentMoveIndex(currentMoveIndex - 1);
    }
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        if (currentMoveIndex < boardStates.length - 1) {
          setCurrentMoveIndex((prevIndex) => prevIndex + 1);
        } else {
          setIsPlaying(false);
        }
      }, 500);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isPlaying, currentMoveIndex, boardStates.length]);

  return (
    <div className={styles.gamePanel}>
      <Board2048
        board={boardStates[currentMoveIndex]}
      />

      <div className={styles.controls}>
        <button onClick={() => handleMove('backward')} disabled={currentMoveIndex === 0}>
          &larr; Backward
        </button>

        <button onClick={handlePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        
        <button onClick={() => handleMove('forward')} disabled={currentMoveIndex === boardStates.length - 1}>
          Forward &rarr;
        </button>
      </div>
    </div>
  );
};

export default GamePanel;
