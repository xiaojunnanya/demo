import { createElement, memo, MouseEventHandler, useState } from 'react'
import { Component, useComponetsStore } from '../../store/components';
import { useComponentConfigStore } from '../../store/component-config';
import HoverMask from '../HoverMask';

export default memo(() => {
  const {components} = useComponetsStore();
  const { componentConfig } = useComponentConfigStore();
  const [hoverComponentId, setHoverComponentId] = useState<number>(); // 鼠标悬停的组件id

  const handleMouseOver: MouseEventHandler = (e)  => {
    const path = e.nativeEvent.composedPath();

    for (let i = 0; i < path.length; i += 1) {
        const ele = path[i] as HTMLElement;

        const componentId = ele.dataset?.componentId;
        if (componentId) {
            setHoverComponentId(+componentId);
            return;
        }
    }
}


  function renderComponents(components: Component[]): React.ReactNode {
    return components.map((component: Component) => {
        const config = componentConfig?.[component.name]

        if (!config?.component) {
            return null;
        }
        
        return createElement(
            config.component,
            {
                key: component.id,
                id:component.id,
                name: component.name,
                ...config.defaultProps,
                ...component.props,
            },
            renderComponents(component.children || [])
        )
    })
  }

  return (
    <div className='h-[100%] edit-area' onMouseOver={handleMouseOver}
      onMouseLeave={() => setHoverComponentId(undefined)}
    >
      {hoverComponentId && (
        <HoverMask
          portalWrapperClassName='portal-wrapper'
            containerClassName='edit-area'
            componentId={hoverComponentId}
        />
    )}
      {renderComponents(components)}
      <div className="portal-wrapper"></div>
    </div>
  )
})