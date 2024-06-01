import { TbAlarm, TbClockPause, TbClockPlay, TbNavigationShare, TbHeartFilled } from 'react-icons/tb'

const Game = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex justify-between w-full'>
        <div className='flex gap-2 w-full'>
          <TbHeartFilled className='text-xl text-red-400' />
          <TbHeartFilled className='text-xl text-red-400' />
          <TbHeartFilled className='text-xl text-red-400' />
          <TbHeartFilled className='text-xl text-red-400' />
          <TbHeartFilled className='text-xl text-red-400' />
        </div>

        <div className='flex flex-col justify-center items-center gap-2 w-full'>
          <span className='flex gap-2 items-center p-2 border-2 border-black rounded-md'>
            <TbAlarm className='text-2xl' />
            <p className='text-lg'>05:00</p>
          </span>
          <p>iniciar - pausar</p>
        </div>

        <div className='flex items-center justify-end gap-2 w-full'>
          <TbNavigationShare className='text-xl' />
          <p>Dificultad 2</p>
        </div>
      </div>
    </div>
  )
}

export default Game
