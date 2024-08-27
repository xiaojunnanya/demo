import { RouteObject } from 'react-router-dom'
import { lazy } from 'react'

const Home = lazy(() => import('../views/Home/index.tsx'))
const Bilibanner = lazy(() => import('../views/pages/Bilibanner/index.tsx'))
const Websharing = lazy(() => import('../views/pages/WebSharing/index.tsx'))
const VirtualList = lazy(() => import('../views/pages/VirtualList/index.tsx'))
const LowcodeEditor = lazy(() => import('../views/pages/LowcodeEditor/index.tsx'))

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
    },
    {
        path:'/virtuallist',
        element: <VirtualList />,
    },
    {
        path:'/lowcodeEditor',
        element: <LowcodeEditor />,
    }
]

export default routes