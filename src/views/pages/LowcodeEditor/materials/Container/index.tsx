import { CommonComponentProps } from '../../interface';
import { useMaterailDrop } from '../../hooks/useMaterialDrop';

const Container = ({ id, children }: CommonComponentProps) => {
  const {canDrop, drop } = useMaterailDrop(['Button', 'Container'], id)

  return (
      <div 
          ref={drop}
          className={`min-h-[100px] p-[20px] ${ canDrop ? 'border-[2px] border-[blue]' : 'border-[1px] border-[#000]'}`}
      >{children}</div>
  )
}

export default Container;