import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Game from '../pages/Game'
import LayoutPublic from '../layouts/LayoutPublic'

const router = createBrowserRouter([
  {
    element: <LayoutPublic />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/game',
        element: <Game />
      }
    ]
  }
])

export default router
