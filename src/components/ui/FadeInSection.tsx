'use client'
import useIntersectionObserver from '@/hooks/useIntersectionObserver'

interface Props {
  children: React.ReactNode
}

export const FadeInSection = ({ children }: Props) => {
  const [containerRef, isVisible] = useIntersectionObserver({
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  })

  return (
    <div
      ref={containerRef as React.RefObject<HTMLDivElement> | null}
      className={`translate-y-5 opacity-0 transition duration-500 ${
        isVisible !== null ? 'translate-y-5 opacity-100' : ''
      }`}
    >
      {children}
    </div>
  )
}
