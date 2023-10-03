/*
 * @Author: XJN
 * @Date: 2023-10-03 12:34:30
 * @LastEditors: xiaojunnanya
 * @LastEditTime: 2023-10-03 19:43:24
 * @FilePath: \demo\src\App.tsx
 * @Description: 
 * @前端实习生: 鲸落
 */
import React from 'react';

import { useRoutes } from 'react-router-dom'
import routes from '@/router/index.js'

function App() {
  return (
    <div className="App">

      {
        useRoutes(routes)
      }

    </div>
  );
}

export default App;
