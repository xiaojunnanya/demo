/*
 * @Author: XJN
 * @Date: 2023-10-05 10:12:25
 * @LastEditors: xiaojunnanya
 * @LastEditTime: 2023-10-05 18:29:06
 * @FilePath: \demo\src\views\DemoNoLog\ALFileUpload\index.tsx
 * @Description: 阿里文件上传
 * https://www.bilibili.com/video/BV1G84y1f7k5/?spm_id_from=333.788&vd_source=dc1b135f25d3915f7546c15d552b1a56
 * @前端实习生: 鲸落
 */
import React, { memo, useState } from 'react'
import { ALFileUploadStyle } from './style'
import { Button, Upload, message  } from 'antd'
import type { UploadFile, UploadProps, RcFile } from 'antd/es/upload/interface';
const { Dragger } = Upload;

const ALFileUpload = memo(() => {

    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const [uploading, setUploading] = useState(false);

    const handleUpload = () => {
        const formData = new FormData();
        fileList.forEach((file) => {
          formData.append('files[]', file as RcFile);
        });
        setUploading(true);
        // You can use any AJAX library you like
        fetch('https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188', {
          method: 'POST',
          body: formData,
        }).then((res) => res.json())
          .then(() => {
            setFileList([]);
            message.success('upload successfully.');
          }).catch(() => {
            message.error('upload failed.');
          }).finally(() => {
            setUploading(false);
          });
      };
    
      const props: UploadProps = {
        onRemove: (file) => {
            const index = fileList.indexOf(file);
            const newFileList = fileList.slice();
            newFileList.splice(index, 1);
            setFileList(newFileList);
        },
        beforeUpload: (file) => {
            setFileList([...fileList, file]);
            return false;
        },
        fileList,
      };


  return (
    <ALFileUploadStyle>

        <Dragger {...props}>
            <p className="ant-upload-drag-icon">
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibited from uploading company data or other
            banned files.
            </p>
        </Dragger>

        <div className="drag">
            <div>将目录或多个文件拖拽到此进行扫描</div>
            <div>支持的文件类型：.jpg、.jpeg、.gif、.png</div>
            <div>每个文件允许的最大尺寸:1M</div>
        </div>
        <div className="btn-file">
            <Upload {...props}>
                <Button>选择文件</Button>
            </Upload>

            <Button
                type="primary"
                onClick={handleUpload}
                disabled={fileList.length === 0}
                loading={uploading}
                style={{ marginTop: 16 }}
            >
                {uploading ? '上传中...' : '点击上传'}
            </Button>
        </div>
    </ALFileUploadStyle>
  )
})

export default ALFileUpload