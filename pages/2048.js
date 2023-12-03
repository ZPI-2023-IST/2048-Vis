// "use client";
// import Board2048 from '../components/board';
import GamePanel from '@/components/panel';
import data from '../data.json';


export default function Home() {

  return (
    <div>
      {data ? (
        <GamePanel boardStates={data} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}