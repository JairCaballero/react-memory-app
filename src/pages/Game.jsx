import { useEffect, useState } from 'react'
import { TbAlarm, TbClockPause, TbClockPlay, TbNavigationShare, TbHeartFilled } from 'react-icons/tb'

const Game = () => {
  const [numBlockBase, setNumBlockBase] = useState(0)
  const data = JSON.parse(localStorage.getItem('data'))

  useEffect(() => {
    if (parseInt(data.difficulty) === 1) {
      setNumBlockBase(9)
    }
    if (parseInt(data.difficulty) === 2) {
      setNumBlockBase(16)
    }
    if (parseInt(data.difficulty) === 3) {
      setNumBlockBase(25)
    }
    if (parseInt(data.difficulty) === 4) {
      setNumBlockBase(36)
    }
    if (parseInt(data.difficulty) === 5) {
      setNumBlockBase(49)
    }
  }, [])

  if (!data) return

  return (
    <>
      {/* informacion */}

      <div className='flex gap-10 h-screen py-32'>
        {/* game */}
        <div className='max-w-[60%] grid gap-5' style={{ gridTemplateColumns: `repeat(${Math.sqrt(numBlockBase)}, minmax(0, 1fr))` }}>
          {Array.from({ length: numBlockBase }).map((_, index) => (
            <div
              key={index + 1}
              className='w-full bg-gray-400 rounded aspect-square'
            >
              {/* {index + 1} */}
            </div>
          ))}
        </div>
        {/* info */}
        <div className='flex flex-col items-center gap-8 w-[40%]'>
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
        </div>
      </div>
    </>
  )
}

export default Game
