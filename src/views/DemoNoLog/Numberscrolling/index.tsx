/*
 * @Author: XJN
 * @Date: 2023-10-03 20:05:53
 * @LastEditors: xiaojunnanya
 * @LastEditTime: 2023-10-04 00:54:56
 * @FilePath: \demo\src\views\DemoNoLog\Numberscrolling\index.tsx
 * @Description: 数字滚动
 * @前端实习生: 鲸落
 */
import React, { memo, useEffect, useMemo, useState } from 'react'
import type { FC } from 'react'

import { LightStyled, NumberscrollStyled } from './style'
import dayjs from 'dayjs'

const lightList: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const Numberscrolling : FC = memo(() => {
  const [ time, setTime ] = useState<number>( Date.now().valueOf() )

  useEffect(()=>{
    setInterval(()=>{
      setTime( Date.now().valueOf() )
    }, 1000)
  },[ ])

  const timeStr: string = useMemo(()=>{
      return dayjs(time).format('YYYY年MM月DD日HH时mm分ss秒')
  }, [ time ])


  return (
    <NumberscrollStyled>
      {
        timeStr.split('').map((itemx, index) =>{
          return !Number.isNaN(Number(itemx)) ? (
            <LightStyled y={-Number(itemx)} key={index }>
              <div className="light">
                <ul className='lightList'>
                  {
                    lightList.map(item =>{
                      return <li key={item }>{ item } </li>
                    })
                  }
                </ul>
              </div>
            </LightStyled>
          ) : (
            <div className='light' key={index }>{ itemx }</div>
          )
        })
      }
    </NumberscrollStyled>
  )
})

export default Numberscrolling