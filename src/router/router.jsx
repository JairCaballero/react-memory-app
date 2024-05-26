import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import LayoutPublic from '../layouts/LayoutPublic'

const router = createBrowserRouter([
  {
    element: <LayoutPublic />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
])

export default router
