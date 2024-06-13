import { memo, useEffect, useRef } from 'react'

import list from './list'
import { BilibannerStyled } from './style'
import video from './assets/1.webm'

export default memo(() => {
  const containerRef = useRef<HTMLDivElement>(null)
  let initMouseLeft = 0;

  let styleMap = {}

  useEffect(() => {
    const container = containerRef.current
    if(!container) return

    styleMap = {
      0: {
        initialStyle: {
          height: '187px',
          width: '2000px',
          translateX: 0,
          translateY: 0,
          rotate: 0,
          scale: 1,
          opacity: 1
        },
        style: null,
        element: containerRef?.current?.querySelector('.layer:nth-child(1)')?.querySelector('img')
      },
      1: {
        initialStyle: {
          height: '187px',
          width: '2000px',
          translateX: 0,
          translateY: 0,
          rotate: 0,
          scale: 1,
          opacity: 1
        },
        style: {
          direction: 'y',
          scale: 10
        },
        element: containerRef?.current?.querySelector('.layer:nth-child(2)')?.querySelector('img')
      },
      2: {
        initialStyle: {
          height: '224.4px',
          width: '2400px',
          translateX: 300,
          translateY: 24,
          rotate: 0,
          scale: 1,
          opacity: 1
        },
        style: null,
        element: containerRef?.current?.querySelector('.layer:nth-child(3)')?.querySelector('img')
      },
      3: {
        initialStyle: {
          height: '205.7px',
          width: '2200px',
          translateX: 330,
          translateY: 33,
          rotate: 0,
          scale: 1,
          opacity: 1
        },
        style: {
          direction: 'x',
          scale: 50
        },
        element: containerRef?.current?.querySelector('.layer:nth-child(4)')?.querySelector('img')
      },
      4: {
        initialStyle: {
          height: '187px',
          width: '2000px',
          translateX: 0,
          translateY: 15,
          rotate: 0,
          scale: 1,
          opacity: 1
        },
        style: null,
        element: containerRef?.current?.querySelector('.layer:nth-child(5)')?.querySelector('img')
      },
      5: {
        initialStyle: {
          height: '187px',
          width: '2000px',
          translateX: 0,
          translateY: 15,
          rotate: 0,
          scale: 1,
          opacity: 1
        },
        style: {
          direction: 'x',
          scale: 10
        },
        element: containerRef?.current?.querySelector('.layer:nth-child(6)')?.querySelector('img')
      },
      6: {
        initialStyle: {
          height: '187px',
          width: '2000px',
          translateX: 0,
          translateY: 15,
          rotate: 0,
          scale: 1,
          opacity: 1
        },
        style: {
          direction: 'x',
          scale: 10
        },
        element: containerRef?.current?.querySelector('.layer:nth-child(7)')?.querySelector('img')
      },
      7: {
        initialStyle: {
          height: '187px',
          width: '2000px',
          translateX: 0,
          translateY: 15,
          rotate: 0,
          scale: 1,
          opacity: 1
        },
        style: {
          direction: 'x',
          scale: 2
        },
        element: containerRef?.current?.querySelector('.layer:nth-child(8)')?.querySelector('img')
      },
      8: {
        initialStyle: {
          height: '187px',
          width: '2000px',
          translateX: 0,
          translateY: 15,
          rotate: 0,
          scale: 1,
          opacity: 1
        },
        style: {
          direction: 'x',
          scale: 10
        },
        element: containerRef?.current?.querySelector('.layer:nth-child(9)')?.querySelector('img')
      },
      9: {
        initialStyle: {
          height: '187px',
          width: '2000px',
          translateX: 0,
          translateY: 15,
          rotate: 0,
          scale: 1,
          opacity: 1
        },
        style: null,
        element: containerRef?.current?.querySelector('.layer:nth-child(10)')?.querySelector('img')
      },
      10: {
        initialStyle: {
          height: '187px',
          width: '2000px',
          translateX: 0,
          translateY: 15,
          rotate: 0,
          scale: 1,
          opacity: 1
        },
        style: {
          direction: 'x',
          scale: 50
        },
        element: containerRef?.current?.querySelector('.layer:nth-child(11)')?.querySelector('img')
      },
      11: {
        initialStyle: {
          height: '187px',
          width: '2000px',
          translateX: 0,
          translateY: 15,
          rotate: 0,
          scale: 1,
          opacity: 1
        },
        style: {
          direction: 'x',
          scale: 10
        },
        element: containerRef?.current?.querySelector('.layer:nth-child(12)')?.querySelector('img')
      },
      12: {
        initialStyle: {
          height: '187px',
          width: '2000px',
          translateX: 0,
          translateY: 15,
          rotate: 0,
          scale: 1,
          opacity: 1
        },
        style: {
          direction: 'x',
          scale: 30
        },
        element: containerRef?.current?.querySelector('.layer:nth-child(13)')?.querySelector('img')
      },
      13: {
        initialStyle: {
          height: '187px',
          width: '2000px',
          translateX: 0,
          translateY: 15,
          rotate: 0,
          scale: 1,
          opacity: 1
        },
        style: {
          direction: 'x',
          scale: 30
        },
        element: containerRef?.current?.querySelector('.layer:nth-child(14)')?.querySelector('img')
      },
      14: {
        initialStyle: {
          height: '187px',
          width: '2000px',
          translateX: 0,
          translateY: 15,
          rotate: 0,
          scale: 1,
          opacity: 1
        },
        style: null,
        element: containerRef?.current?.querySelector('.layer:nth-child(15)')?.querySelector('img')
      },
      15: {
        initialStyle: {
          height: '187px',
          width: '2000px',
          translateX: 0,
          translateY: 15,
          rotate: 0,
          scale: 1,
          opacity: 1
        },
        style: {
          direction: 'x',
          scale: 20
        },
        element: containerRef?.current?.querySelector('.layer:nth-child(16)')?.querySelector('img')
      },
      16: {
        initialStyle: {
          height: '187px',
          width: '2000px',
          translateX: 0,
          translateY: 15,
          rotate: 0,
          scale: 1,
          opacity: 1
        },
        style: {
          direction: 'x',
          scale: 10
        },
        element: containerRef?.current?.querySelector('.layer:nth-child(17)')?.querySelector('img')
      },
      17: {
        initialStyle: {
          height: '187px',
          width: '2000px',
          translateX: -100,
          translateY: 15,
          rotate: 0,
          scale: 1,
          opacity: 1
        },
        style: {
          direction: 'x',
          scale: 20
        },
        element: containerRef?.current?.querySelector('.layer:nth-child(18)')?.querySelector('img')
      },
      18: {
        initialStyle: {
          height: '168.3px',
          width: '1800px',
          translateX: -90,
          translateY: 0,
          rotate: 0,
          scale: 1,
          opacity: 1
        },
        style: {
          direction: 'x',
          scale: 400
        },
        element: containerRef?.current?.querySelector('.layer:nth-child(19)')?.querySelector('img')
      },
      19: {
        initialStyle: {
          height: '187px',
          width: '2000px',
          translateX: 0,
          translateY: 0,
          rotate: 0,
          scale: 1,
          opacity: 1
        },
        style: {
          direction: 'x',
          scale: 10
        },
        element: containerRef?.current?.querySelector('.layer:nth-child(20)')?.querySelector('img')
      },
      20: {
        initialStyle: {
          height: '187px',
          width: '2000px',
          translateX: 0,
          translateY: 0,
          rotate: 0,
          scale: 1,
          opacity: 1
        },
        style: {
          direction: 'x',
          scale: 10
        },
        element: containerRef?.current?.querySelector('.layer:nth-child(21)')?.querySelector('img')
      },
      21: {
        initialStyle: {
          height: '205.7px',
          width: '2200px',
          translateX: 0,
          translateY: 0,
          rotate: 0,
          scale: 1,
          opacity: 1
        },
        style: {
          direction: 'x',
          scale: 200
        },
        element: containerRef?.current?.querySelector('.layer:nth-child(22)')?.querySelector('img')
      },
      22: {
        initialStyle: {
          height: '187px',
          width: '2000px',
          translateX: 0,
          translateY: 15,
          rotate: 0,
          scale: 1,
          opacity: 1
        },
        style: {
          direction: 'x',
          scale: 200
        },
        element: containerRef?.current?.querySelector('.layer:nth-child(23)')?.querySelector('img')
      },
    }

    init()
    const mouseEnterFun = (e: any) =>{
      e.stopPropagation()
      // 开始监听偏移量
      startListener()
    }

    const mouseLeaveFun = (e: any) =>{
      e.stopPropagation()
      // 结束监听偏移量
      container.removeEventListener('mousemove', startListener)
    }

    container.addEventListener('mouseenter', mouseEnterFun)

    container.addEventListener('mouseleave', mouseLeaveFun)


    return () =>{
      container.removeEventListener('mouseenter', mouseEnterFun)
      container.removeEventListener('mouseleave', mouseLeaveFun)
    }

  }, [ containerRef.current ])

  const startListener = () =>{
    if(!containerRef.current) return
    const { current } = containerRef

    current.addEventListener('mousemove', (e: any) =>{
      const { pageX  } = e
      const mouseLeft = pageX - current.offsetLeft;
      Object.keys(styleMap).forEach(item => {
        // @ts-ignore
        const current = styleMap[item];
        if (current.style) {
          const initStyle = current.initialStyle;
          const style = current.style;
          const element = current.element;
          // 计算偏移
          const offset = calcutedPosition(mouseLeft, style.scale);
          let styleResult = `height: ${initStyle.height}; width: ${initStyle.width}; opacity: ${initStyle.opacity}; object-fit: ${initStyle.objectFit};`;

          if (style.direction === 'y') {
            styleResult += `transform: translate(${initStyle.translateX}px, ${initStyle.translateY - offset}px) rotate(${initStyle.rotate}deg) scale(${initStyle.scale});`
          } else {
            styleResult += `transform: translate(${initStyle.translateX - offset}px, ${initStyle.translateY}px) rotate(${initStyle.rotate}deg) scale(${initStyle.scale});`
          }
          element.style = styleResult;
        }
      })
    })
  }

  const calcutedPosition = (mouseLeft: number, scale: number) =>{
    return -(mouseLeft - initMouseLeft) * scale / containerRef?.current!.offsetWidth;
  }

  const init = () => {
    Object.keys(styleMap).forEach(item => {
      // @ts-ignore
      const current = styleMap[item];
      const initStyle = current.initialStyle;
      current.element.style = `height: ${initStyle.height}; width: ${initStyle.width}; transform: translate(${initStyle.translateX}px, ${initStyle.translateY}px) rotate(${initStyle.rotate}deg) scale(${initStyle.scale}); opacity: ${initStyle.opacity}; object-fit: ${initStyle.objectFit}`;
    });
  }

  return (
    <BilibannerStyled className="animated-banner" ref={containerRef}>
      {
        list.map(item =>{
          return (
            <div className="layer" key={item.img}>
              <img src={item.img} data-height="187" data-width="2000" height={item.height} width={item.width} />
            </div>
          )
        })
      }
      <div className="layer">
        <video loop muted autoPlay src={video} width="180" height="100" data-height="100" data-width="180"></video>
      </div>
    </BilibannerStyled>
  )
})