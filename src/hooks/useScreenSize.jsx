import { useEffect, useState } from 'react';

export default function useScreenSize() {
  const [screenWidth, setScreenWidth] = useState(0)

  useEffect(() => {
    const onResize = () => {
      setScreenWidth(window.innerWidth)
    }

    onResize()

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return screenWidth
}

export function useIsSmallViewport(maxWidth = 700) {
  const screenWidth = useScreenSize()

  return screenWidth < maxWidth
}