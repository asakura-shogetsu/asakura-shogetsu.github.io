import { useEffect, useState } from 'react';

const isMobile = () => {
  if (typeof window === "undefined") {
    return false
  }

  const widthThreshold = 640
  const [width, setWidth] = useState(window.innerWidth)
  const updateWidth = (event) => {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener(`resize`, updateWidth, {
      capture: false,
      passive: true,
    })

    return () => window.removeEventListener(`resize`, updateWidth)
  })

  if (width < widthThreshold) {
    return true
  }
  return false
};

export default isMobile;
