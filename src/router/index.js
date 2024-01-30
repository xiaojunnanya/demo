/*
 * @Author: XJN
 * @Date: 2023-10-03 19:29:14
 * @LastEditors: xiaojunnanya
 * @LastEditTime: 2023-10-23 19:29:41
 * @FilePath: \demo\src\router\index.js
 * @Description: 
 * @前端实习生: 鲸落
 */
import React from "react"

const Home = React.lazy(()=> import("@/views/Home"))
const TodoList = React.lazy(()=> import("@/views/DemoNoLog/TodoList"))
const NumberScrolling = React.lazy(()=> import("@/views/DemoNoLog/Numberscrolling"))
const LargeFileUpload = React.lazy(()=> import("@/views/DemoNoLog/LargeFileUpload"))
const ALFileUpload = React.lazy(()=> import("@/views/DemoNoLog/ALFileUpload"))
const Markded = React.lazy(()=> import("@/views/DemoNoLog/Markded"))
const NotFound = React.lazy(()=> import("@/views/NotFound"))


const routes = [
    {
        path:'/',
        element: <Home></Home>
    },
    {
        path:'/todolist',
        element: <TodoList></TodoList>
    },
    {
        path:'/numberscrolling',
        element: <NumberScrolling></NumberScrolling>
    },
    {
        path:'/largefileupload',
        element: <LargeFileUpload></LargeFileUpload>
    },
    {
        path:'/alfileupload',
        element: <ALFileUpload></ALFileUpload>
    },
    {
        path:'/markded',
        element: <Markded></Markded>
    },
    {
        path:'*',
        element: <NotFound></NotFound>
    },
]

export default routes
