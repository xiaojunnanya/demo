/*
 * @Author: XJN
 * @Date: 2023-10-03 20:05:53
 * @LastEditors: xiaojunnanya
 * @LastEditTime: 2023-10-04 10:01:36
 * @FilePath: \demo\src\views\DemoNoLog\TodoList\index.tsx
 * @Description: todo list
 * @前端实习生: 鲸落
 */
import React, { memo, useState } from 'react'
import type { FC } from 'react'
import { TodoListStyled } from './style'

const TodoList : FC = memo(() => {

  const [ complete, setComplete ] = useState< string[] >(['11', '22'])
  const [ completed, setCompleted ] = useState< string[] >(['完成', '完成22'])


  function spliceCom(e: number){
    let a = [...complete]
    let b = a.splice(e, 1)
    setComplete(a)
    completed.unshift(...b)
    setCompleted(completed)
  }

  return (
    <TodoListStyled>
      <div>
        <div>代办：</div>
        <ul className='complete'>
          {
            complete.map((item, index) =>{
              return (
                <li key={item} >
                  <input type="checkbox" id={String(index+1)} />
                  <label htmlFor={String(index+1)} onClick={() =>{ spliceCom(index) }}>{ item }</label>
                </li>
              )
            })
          }
        </ul>
      </div>
      {/* <hr /> */}
      <div>
        <div>完成：</div>
        <ul className='completed'>
          {
            completed.map(item =>{
              return (
                <li key={item}>
                  <input type="checkbox" defaultChecked disabled id='completed'/>
                  <label htmlFor="completed">{ item }</label>
                </li>
              )
            })
          }
        </ul>
      </div>
    </TodoListStyled>
  )
})

export default TodoList