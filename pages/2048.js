// "use client";
// import Board2048 from '../components/board';
import data from '../data.json';
import { useState } from 'react';
import Board2048 from '@/components/board'; // Import the Board2048 component
import styles from '@/components/panel.module.css'; // Import your CSS module
import { useEffect, useRef } from 'react';
import { SlControlPause, SlControlPlay, SlArrowRight, SlArrowLeft, SlControlEnd, SlControlStart } from "react-icons/sl";


export default function Home() {

  const buttonStyle = {
    border: 'none',
    borderRadius: '50%',
    width: '100px', // Adjusted width
    height: '100px', // Adjusted height
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    marginBottom: '10px',
};

  const boardStates = data;

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
    <div style={{minHeight: '100vh', height: '100vh', width: '100%', display: 'flex', flexDirection: 'column'}}>
      {data ? ( <>
          <Board2048
          board={boardStates[currentMoveIndex]}
        />

        <div className={styles.controls}>
          <button onClick={() => setCurrentMoveIndex(0)} disabled={currentMoveIndex === 0} style={buttonStyle}>
          <SlControlStart></SlControlStart>
        </button>

          <button onClick={() => handleMove('backward')} disabled={currentMoveIndex === 0} style={buttonStyle}>
            <SlArrowLeft></SlArrowLeft>
          </button>

          <button onClick={handlePlayPause} style={buttonStyle} disabled={currentMoveIndex === boardStates.length - 1}>
            {isPlaying ? <SlControlPause></SlControlPause> : <SlControlPlay></SlControlPlay>}
          </button>
          
          <button onClick={() => handleMove('forward')} disabled={currentMoveIndex === boardStates.length - 1} style={buttonStyle}>
          <SlArrowRight></SlArrowRight>
          </button>

          <button onClick={() => setCurrentMoveIndex(boardStates.length - 1)} disabled={currentMoveIndex === boardStates.length - 1} style={buttonStyle}>
          <SlControlEnd></SlControlEnd>
          </button>
        </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}