import { createBrowserRouter } from 'react-router-dom'
import { Events } from '../pages/events'
import { Participants } from '../pages/participants'
import { DefaultLayout } from '../layouts/default-layout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Events />,
      },
      {
        path: '/participants',
        element: <Participants />,
      },
    ],
  },
])
