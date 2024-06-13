import { RouteObject } from 'react-router-dom'
import { lazy } from 'react'

const Home = lazy(() => import('../views/Home/index.tsx'))
const Bilibanner = lazy(() => import('../views/pages/Bilibanner/index.tsx'))
const Websharing = lazy(() => import('../views/pages/WebSharing/index.tsx'))

const routes:RouteObject[] = [
    {
        path:'/',
        element: <Home />,
    },
    {
        path:'/bilibanner',
        element: <Bilibanner />,
    },
    {
        path:'/websharing',
        element: <Websharing />,
    }
]

export default routes