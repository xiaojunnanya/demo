/*
 * @Author: XJN
 * @Date: 2023-10-03 19:29:14
 * @LastEditors: xiaojunnanya
 * @LastEditTime: 2023-10-03 20:08:40
 * @FilePath: \demo\src\router\index.js
 * @Description: 
 * @前端实习生: 鲸落
 */
import React from "react"

const Home = React.lazy(()=> import("@/views/Home"))
const TodoList = React.lazy(()=> import("@/views/DemoNoLog/TodoList"))
const NumberScrolling = React.lazy(()=> import("@/views/DemoNoLog/Numberscrolling"))

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
]

export default routes
