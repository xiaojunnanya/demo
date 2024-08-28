import { createElement, memo } from 'react'
import { Component, useComponetsStore } from '../../store/components';
import { useComponentConfigStore } from '../../store/component-config';

export default memo(() => {
  const {components} = useComponetsStore();
  const { componentConfig } = useComponentConfigStore();


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
    <div>
      {renderComponents(components)}
    </div>
  )
})