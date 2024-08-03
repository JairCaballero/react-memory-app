import { TbAlarm, TbNavigationShare, TbHeartFilled } from 'react-icons/tb'
import Board from '../components/Board'

const Game = () => {
  const data = JSON.parse(localStorage.getItem('data'))
  if (!data) return

  return (
    <div className='flex gap-10 h-screen py-32'>
      {/* board */}
      <Board />
      {/* info */}
      {/* <div className='flex flex-col items-center gap-8 w-[40%]'>
        <div className='flex gap-2 justify-center w-full'>
          {Array.from({ length: data.lifes }).map((_, index) => (
            <TbHeartFilled key={index} className='text-xl text-red-400' />
          ))}
        </div>
        <div className='flex flex-col justify-center items-center gap-2 w-full'>
          <span className='flex gap-2 items-center p-2 border-2 border-black rounded-md'>
            <TbAlarm className='text-2xl' />
            <p className='text-lg'>05:00</p>
          </span>
          <p>iniciar - pausar</p>
        </div>
        <div className='flex justify-center items-center gap-2 w-full'>
          <TbNavigationShare className='text-xl' />
          <p>Dificultad {data.difficulty}</p>
        </div>
      </div> */}
    </div>
  )
}

export default Game
