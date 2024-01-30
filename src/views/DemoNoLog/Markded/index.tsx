/*
 * @Author: XJN
 * @Date: 2023-10-23 19:29:27
 * @LastEditors: xiaojunnanya
 * @LastEditTime: 2023-10-24 22:45:04
 * @FilePath: \demo\src\views\DemoNoLog\Markded\index.tsx
 * @Description: 
 * @前端实习生: 鲸落
 */
import React, { memo, useEffect } from 'react'
import fs from 'fs'

const Markded = memo(() => {

  useEffect(() => {
    // 指定要读取的文件夹路径
    const folderPath = '../ALFileUpload';

    // 读取文件夹中的所有文件
    fs.readdir(folderPath, (err, files) => {
      if (err) {
        console.error('读取文件夹出错：', err);
      } else {
        console.log('文件列表：', files);
        // 这里你可以对文件列表进行任何你需要的处理
      }
    });
  }, []);

  return (
    <div>markded</div>
  )
})

export default Markded