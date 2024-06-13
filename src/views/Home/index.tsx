import { Card, Col, Row } from 'antd'
import { memo } from 'react'
import { HomeStyled } from './style'

import list from './list'

export default memo(() => {
  return (
    <HomeStyled>
      <Row gutter={[16, 16]}>
        {
          list.map(item =>{
            return (
              <Col span={6} key={item.id}>
                <Card title={item.title}>
                  点击了解详情
                </Card>
              </Col>
            )
          })
        }
      </Row>
    </HomeStyled>
  )
})