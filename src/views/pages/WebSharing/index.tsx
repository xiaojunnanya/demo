import { memo, useRef, useState } from 'react'

import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, Card, Spin } from 'antd';
import { WebSharingStyled } from './style';
const { Meta } = Card;

import html2canvas from 'html2canvas'

export default memo(() => {

    const domRef = useRef<HTMLDivElement>(null)

    const [ isLoading, setIsLoading ] = useState(false)

    const click = () =>{
        setIsLoading(true)
        
        setTimeout(async () => {
            if(!domRef.current) return
            // 采用添加dom删除dom的方式，但是创建的元素会在页面上显示，可以加一个loading遮盖住
            const dom = document.createElement("div")
            dom.innerHTML = `<div>作者：鲸落</div>`
            dom.style.textAlign = "center"

            domRef.current.appendChild(dom)
            const canvas = await html2canvas(domRef.current as HTMLDivElement, {
                width: domRef.current.offsetWidth,
                height: domRef.current.offsetHeight,
                useCORS: true,
            })
            domRef.current.removeChild(dom)
            setIsLoading(false)
            


            // 克隆dom添加会报错：index.tsx:67 Uncaught (in promise) Unable to find element in cloned iframe
            // const newDom = domRef.current.cloneNode(true) as HTMLDivElement
            // const dom = document.createElement("div")
            // dom.innerHTML = `<div>作者：鲸落</div>`
            // dom.style.textAlign = "center"

            // newDom.appendChild(dom)
            // const canvas = await html2canvas(newDom, {
            //     width: newDom.offsetWidth,
            //     height: newDom.offsetHeight,
            //     useCORS: true,
            // })

            const imgUrl = canvas.toDataURL("image/jpeg", 1)
            let newOpen=window.open('', '_blank');
            let img = newOpen!.document.createElement("img");
            let div = document.createElement("div");
            div.style.textAlign = "center"
            img.src=imgUrl;
            div.appendChild(img);
            newOpen!.document.body.appendChild(div);
        }, 100)
    }

    return (
        <Spin tip="Loading" spinning={isLoading} style={{
            background: '#fff',
        }}>
            <WebSharingStyled>
                <div ref={domRef}>
                    <Card 
                        style={{ width: 300 }}
                        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                        actions={[
                            <SettingOutlined key="setting" />,
                            <EditOutlined key="edit" />,
                            <EllipsisOutlined key="ellipsis" />,
                        ]}
                    >
                    <Meta
                        title="Card title"
                        description="This is the description"
                        />
                    </Card>
                </div>
                
                <Button type='primary' onClick={click}>生成海报</Button>
            </WebSharingStyled>
        </Spin>
    )
})