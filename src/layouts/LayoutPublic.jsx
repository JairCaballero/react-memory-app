import { Outlet } from 'react-router-dom'

const LayoutPublic = () => {
  return (
    <div className='bg-background w-screen h-screen'>
      <Outlet />
    </div>
  )
}

export default LayoutPublic
