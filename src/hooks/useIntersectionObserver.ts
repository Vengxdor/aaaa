import { useEffect, useRef, useState } from 'react'

interface Props {
  root?: Element | null
  rootMargin?: string
  threshold?: number | number[]
}

const useIntersectionObserver = (options: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasBeenVisible, setHasBeenVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasBeenVisible) {
        setIsVisible(true)
        setHasBeenVisible(true)
        observer.unobserve(entry.target) // Stop observing after it becomes visible
      }
    }, options)

    if (containerRef.current !== null) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current !== null) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [options, hasBeenVisible])

  return [containerRef, isVisible]
}

export default useIntersectionObserver
