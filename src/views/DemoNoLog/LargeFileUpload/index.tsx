/*
 * @Author: XJN
 * @Date: 2023-10-05 09:52:36
 * @LastEditors: xiaojunnanya
 * @LastEditTime: 2023-10-05 22:36:25
 * @FilePath: \demo\src\views\DemoNoLog\LargeFileUpload\index.tsx
 * @Description: 大文件上传
 * @前端实习生: 鲸落
 */

import React, { memo, useRef } from 'react';
import SparkMD5 from "spark-md5";

import { largeFileUpload } from '@/service/modules/fileUpload'

// 切片
function fileSlice(file: any, chunkSize: number){
  const result = []
  for (let i = 0; i < file.size; i+= chunkSize) {
    result.push(file.slice(i, i+chunkSize))
  }
  
  return result
}

// 计算hash
function hash(chunks: any){

  return new Promise((resolve, reject) =>{

    const spark = new SparkMD5()
    function _read(i: number){
      if(i >= chunks.length){
        resolve(spark.end())
        return 
      }

      const blob = chunks[i]
      const reader = new FileReader()
      reader.onload = e =>{
        const bytes: any = e.target?.result
        spark.append(bytes)
        _read(i+1)
      }
      reader.readAsArrayBuffer(blob)
    }

    _read(0)

  })

  
}


const LargeFileUpload = memo(() => {

  const ipt = useRef<HTMLInputElement>(null)

  async function fileUpload(){
    if(!ipt.current || !ipt.current.files) return
    
    const file = ipt.current.files[0]
    
    
    const result = fileSlice( file, 10 * 1024 * 1024 )
    // console.log(result[0]);
    
    const hashs = await hash(result)
    console.log(hashs);

    // for (let i = 0; i < result.length; i++) {
      
    // }

    largeFileUpload('', result[0], 'aa.mp4', hashs, 0, 1).then(res =>{
      console.log(res);
      
    })
    
  }
  

  return (
    <>
      <input type="file" onChange={fileUpload} ref={ipt}/>
    </>
  )
})

export default LargeFileUpload