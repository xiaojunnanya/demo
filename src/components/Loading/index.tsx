import { memo } from 'react'
import { Spin } from 'antd';
import { LoadingStyled } from './style.ts';

const index = memo(() => {
  return (
    <LoadingStyled>
      <Spin size="large"/>
    </LoadingStyled>
  )
})

export default index