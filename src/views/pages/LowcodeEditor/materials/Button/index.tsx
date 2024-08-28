import { Button as AntdButton } from 'antd';
import { CommonComponentProps } from '../../interface';

const Button = ({type, text, id}: CommonComponentProps) => {
  return (
    <AntdButton type={type} data-component-id={id}>{text}</AntdButton>
  )
}

export default Button;