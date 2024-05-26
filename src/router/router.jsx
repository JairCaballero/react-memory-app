import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import More from '../pages/More'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/mas',
    element: <More />
  }
])

export default router
