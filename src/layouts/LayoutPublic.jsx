import { Outlet } from 'react-router-dom'

const LayoutPublic = () => {
  return (
    <div className='w-screen h-screen'>
      <div className='flex items-center justify-center h-auto w-full'>
        <div className='container 2xl:max-w-[1280px] mx-auto p-[2rem]'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default LayoutPublic
