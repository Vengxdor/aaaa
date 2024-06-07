'use client'
import { useRef } from 'react'

const sections = [
  { name: 'Home', link: '#home' },
  { name: 'Projects', link: '#projects' },
  { name: 'About', link: '#about' },
  { name: 'Contact', link: '#contact' }
]

export default function Navbar () {
  const backdrop = useRef<HTMLDivElement>(null)

  const handleEnter = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const target = e.target as HTMLLIElement
    const { left, top, height, width } = target.getBoundingClientRect()

    if (backdrop.current === null) return
    backdrop.current.style.setProperty('left', `${left}px`)
    backdrop.current.style.setProperty('top', `${top}px`)
    backdrop.current.style.setProperty('height', `${height}px`)
    backdrop.current.style.setProperty('width', `${width}px`)

    backdrop.current.style.opacity = '1'
    backdrop.current.style.visibility = 'visible'
  }

  const handleLeave = () => {
    if (backdrop.current === null) return
    backdrop.current.style.opacity = '0 '
    backdrop.current.style.visibility = 'hidden'
  }
  return (
    <nav className="text-md sticky top-0 flex justify-center gap-3 py-10 ">
      {sections.map((section) => (
        <a
          className="px-3 py-1.5 text-white/80 transition-colors duration-300 hover:text-white"
          href={section.link}
          onMouseLeave={handleLeave}
          onMouseEnter={handleEnter}
          key={section.name}
        >
          {section.name}
        </a>
      ))}
      <div
        className="absolute left-[var(--left)] top-[var(--top)] -z-10 h-[var(--height)] w-[var(--width)] rounded-md bg-zinc-800 backdrop-blur-lg transition-all delay-75 duration-300 ease-in-out"
        ref={backdrop}
      ></div>
    </nav>
  )
}
