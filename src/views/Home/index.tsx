import { Card, Col, Row } from 'antd'
import { memo } from 'react'
import { HomeStyled } from './style'

import list from './list'
import { useNavigate } from 'react-router-dom'

export default memo(() => {
  const navigate = useNavigate()
  
  return (
    <HomeStyled>
      <Row gutter={[16, 16]}>
        {
          list.map(item =>{
            return (
              <Col span={6} key={item.id}>
                <Card title={item.title}>
                  <span onClick={()=>{navigate(item.id)}}>点击了解详情</span>
                </Card>
              </Col>
            )
          })
        }
      </Row>
    </HomeStyled>
  )
})