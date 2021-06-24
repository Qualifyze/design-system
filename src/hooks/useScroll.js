import { useSpring } from 'react-spring'

import useRect from './useRect'

const useScroll = (reference, options) => {
  const target = useRect(reference, true)
  const offset = options?.offset || 0
  const [, setY] = useSpring(() => ({ y: 0 }))

  const scrollTo = () => {
    setY({
      y: target?.y + offset,
      reset: true,
      from: { y: window.scrollY },
      onFrame: ({ y }) => window.scroll(0, y),
    })
  }

  return scrollTo
}

export default useScroll
