/*
 * @Author: XJN
 * @Date: 2023-10-03 19:30:29
 * @LastEditors: xiaojunnanya
 * @LastEditTime: 2023-10-04 00:36:30
 * @FilePath: \demo\src\views\Home\index.tsx
 * @Description: 
 * @前端实习生: 鲸落
 */
/*
 * @Author: XJN
 * @Date: 2023-10-03 19:30:29
 * @LastEditors: xiaojunnanya
 * @LastEditTime: 2023-10-04 00:35:27
 * @FilePath: \demo\src\views\Home\index.tsx
 * @Description: 首页
 * @前端实习生: 鲸落
 */
import React, { memo } from 'react'
import type { FC } from 'react'

import { Card, List, message, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

import { HomeStyle } from './style'
import { dataNoLog, dataLogin } from './data';
import logo from '@/assets/images/1.jpg'


const Home : FC = memo(() => {

  const [ messageApi, contextHolder ] = message.useMessage();
  const navigate = useNavigate()
  function findDetail(e: string){
    if(e !== '/'){
      navigate(e)
    }else{
      messageApi.destroy()
      messageApi.info('项目还在完善中，敬请期待~~~');
    }
  }

  return (
    <HomeStyle>

      <div className="left">

        { contextHolder }

        <List grid={{gutter: 16,xs: 1,sm: 2,md: 4,lg: 4,xl: 6,xxl: 3}} dataSource={dataNoLog} renderItem={(item) => (
            <List.Item>
              <Card title={item.title} onClick={()=>findDetail(item.url)}>点击查看</Card>
            </List.Item>
        )}></List>

        <div className="line-text">
            <span>下面的Demo体验需要登录账号哦</span>
        </div>

        <List grid={{gutter: 16,xs: 1,sm: 2,md: 4,lg: 4,xl: 6,xxl: 3}} dataSource={dataLogin} renderItem={(item) => (
            <List.Item>
              <Card title={item.title} onClick={()=>findDetail(item.url)}>点击查看</Card>
            </List.Item>
        )}></List>

      </div>
      <div className="right">
        <img src={logo} alt="logo" />

        <div className='user'>游客访问</div>

        <Button type="primary">登录</Button>
      </div>

    </HomeStyle>
  )
})

export default Home